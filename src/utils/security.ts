
import DOMPurify from 'dompurify';

// Input validation patterns - Updated to be more flexible
export const VALIDATION_PATTERNS = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^[\+]?[0-9\s\-\(\)]{8,20}$/, // More flexible phone validation
  name: /^[a-zA-Z\u0600-\u06FF\s\'\-\.]{2,50}$/, // Allow apostrophes, hyphens, periods
  text: /^[a-zA-Z0-9\u0600-\u06FF\s\.,!?\-@#$%&*+=/:;'"()[\]{}|\\~`]{1,500}$/, // More punctuation allowed
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

// Better error messages with specific guidance
export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address (e.g., user@example.com)',
  phone: 'Please enter a valid phone number (8-20 digits, +, spaces, hyphens allowed)',
  name: 'Name should contain 2-50 letters, spaces, apostrophes, hyphens, or periods only',
  text: 'Text contains invalid characters. Letters, numbers, and common punctuation are allowed',
  tooLong: (limit: number) => `Input too long (maximum ${limit} characters)`,
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
    return { isValid: false, error: ERROR_MESSAGES.required };
  }

  if (!value && !required) {
    return { isValid: true };
  }

  const sanitized = sanitizeInput(value);
  
  const limit = INPUT_LIMITS[type as keyof typeof INPUT_LIMITS];
  if (limit && sanitized.length > limit) {
    return { isValid: false, error: ERROR_MESSAGES.tooLong(limit) };
  }

  if (!VALIDATION_PATTERNS[type].test(sanitized)) {
    return { isValid: false, error: ERROR_MESSAGES[type] || 'Invalid format' };
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
