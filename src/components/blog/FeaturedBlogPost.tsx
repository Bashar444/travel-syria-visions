
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogData';

interface FeaturedBlogPostProps {
  post: BlogPost;
}

const FeaturedBlogPost = ({ post }: FeaturedBlogPostProps) => {
  const { direction } = useLanguage();

  return (
    <div className="mb-16">
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-[#EE3524] text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              {direction === 'rtl' ? 'مميز' : 'Featured'}
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-sm mb-4">
              <span className="flex items-center space-x-1 rtl:space-x-reverse">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#231F20] mb-4 hover:text-[#0018A8] transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <Link to={`/blog/${post.slug}`}>
              <Button className="bg-[#EE3524] hover:bg-red-600 self-start transition-all duration-300 transform hover:scale-105">
                {direction === 'rtl' ? 'اقرأ المزيد' : 'Read More'}
                <ArrowRight className={`w-4 h-4 ${direction === 'rtl' ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FeaturedBlogPost;
