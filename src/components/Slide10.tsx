import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { DollarSign, Truck, Megaphone, Star } from 'lucide-react';

export default function Slide10() {
  const revenues = [
    { icon: DollarSign, text: '<strong>Commission</strong> on orders' },
    { icon: Truck, text: '<strong>Delivery</strong> and service fees' },
    { icon: Megaphone, text: 'Seller <strong>advertising</strong>' },
    { icon: Star, text: 'Premium buyer <strong>subscriptions</strong>' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="w-full max-w-5xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-7xl md:text-8xl font-bold text-white mb-24 text-center">Revenue Model</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28 max-w-3xl mx-auto">
            {revenues.map((revenue, index) => {
              const Icon = revenue.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-[#2ECC71] flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <p 
                      className="text-2xl md:text-2xl text-white leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: revenue.text }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-24 pt-24 border-t border-white/20"
          >
            <p className="text-4xl md:text-5xl text-[#2ECC71] font-bold mb-12 leading-tight">
              <span className="font-bold">Fast</span> delivery can be{' '}
              <span className="font-bold">fair</span> delivery.
            </p>
            <div className="flex items-center justify-center gap-8 mt-16">
              <motion.div 
                className="h-1 w-24 bg-[#2ECC71]"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
              <p className="text-4xl text-white font-bold">SwiftMart</p>
              <motion.div 
                className="h-1 w-24 bg-[#2ECC71]"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}