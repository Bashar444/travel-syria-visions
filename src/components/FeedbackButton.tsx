
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FeedbackDialog from './feedback/FeedbackDialog';

const FeedbackButton = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110"
        size="lg"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        {t('feedback.button')}
      </Button>
      
      <FeedbackDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default FeedbackButton;
