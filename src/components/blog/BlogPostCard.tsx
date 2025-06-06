
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogData';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { direction } = useLanguage();

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#0018A8]/30">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-xs mb-2">
          <span className="flex items-center space-x-1 rtl:space-x-reverse">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center space-x-1 rtl:space-x-reverse">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </span>
        </div>
        <CardTitle className="text-lg leading-tight hover:text-[#0018A8] transition-colors cursor-pointer">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <Link to={`/blog/${post.slug}`}>
          <Button variant="outline" size="sm" className="text-[#EE3524] border-[#EE3524] hover:bg-[#EE3524] hover:text-white transition-all duration-300 transform hover:scale-105">
            {direction === 'rtl' ? 'اقرأ المزيد' : 'Read More'}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
