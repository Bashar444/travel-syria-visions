
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, Bell } from 'lucide-react';

interface MobileHeaderButtonsProps {
  onCallClick: () => void;
  onNotificationClick: () => void;
}

const MobileHeaderButtons = ({ onCallClick, onNotificationClick }: MobileHeaderButtonsProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-1">
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
