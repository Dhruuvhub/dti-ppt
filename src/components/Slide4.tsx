import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Target, Users, TrendingUp } from 'lucide-react';

export default function Slide4() {
  const visions = [
    { icon: Target, text: '<strong>Inclusive</strong> quick commerce', description: 'Everyone participates, everyone benefits' },
    { icon: Users, text: 'Empower <strong>local vendors</strong>', description: 'Digital presence without losing identity' },
    { icon: TrendingUp, text: '<strong>Fair</strong> ecosystem for all', description: 'Platform built on equity, not extraction' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770087548346-a4df58a695df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwc2NhbGUlMjBlY29zeXN0ZW0lMjBmYWlyfGVufDF8fHx8MTc3MDE3OTgyMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Balance graphic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-7xl md:text-8xl font-bold text-white mb-20 text-center">Our Vision</h2>
          <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
            {visions.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-8 bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:translate-y-[-4px] group"
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <p 
                      className="text-3xl md:text-4xl text-white mb-2 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: vision.text }}
                    />
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
                      {vision.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}