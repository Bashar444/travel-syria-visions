
import { User, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveMessage from './InteractiveMessage';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
  interactive?: {
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
  };
}

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
  onQuickAction?: (action: string) => void;
}

const ChatMessage = ({ message, isTyping, onQuickAction }: ChatMessageProps) => {
  const { direction, language } = useLanguage();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isTyping) {
    return (
      <div className={`flex items-start space-x-3 rtl:space-x-reverse ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-2 border-blue-200">
          <img 
            src="/lovable-uploads/2c3d2565-cf55-4e3f-90be-976a27dfc66c.png" 
            alt="Travel.Ltd Logo" 
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[80%]">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start space-x-3 rtl:space-x-reverse ${
      message.isUser 
        ? `justify-end ${direction === 'rtl' ? 'flex-row' : 'flex-row-reverse'}` 
        : direction === 'rtl' ? 'flex-row-reverse' : ''
    }`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        message.isUser 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
          : 'bg-white border-2 border-blue-200'
      }`}>
        {message.isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <img 
            src="/lovable-uploads/2c3d2565-cf55-4e3f-90be-976a27dfc66c.png" 
            alt="Travel.Ltd Logo" 
            className="w-5 h-5 object-contain"
          />
        )}
      </div>
      
      <div className={`rounded-2xl px-4 py-3 max-w-[80%] ${
        message.isUser 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        {message.interactive && !message.isUser ? (
          <InteractiveMessage
            content={message.text}
            links={message.interactive.links}
            quickActions={message.interactive.quickActions?.map(qa => ({
              ...qa,
              action: () => onQuickAction?.(qa.text)
            }))}
          />
        ) : (
          <p className="text-sm leading-relaxed" dir={direction}>
            {message.text}
          </p>
        )}
        <div className={`flex items-center mt-2 text-xs opacity-70 ${
          message.isUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          <Clock className="w-3 h-3 mr-1" />
          <span>{formatTime(message.timestamp)}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
