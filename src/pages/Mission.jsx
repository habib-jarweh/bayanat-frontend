import { motion } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <div className="py-20">
      {/* Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to [your mission statement]. We believe [your core belief]
            and we're working to make that a reality.
          </p>
        </motion.div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <Target className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">The Problem</h3>
            <p className="text-gray-600">
              Describe the problem you're solving. Make it relatable and clear why it matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <Lightbulb className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
            <p className="text-gray-600">
              Explain your approach to solving the problem. Focus on the value proposition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <Users className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <p className="text-gray-600">
              Describe the positive change your solution will bring to users and society.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: member * 0.2 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                <p className="text-gray-600">Role / Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;