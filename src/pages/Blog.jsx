import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Our Journey Begins",
    excerpt: "The story behind our startup and why we're building this solution.",
    date: "Nov 14, 2024",
    author: "Founder Name"
  },
  // Add more blog posts
];

const Blog = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey and learn about our progress, insights, and industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200" /> {/* Placeholder for featured image */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-3" />
                  <span className="text-sm text-gray-600">{post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
