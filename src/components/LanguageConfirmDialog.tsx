
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  targetLanguage: string;
}

const LanguageConfirmDialog = ({ open, onOpenChange, onConfirm, targetLanguage }: LanguageConfirmDialogProps) => {
  const { t, language } = useLanguage();

  const getConfirmMessage = () => {
    if (targetLanguage === 'ar') {
      return t('mobile.language-confirm');
    } else {
      return t('mobile.language-confirm-ar');
    }
  };

  const getConfirmButton = () => {
    if (targetLanguage === 'ar') {
      return t('mobile.change-to-arabic');
    } else {
      return t('mobile.change-to-english');
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-[90%] max-w-md mx-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#0018A8] text-content">
            {t('mobile.language-prompt')}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-content">
            {getConfirmMessage()}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-2">
          <AlertDialogCancel className="text-content">
            {t('mobile.cancel')}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm}
            className="bg-[#0018A8] hover:bg-[#00A3E0] text-white"
          >
            {getConfirmButton()}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LanguageConfirmDialog;
