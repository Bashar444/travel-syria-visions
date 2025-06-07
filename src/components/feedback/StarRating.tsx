
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating = ({ rating, onRatingChange }: StarRatingProps) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {language === 'ar' ? 'تقييمك للخدمة' : 'Service Rating'}
      </label>
      <div className="flex space-x-1 rtl:space-x-reverse">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`p-1 transition-colors ${
              star <= rating ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
