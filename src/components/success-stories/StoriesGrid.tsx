
import { SuccessStory } from '@/data/successStoriesData';
import StoryCard from './StoryCard';

interface StoriesGridProps {
  stories: SuccessStory[];
}

const StoriesGrid = ({ stories }: StoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {stories.map((story, index) => (
        <StoryCard key={story.id} story={story} index={index} />
      ))}
    </div>
  );
};

export default StoriesGrid;
