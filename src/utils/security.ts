
import DOMPurify from 'dompurify';

// Input validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^[\+]?[0-9\s\-\(\)]{10,15}$/,
  name: /^[a-zA-Z\u0600-\u06FF\s]{2,50}$/,
  text: /^[a-zA-Z0-9\u0600-\u06FF\s\.,!?\-]{1,500}$/,
};

// Input length limits
export const INPUT_LIMITS = {
  name: 50,
  email: 100,
  phone: 20,
  message: 500,
  university: 100,
  major: 100,
};

// Sanitize HTML input
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
};

// Validate input against pattern and length
export const validateInput = (
  value: string,
  type: keyof typeof VALIDATION_PATTERNS,
  required: boolean = false
): { isValid: boolean; error?: string } => {
  if (!value && required) {
    return { isValid: false, error: 'This field is required' };
  }

  if (!value && !required) {
    return { isValid: true };
  }

  const sanitized = sanitizeInput(value);
  
  if (sanitized.length > INPUT_LIMITS[type as keyof typeof INPUT_LIMITS]) {
    return { isValid: false, error: `Input too long (max ${INPUT_LIMITS[type as keyof typeof INPUT_LIMITS]} characters)` };
  }

  if (!VALIDATION_PATTERNS[type].test(sanitized)) {
    return { isValid: false, error: 'Invalid format' };
  }

  return { isValid: true };
};

// Rate limiting for form submissions
const RATE_LIMIT_KEY = 'form_submissions';
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 10 * 60 * 1000; // 10 minutes

export const checkRateLimit = (): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  
  // Filter out old submissions
  const recentSubmissions = submissions.filter((timestamp: number) => 
    now - timestamp < TIME_WINDOW
  );
  
  // Update localStorage
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  
  const remaining = MAX_SUBMISSIONS - recentSubmissions.length;
  
  return {
    allowed: recentSubmissions.length < MAX_SUBMISSIONS,
    remaining: Math.max(0, remaining)
  };
};

export const recordSubmission = (): void => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  submissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions));
};

// Honeypot field detection
export const createHoneypot = () => ({
  name: 'website_url',
  style: { display: 'none' },
  tabIndex: -1,
  autoComplete: 'off'
});

export const isHoneypotTriggered = (honeypotValue: string): boolean => {
  return honeypotValue.length > 0;
};
