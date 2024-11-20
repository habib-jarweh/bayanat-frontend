import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPost } from '../utils/contentful';
import { marked } from 'marked';
import { Loader } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getBlogPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </div>
    </motion.article>
  );
};

export default BlogPost;
