
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InteractiveMessageProps {
  content: string;
  links?: Array<{
    text: string;
    url: string;
    type?: 'internal' | 'external' | 'whatsapp' | 'email' | 'phone';
  }>;
  quickActions?: Array<{
    text: string;
    action: () => void;
    variant?: 'default' | 'outline';
  }>;
}

const InteractiveMessage = ({ content, links = [], quickActions = [] }: InteractiveMessageProps) => {
  const { direction } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'whatsapp':
        return <MessageCircle className="w-3 h-3" />;
      case 'email':
        return <Mail className="w-3 h-3" />;
      case 'phone':
        return <Phone className="w-3 h-3" />;
      default:
        return <ExternalLink className="w-3 h-3" />;
    }
  };

  const handleLinkClick = (link: any) => {
    if (link.type === 'whatsapp') {
      window.open(`https://wa.me/963985453247`, '_blank');
    } else if (link.type === 'email') {
      window.open('mailto:info@travel.ltd', '_blank');
    } else if (link.type === 'phone') {
      window.open('tel:+963985453247', '_blank');
    } else if (link.type === 'internal') {
      window.location.href = link.url;
    } else {
      window.open(link.url, '_blank');
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm leading-relaxed" dir={direction}>
        {content}
      </p>
      
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleLinkClick(link)}
              className="text-xs h-7 px-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              {getIcon(link.type || 'external')}
              <span className="ml-1">{link.text}</span>
            </Button>
          ))}
        </div>
      )}
      
      {quickActions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'default'}
              size="sm"
              onClick={action.action}
              className="text-xs h-7 px-2"
            >
              {action.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveMessage;
