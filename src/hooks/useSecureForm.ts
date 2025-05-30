
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  validateInput, 
  sanitizeInput, 
  checkRateLimit, 
  recordSubmission,
  isHoneypotTriggered,
  VALIDATION_PATTERNS 
} from '@/utils/security';

interface FormField {
  value: string;
  error?: string;
  type: keyof typeof VALIDATION_PATTERNS;
  required?: boolean;
}

interface UseSecureFormProps {
  fields: Record<string, Omit<FormField, 'value' | 'error'>>;
  onSubmit: (data: Record<string, string>) => Promise<void>;
}

export const useSecureForm = ({ fields, onSubmit }: UseSecureFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, FormField>>(() => {
    const initialData: Record<string, FormField> = {};
    Object.keys(fields).forEach(key => {
      initialData[key] = { value: '', ...fields[key] };
    });
    return initialData;
  });
  
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (name: string, value: string) => {
    const sanitized = sanitizeInput(value);
    const validation = validateInput(sanitized, formData[name].type, formData[name].required);
    
    setFormData(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: sanitized,
        error: validation.isValid ? undefined : validation.error
      }
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const updatedFormData = { ...formData };

    Object.keys(formData).forEach(key => {
      const field = formData[key];
      const validation = validateInput(field.value, field.type, field.required);
      
      if (!validation.isValid) {
        updatedFormData[key] = { ...field, error: validation.error };
        isValid = false;
      }
    });

    setFormData(updatedFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (isHoneypotTriggered(honeypot)) {
      console.warn('Potential bot submission detected');
      return;
    }

    // Check rate limiting
    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      toast({
        title: "Too Many Requests",
        description: `Please wait before submitting again. You have ${rateLimit.remaining} submissions remaining.`,
        variant: "destructive",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare sanitized data
      const sanitizedData: Record<string, string> = {};
      Object.keys(formData).forEach(key => {
        sanitizedData[key] = formData[key].value;
      });

      await onSubmit(sanitizedData);
      recordSubmission();

      // Reset form on success
      const resetData: Record<string, FormField> = {};
      Object.keys(fields).forEach(key => {
        resetData[key] = { value: '', ...fields[key] };
      });
      setFormData(resetData);
      setHoneypot('');

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    honeypot,
    setHoneypot,
    isSubmitting,
    updateField,
    handleSubmit,
    getFieldProps: (name: string) => ({
      value: formData[name]?.value || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        updateField(name, e.target.value),
      error: formData[name]?.error,
    }),
  };
};
