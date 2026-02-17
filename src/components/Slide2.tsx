import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';
import InfoCard from './InfoCard';

export default function Slide2() {
  const problems = [
    { 
      text: 'Quick commerce is centralized',
      info: 'Large platforms use dark stores and warehouses, excluding local shops from the digital economy.'
    },
    { 
      text: 'Local shops lack online reach',
      info: 'Small vendors struggle to compete without access to delivery infrastructure and tech platforms.'
    },
    { 
      text: 'Buyers can\'t choose specific stores',
      info: 'Current platforms don\'t let customers select which local shop to buy from, removing trust and preference.'
    },
    { 
      text: 'Delivery partners have limited opportunities',
      info: 'Gig workers are locked into inflexible platforms with little autonomy or earning potential.'
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl mx-auto px-16 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl md:text-8xl font-bold leading-tight">The Problem</h2>
        </motion.div>

        {/* Problems List */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <InfoCard
                trigger={
                  <div className="flex items-start gap-6 group hover:translate-x-2 transition-all duration-500 p-6 -ml-6 rounded-xl hover:bg-gray-50">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                    </motion.div>
                    <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">{problem.text}</p>
                  </div>
                }
                title={problem.text}
                content={problem.info}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}