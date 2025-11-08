
import { BlogPost } from '@/data/blogData';
import BlogPostCard from './BlogPostCard';

interface BlogPostGridProps {
  posts: BlogPost[];
}

const BlogPostGrid = ({ posts }: BlogPostGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogPostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogPostGrid;
