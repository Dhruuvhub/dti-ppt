import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Store, MapPin, ShoppingBag } from 'lucide-react';

export default function Slide5() {
  const ideas = [
    { icon: Store, text: 'Delivery platform powered by <strong>local shops</strong>' },
    { icon: ShoppingBag, text: 'Customers <strong>choose</strong> where products come from' },
    { icon: MapPin, text: 'Local stores become <strong>fulfillment hubs</strong>' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-24 text-center">The Idea</h2>
          
          {/* Ideas */}
          <div className="space-y-10 max-w-3xl mx-auto">
            {ideas.map((idea, index) => {
              const Icon = idea.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-8 p-10 rounded-2xl hover:bg-gray-50 transition-all duration-500 group"
                >
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-[#2ECC71] flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <p 
                    className="text-2xl md:text-3xl text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: idea.text }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}