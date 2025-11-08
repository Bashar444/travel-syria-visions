
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SuccessStory } from '@/data/successStoriesData';
import ShareButtons from './ShareButtons';

interface StoryCardProps {
  story: SuccessStory;
  index: number;
}

const StoryCard = ({ story, index }: StoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const { direction } = useLanguage();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-xl university-card animate-fade-in`} 
          style={{ animationDelay: `${index * 100}ms` }}>
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <img 
            src={story.image}
            alt={story.studentName}
            className="w-16 h-16 rounded-full object-cover shadow-md"
            loading="lazy"
          />
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-[#231F20] mb-2">
              {story.title}
            </CardTitle>
            <p className="text-[#0018A8] font-semibold text-lg mb-2">
              {story.summary}
            </p>
            <Badge className="bg-[#EE3524] text-white hover:bg-red-600 mb-3">
              {direction === 'rtl' ? 'الإنجاز الرئيسي' : 'Key Achievement'}
            </Badge>
            <p className="text-sm text-gray-600 font-medium">
              {story.keyAchievement}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t pt-4 mb-4">
            <p className="text-gray-700 leading-relaxed text-base">
              {story.fullStory}
            </p>
            {story.university && (
              <div className="mt-4 p-3 bg-[#F6F8FC] rounded-lg">
                <p className="text-sm text-[#0018A8] font-medium">
                  <span className="font-semibold">
                    {direction === 'rtl' ? 'الجامعة: ' : 'University: '}
                  </span>
                  {story.university}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">
                    {direction === 'rtl' ? 'الدولة: ' : 'Country: '}
                  </span>
                  {story.country}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-3 mt-4">
          <Button
            onClick={toggleExpanded}
            variant="outline"
            className="flex items-center gap-2 border-[#0018A8] text-[#0018A8] hover:bg-[#0018A8] hover:text-white transition-all duration-200"
          >
            {isExpanded ? (
              direction === 'rtl' ? (
                <>
                  اقرأ أقل <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ChevronUp className="w-4 h-4" /> Read Less
                </>
              )
            ) : (
              direction === 'rtl' ? (
                <>
                  اقرأ المزيد <ChevronDown className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> Read More
                </>
              )
            )}
          </Button>
          
          <div className="relative">
            <Button
              onClick={() => setShowShare(!showShare)}
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-[#0018A8] transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            {showShare && (
              <ShareButtons 
                story={story} 
                onClose={() => setShowShare(false)} 
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
