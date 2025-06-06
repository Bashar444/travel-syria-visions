
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import StudentStats from '@/components/StudentStats';
import BlogHeader from '@/components/blog/BlogHeader';
import FeaturedBlogPost from '@/components/blog/FeaturedBlogPost';
import BlogPostGrid from '@/components/blog/BlogPostGrid';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { getBlogPosts } from '@/data/blogData';

const Blog = () => {
  const { direction } = useLanguage();
  const blogPosts = getBlogPosts(direction);

  return (
    <>
      <SEO 
        title={direction === 'rtl' ? "مدونة Travel.Ltd - دليلك للدراسة في الخارج" : "Travel.Ltd Blog - Your Guide to Study Abroad"}
        description={direction === 'rtl' 
          ? "اكتشف أحدث النصائح والإرشادات للدراسة في الخارج، المنح الدراسية، ومتطلبات القبول الجامعي للطلاب السوريين."
          : "Discover the latest tips and guidance for studying abroad, scholarships, and university admission requirements for Syrian students."
        }
        keywords={direction === 'rtl' ? "مدونة التعليم, الدراسة في الخارج, المنح الدراسية, القبول الجامعي, نصائح الطلاب" : "education blog, studying abroad, scholarships, university admission, student tips"}
      />
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHeader />
          <StudentStats />
          <FeaturedBlogPost post={blogPosts[0]} />
          <BlogPostGrid posts={blogPosts.slice(1)} />
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
};

export default Blog;
