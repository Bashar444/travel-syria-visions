
import { SuccessStory } from '@/data/successStoriesData';
import { useLanguage } from '@/contexts/LanguageContext';

interface ShareButtonsProps {
  story: SuccessStory;
  onClose: () => void;
}

const ShareButtons = ({ story, onClose }: ShareButtonsProps) => {
  const { direction } = useLanguage();
  const currentUrl = window.location.href;
  const shareText = `${story.title} - ${story.summary}`;

  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
    onClose();
  };

  return (
    <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 min-w-[200px]">
      <div className="text-sm font-medium text-gray-700 mb-2">
        {direction === 'rtl' ? 'شارك هذه القصة' : 'Share this story'}
      </div>
      <div className="space-y-2">
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link.url)}
            className={`w-full text-left px-3 py-2 text-white text-sm rounded transition-colors ${link.color}`}
          >
            {link.name}
          </button>
        ))}
      </div>
      <button
        onClick={onClose}
        className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
    </div>
  );
};

export default ShareButtons;
