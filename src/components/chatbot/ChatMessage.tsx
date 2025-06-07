
import { User, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarImage 
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop&crop=face" 
            alt="Travel Assistant" 
          />
          <AvatarFallback className="bg-blue-100 text-blue-600 text-xs font-semibold">
            T
          </AvatarFallback>
        </Avatar>
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
      <Avatar className="w-8 h-8 flex-shrink-0">
        {message.isUser ? (
          <>
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=100&h=100&fit=crop&crop=face" 
              alt="Travel Assistant" 
            />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-xs font-semibold">
              T
            </AvatarFallback>
          </>
        )}
      </Avatar>
      
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
