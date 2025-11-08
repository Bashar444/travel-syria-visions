
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import { getBlogPosts } from '@/data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const { direction } = useLanguage();
  
  const blogPosts = getBlogPosts(direction);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbItems = [
    { label: direction === 'rtl' ? 'المدونة' : 'Blog', href: '/blog' },
    { label: post.title }
  ];

  // Format content for display
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.startsWith('•')) {
          const items = paragraph.split('\n').filter(item => item.trim());
          return `<ul>${items.map(item => `<li>${item.replace('•', '').trim()}</li>`).join('')}</ul>`;
        }
        if (/^\d+\./.test(paragraph)) {
          const items = paragraph.split('\n').filter(item => item.trim());
          return `<ol>${items.map(item => `<li>${item.replace(/^\d+\.\s*/, '')}</li>`).join('')}</ol>`;
        }
        if (paragraph.includes(':') && !paragraph.includes('\n')) {
          return `<h3>${paragraph}</h3>`;
        }
        return `<p>${paragraph}</p>`;
      })
      .join('');
  };

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
      />
      
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Back Button */}
          <Link 
            to="/blog"
            className={`inline-flex items-center space-x-2 rtl:space-x-reverse text-[#0018A8] hover:text-blue-700 transition-colors mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{direction === 'rtl' ? 'العودة إلى المدونة' : 'Back to Blog'}</span>
          </Link>

          {/* Article Header */}
          <article className="mb-12">
            <div className="mb-8">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="mb-6">
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
              
              <h1 className="text-3xl lg:text-4xl font-bold text-[#231F20] mb-4 leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatContent(post.fullContent) }}
              dir={direction}
            />
          </article>

          {/* Navigation */}
          <div className="border-t pt-8">
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#EE3524] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{direction === 'rtl' ? 'العودة إلى جميع المقالات' : 'Back to All Articles'}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
