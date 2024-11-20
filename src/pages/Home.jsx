// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Newspaper, 
  Trophy, 
  LineChart, 
  ClipboardList 
} from 'lucide-react';


const ROTATING_TAGS = [
  'News & Updates',
  'Success Stories',
  'Funding Insights',
  'Case Studies'
];

const FEATURED_POSTS = [
  {
    id: 1,
    title: "Featured Post 1",
    excerpt: "Description of the first featured post goes here...",
    image: "/placeholder1.jpg",
    category: "Technology"
  },
  {
    id: 2,
    title: "Featured Post 2",
    excerpt: "Description of the second featured post goes here...",
    image: "/placeholder2.jpg",
    category: "Innovation"
  },
  {
    id: 3,
    title: "Featured Post 3",
    excerpt: "Description of the third featured post goes here...",
    image: "/placeholder3.jpg",
    category: "Research"
  },
  {
    id: 4,
    title: "Featured Post 4",
    excerpt: "Description of the fourth featured post goes here...",
    image: "/placeholder4.jpg",
    category: "Analysis"
  },
  {
    id: 5,
    title: "Featured Post 5",
    excerpt: "Description of the fifth featured post goes here...",
    image: "/placeholder5.jpg",
    category: "Insights"
  }
];

const Home = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  useEffect(() => {
    const tagInterval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % ROTATING_TAGS.length);
    }, 3000);

    return () => clearInterval(tagInterval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Rotating Tags */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Taglines */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-gray-900">Your Main </span>
              <span className="text-blue-500">Tagline </span>
              <span className="text-[#00E6CA]">Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              compelling subtagline that explains your value proposition
            </p>
          </motion.div>

          {/* Right Side - Rotating Tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.14 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div
              key={currentTagIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-3xl font-bold text-center"
            >
              <span className="text-blue-500">#</span>
              <span className="text-[#00E6CA]">{ROTATING_TAGS[currentTagIndex]}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Subscribe Section */}
      <div className="bg-gradient-to-r from-blue-600 to-[#00E6CA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-8">Subscribe to Our Newsletter</h2>
            <div className="flex gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none"
              />
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
                Subscribe 
              </button>
            </div>
          </div>
        </div>
      </div>


    {/* Featured Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
      <div className="relative overflow-hidden">
        <div className="relative h-[400px]"> {/* Adjust height as needed */}
          <button 
            onClick={() => {
              setDirection(-1);
              setStartIndex((prev) => (prev - 1 + FEATURED_POSTS.length) % FEATURED_POSTS.length);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-50"
            aria-label="Previous posts"
          >
            <ArrowLeft className="text-blue-500" />
          </button>

          <div className="absolute inset-0">
            <div className="relative h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={startIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                    {[0, 1, 2].map((offset) => {
                      const index = (startIndex + offset) % FEATURED_POSTS.length;
                      const post = FEATURED_POSTS[index];
                      
                      return (
                        <div
                          key={post.id}
                          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="h-48 bg-gray-200 relative overflow-hidden">
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {post.excerpt}
                            </p>
                            <button className="mt-4 text-blue-500 hover:text-[#00E6CA] transition-colors duration-300 text-sm font-semibold flex items-center gap-2">
                              Read More 
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button 
            onClick={() => {
              setDirection(1);
              setStartIndex((prev) => (prev + 1) % FEATURED_POSTS.length);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-50"
            aria-label="Next posts"
          >
            <ArrowRight className="text-blue-500" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {FEATURED_POSTS.map((_, index) => {
            // Calculate if this dot represents a visible post
            const isVisible = [
              index === startIndex,
              index === (startIndex + 1) % FEATURED_POSTS.length,
              index === (startIndex + 2) % FEATURED_POSTS.length
            ].some(Boolean);

            return (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > startIndex ? 1 : -1);
                  setStartIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isVisible ? 'bg-blue-600 w-4' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
    

      {/* About Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who We Are */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-8 text-blue-500">Who We Are</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Curabitur nec nunc ut sapien malesuada tincidunt. Sed a nulla at lorem auctor bibendum. Etiam venenatis leo nec sem blandit, a pharetra purus aliquam. Donec nec massa nunc. Quisque varius nisl ut est posuere, ut scelerisque turpis tincidunt. Phasellus quis dui ut libero convallis
            </p>
          </div>

      {/* What We Do */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#00E6CA]">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* News & Updates */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center group"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <Newspaper className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">News & Updates</h3>
            <p className="text-gray-600">
              Stay informed with the latest industry developments, market trends, and breaking news in real-time.
            </p>
          </motion.div>

          {/* Success Stories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center group"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-[#00E6CA]/10 group-hover:bg-[#00E6CA]/20 transition-colors duration-300">
                <Trophy className="h-8 w-8 text-[#00E6CA]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Success Stories</h3>
            <p className="text-gray-600">
              Discover inspiring journeys of companies and entrepreneurs who've achieved remarkable milestones.
            </p>
          </motion.div>

          {/* Funding Insights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center group"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <LineChart className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Funding Insights</h3>
            <p className="text-gray-600">
              Expert analysis of funding trends, investment opportunities, and financial strategies for growth.
            </p>
          </motion.div>

          {/* Case Studies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center group"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-[#00E6CA]/10 group-hover:bg-[#00E6CA]/20 transition-colors duration-300">
                <ClipboardList className="h-8 w-8 text-[#00E6CA]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Case Studies</h3>
            <p className="text-gray-600">
              In-depth analysis of successful strategies, methodologies, and best practices in the industry.
            </p>
          </motion.div>
        </div>
      </div>

          {/* Why We Do It */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-500">Why We Do It</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Curabitur nec nunc ut sapien malesuada tincidunt. Sed a nulla at lorem auctor bibendum. Etiam venenatis leo nec sem blandit, a pharetra purus aliquam. Donec nec massa nunc. Quisque varius nisl ut est posuere, ut scelerisque turpis tincidunt. Phasellus quis dui ut libero convallis
            </p>
          </div>
        </div>
      </div>

      {/* Large Subscribe Section */}
      <div className="bg-gradient-to-r from-blue-600 to-[#00E6CA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-white text-xl mb-8 text-center">
              Join our newsletter and never miss our latest content
            </p>
            <div className="flex gap-4 w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-lg focus:outline-none"
              />
              <button className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;