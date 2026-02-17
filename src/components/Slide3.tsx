import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export default function Slide3() {
  const moments = [
    'Wanted to buy tomatoes from a <strong>specific shop</strong>',
    'No platform allowed <strong>store-level choice</strong>',
    'Local vendors were <strong>digitally invisible</strong>'
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full max-w-5xl mx-auto px-16 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Icon and Title */}
          <div className="flex items-center justify-center gap-6 mb-24">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Lightbulb className="w-20 h-20 text-[#2ECC71]" />
            </motion.div>
            <h2 className="text-7xl md:text-8xl font-bold leading-tight">
              The Moment of Realization
            </h2>
          </div>

          {/* Moments */}
          <div className="space-y-12 max-w-3xl mx-auto">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8 border-l-4 border-[#2ECC71] hover:border-black transition-all duration-500 hover:pl-10"
              >
                <p 
                  className="text-3xl md:text-4xl text-gray-700 leading-relaxed text-left"
                  dangerouslySetInnerHTML={{ __html: moment }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}