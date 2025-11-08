
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, Bell, Languages } from 'lucide-react';

interface MobileHeaderButtonsProps {
  onLanguageClick: () => void;
  onCallClick: () => void;
  onNotificationClick: () => void;
}

const MobileHeaderButtons = ({ onLanguageClick, onCallClick, onNotificationClick }: MobileHeaderButtonsProps) => {
  const { language, t } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {/* Language Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onLanguageClick}
        className="h-8 w-8 p-0 hover:bg-[#F6F8FC] transition-all duration-200"
        title={t('mobile.language-prompt')}
      >
        <div className="flex flex-col items-center">
          <Languages className="h-4 w-4 text-[#0018A8]" />
          <span className="text-xs text-[#0018A8] font-medium leading-none">
            {language === 'ar' ? 'EN' : 'عر'}
          </span>
        </div>
      </Button>

      {/* Call Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onCallClick}
        className="h-8 w-8 p-0 hover:bg-[#F6F8FC] transition-all duration-200"
        title={t('mobile.call-now')}
      >
        <PhoneCall className="h-4 w-4 text-[#00A3E0]" />
      </Button>

      {/* Notification Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onNotificationClick}
        className="h-8 w-8 p-0 hover:bg-[#F6F8FC] transition-all duration-200 relative"
        title={t('mobile.notifications')}
      >
        <Bell className="h-4 w-4 text-[#0018A8]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></div>
      </Button>
    </div>
  );
};

export default MobileHeaderButtons;
