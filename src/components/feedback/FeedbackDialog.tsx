
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import FeedbackForm from './FeedbackForm';
import FeedbackSuccess from './FeedbackSuccess';

interface FeedbackDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const FeedbackDialog = ({ isOpen, onOpenChange }: FeedbackDialogProps) => {
  const { t, direction } = useLanguage();
  const [rating, setRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setRating(0);
    
    setTimeout(() => {
      setShowSuccess(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={`max-w-md max-h-[90vh] overflow-hidden flex flex-col ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-xl font-bold text-blue-600">
            {t('feedback.title')}
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            {t('feedback.subtitle')}
          </p>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          {showSuccess ? (
            <FeedbackSuccess />
          ) : (
            <FeedbackForm
              rating={rating}
              onRatingChange={setRating}
              onSuccess={handleSuccess}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
