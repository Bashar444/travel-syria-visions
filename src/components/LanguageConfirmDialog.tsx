
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

interface LanguageConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  targetLanguage: string;
}

const LanguageConfirmDialog = ({ open, onOpenChange, onConfirm }: LanguageConfirmDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-[90%] max-w-md mx-auto" dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#0018A8] text-content text-right">
            تأكيد تفعيل الواجهة العربية
          </AlertDialogTitle>
          <AlertDialogDescription className="text-content text-right leading-relaxed">
            واجهتنا صُممت بالكامل باللغة العربية لضمان تجربة واضحة للطلاب السوريين. بالضغط على تأكيد ستظهر لك جميع الصفحات والمحتوى باللغة العربية فقط.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-2 justify-end">
          <AlertDialogCancel className="text-content">
            إلغاء
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-[#0018A8] hover:bg-[#00A3E0] text-white"
          >
            تأكيد الاستخدام بالعربية
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LanguageConfirmDialog;
