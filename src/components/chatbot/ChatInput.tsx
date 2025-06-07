
import { useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder: string;
}

const ChatInput = ({ onSendMessage, isLoading, placeholder }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const { direction } = useLanguage();

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex items-end space-x-2 rtl:space-x-reverse">
      <div className="flex-1">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          dir={direction}
          rows={1}
          className="resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl min-h-[40px] max-h-[120px]"
          disabled={isLoading}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={!message.trim() || isLoading}
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl h-10 w-10 p-0 flex-shrink-0"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
};

export default ChatInput;
