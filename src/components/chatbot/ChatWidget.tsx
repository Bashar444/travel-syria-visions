
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, User, Minimize2, Maximize2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChatbot } from '@/hooks/useChatbot';

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

const ChatWidget = () => {
  const { language, direction } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: language === 'ar' 
        ? 'مرحباً! أنا Travel، مساعدك الشخصي الذكي للسفر والتعليم. كيف يمكنني مساعدتك اليوم؟' 
        : 'Hello! I am Travel, your intelligent personal assistant for travel and education. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
      interactive: {
        links: [
          { text: language === 'ar' ? 'الخدمات' : 'Services', url: '/services', type: 'internal' },
          { text: language === 'ar' ? 'الجامعات' : 'Universities', url: '/universities', type: 'internal' },
          { text: language === 'ar' ? 'واتساب' : 'WhatsApp', url: '', type: 'whatsapp' }
        ]
      }
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage, isLoading } = useChatbot();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: language === 'ar' ? 'جاري الكتابة...' : 'Typing...',
      isUser: false,
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const response = await sendMessage(text, language);
      
      // Remove typing indicator and add response
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== 'typing');
        const newMessage: Message = {
          id: Date.now().toString(),
          text: response.text || response,
          isUser: false,
          timestamp: new Date(),
          interactive: response.interactive
        };
        return [...filtered, newMessage];
      });
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== 'typing');
        return [...filtered, {
          id: Date.now().toString(),
          text: language === 'ar' 
            ? 'عذراً، حدث خطأ. يرجى التواصل معنا مباشرة على +963985453247' 
            : 'Sorry, an error occurred. Please contact us directly at +963985453247',
          isUser: false,
          timestamp: new Date(),
          interactive: {
            links: [
              { text: language === 'ar' ? 'واتساب' : 'WhatsApp', url: '', type: 'whatsapp' },
              { text: language === 'ar' ? 'اتصل الآن' : 'Call Now', url: '+963985453247', type: 'phone' }
            ]
          }
        }];
      });
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 animate-pulse ${
          direction === 'rtl' ? 'left-6' : 'right-6'
        }`}
        size="lg"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        <Avatar className="w-8 h-8">
          <AvatarImage 
            src="/lovable-uploads/212f0647-3890-45ac-9b81-977deeb54c9f.png" 
            alt="Travel Robot Assistant" 
          />
          <AvatarFallback className="bg-white text-blue-600 text-sm font-bold">
            T
          </AvatarFallback>
        </Avatar>
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-24 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white shadow-2xl border-0 rounded-2xl overflow-hidden transition-all duration-300 ${
      direction === 'rtl' ? 'left-6' : 'right-6'
    } ${isMinimized ? 'h-16' : 'h-[600px] max-h-[80vh]'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Avatar className="w-10 h-10">
            <AvatarImage 
              src="/lovable-uploads/212f0647-3890-45ac-9b81-977deeb54c9f.png" 
              alt="Travel Robot Assistant" 
            />
            <AvatarFallback className="bg-white text-blue-600 text-sm font-bold">
              T
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">
              {language === 'ar' ? 'Travel - مساعدك الذكي' : 'Travel - Your Smart Assistant'}
            </h3>
            <p className="text-xs opacity-90">
              {language === 'ar' ? 'مساعد ذكي للسفر والتعليم' : 'Intelligent Assistant for Travel & Education'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(600px-140px)] max-h-[calc(80vh-140px)]">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                isTyping={message.isTyping}
                onQuickAction={handleQuickAction}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t bg-gray-50 p-4">
            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
            />
          </div>
        </>
      )}
    </Card>
  );
};

export default ChatWidget;
