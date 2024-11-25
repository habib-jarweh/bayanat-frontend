import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Trophy,
  LineChart,
  ClipboardList,
  Users,
  Building2,
  Globe2,
} from "lucide-react";

const ROTATING_TAGS = [
  "Funding Roundup",
  "SaaS in Action",
  "Industry Pulse",
  "Behind the Curtain",
];

const FEATURED_POSTS = [
  {
    id: 1,
    title: "Featured Post 1",
    excerpt: "Description of the first featured post goes here...",
    image: "/placeholder1.jpg",
    category: "Technology",
  },
  {
    id: 2,
    title: "Featured Post 2",
    excerpt: "Description of the second featured post goes here...",
    image: "/placeholder2.jpg",
    category: "Innovation",
  },
  {
    id: 3,
    title: "Featured Post 3",
    excerpt: "Description of the third featured post goes here...",
    image: "/placeholder3.jpg",
    category: "Research",
  },
  {
    id: 4,
    title: "Featured Post 4",
    excerpt: "Description of the fourth featured post goes here...",
    image: "/placeholder4.jpg",
    category: "Analysis",
  },
  {
    id: 5,
    title: "Featured Post 5",
    excerpt: "Description of the fifth featured post goes here...",
    image: "/placeholder5.jpg",
    category: "Insights",
  },
];

const Home = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Taglines and Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-gray-900"></span>
                <span className="text-blue-500">
                  The Heartbeat of SaaS Information{" "}
                </span>
                <span className="text-[#00E6CA]">in MENA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore the People, Ideas, and Innovations Driving Growth in the
                Region
              </p>
            </div>

            {/* Newsletter Subscribe Section */}
            <div className="bg-gradient-to-r from-blue-600 to-[#00E6CA] p-6 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg focus:outline-none"
                />
                <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Rotating Tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.14 }}
            className="bg-white p-8 rounded-xl shadow-lg h-full flex items-center justify-center"
          >
            <motion.div
              key={currentTagIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-3xl font-bold text-center"
            >
              <span className="text-blue-500">#</span>
              <span className="text-[#00E6CA]">
                {ROTATING_TAGS[currentTagIndex]}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Content
        </h2>
        <div className="relative overflow-hidden">
          <div className="relative h-[400px]">
            {" "}
            {/* Adjust height as needed */}
            <button
              onClick={() => {
                setDirection(-1);
                setStartIndex(
                  (prev) =>
                    (prev - 1 + FEATURED_POSTS.length) % FEATURED_POSTS.length
                );
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
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                      {[0, 1, 2].map((offset) => {
                        const index =
                          (startIndex + offset) % FEATURED_POSTS.length;
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
                index === (startIndex + 2) % FEATURED_POSTS.length,
              ].some(Boolean);

              return (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > startIndex ? 1 : -1);
                    setStartIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isVisible ? "bg-blue-600 w-4" : "bg-gray-300 w-2"
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
            <h2 className="text-3xl font-bold mb-8 text-blue-500">
              Who We Are
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-16">
              We're a team of entrepreneurs from the MENA region united by our
              passion for tech, startups, and innovation. With deep roots in the
              local ecosystem, we're on a mission to bridge the knowledge gap in
              SaaS, sparking collaboration and opportunities.
            </p>

            {/* Mission Points */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="space-y-4">
                  <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-[#00E6CA] mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900">Empower</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Empower curiosity with trusted insights and engaging
                    stories.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="space-y-4">
                  <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-[#00E6CA] mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Illuminate
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Illuminate the SaaS landscape by showcasing founders,
                    investors, and users.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="space-y-4">
                  <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-[#00E6CA] mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900">Inspire</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Inspire innovation by highlighting what's driving MENA's
                    growth in tech.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mission Points - Vertical Layout */}
            <div className="max-w-3xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-8 text-left"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-[#00E6CA] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-500 to-[#00E6CA] bg-clip-text text-transparent">
                    Empower Curiosity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    With trusted insights and engaging stories that bring the
                    MENA SaaS ecosystem to life.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-8 text-left md:ml-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-[#00E6CA] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-500 to-[#00E6CA] bg-clip-text text-transparent">
                    Illuminate the Landscape
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    By showcasing the stories of founders, investors, and users
                    shaping the future.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-8 text-left md:ml-24"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-[#00E6CA] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-500 to-[#00E6CA] bg-clip-text text-transparent">
                    Inspire Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    By highlighting the drivers behind MENA's exponential growth
                    in tech.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* What We Do */}
          <div className="relative pt-20">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#00E6CA]">
              What We Do
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-center mb-12">
              We source insights straight from the market by connecting with
              founders, investors, and business leaders. Our platform delivers
              the stories and trends shaping the MENA region’s SaaS landscape,
              keeping you informed and inspired.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Funding Roundup */}
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Funding Roundup
                </h3>
                <p className="text-gray-600">
                  Stay up to date with a weekly recap of funding news from SaaS
                  startups across MENA. Discover who’s raising, what’s scaling,
                  and where the capital is flowing.
                </p>
              </motion.div>

              {/* SaaS in Action*/}
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  SaaS in Action
                </h3>
                <p className="text-gray-600">
                  Dive into real-world case studies. Explore how businesses in
                  the MENA region are leveraging SaaS to streamline operations,
                  drive growth, and solve unique challenges.
                </p>
              </motion.div>

              {/* Industry Pulse */}
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Industry Pulse
                </h3>
                <p className="text-gray-600">
                  Unpack market trends and industry shifts, showcasing how SaaS
                  is shaping the future of business in MENA.
                </p>
              </motion.div>

              {/* Behind the Curtain */}
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Behind the Curtain
                </h3>
                <p className="text-gray-600">
                  Learn from the trenches. Honest, raw, and insightful founder
                  stories sharing their journeys through wins, missteps, and
                  lessons learned while building impactful SaaS businesses.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Subscribe Section */}
      <div className="bg-gradient-to-r from-blue-600 to-[#00E6CA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Ahead of the Curve.
            </h2>
            <p className="text-white text-xl mb-8 text-center">
              Join our growing community of SaaS enthusiasts, and never miss a
              story, insight, or funding update from MENA’s booming tech
              industry.
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
