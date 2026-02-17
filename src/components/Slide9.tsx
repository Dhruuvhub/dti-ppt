import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Building2, Home, Expand } from 'lucide-react';

export default function Slide9() {
  const scalability = [
    { icon: Building2, text: '<strong>City-wise</strong> expansion', subtitle: 'Grow organically, one city at a time' },
    { icon: Home, text: 'No <strong>warehouse</strong> dependency', subtitle: 'Zero infrastructure overhead' },
    { icon: Expand, text: 'Supports <strong>small shops</strong> and <strong>big marts</strong>', subtitle: 'Platform scales with diversity' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764212514531-9caa6661f4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmV0d29yayUyMGV4cGFuc2lvbiUyMHVyYmFufGVufDF8fHx8MTc3MDE3OTgyMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="City expansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-7xl md:text-8xl font-bold text-white mb-8 text-center">Scalability</h2>
          <p className="text-3xl md:text-4xl text-[#2ECC71] mb-24 text-center">Built to grow organically</p>
          
          <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
            {scalability.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-8 bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:translate-y-[-4px]"
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <p 
                      className="text-3xl md:text-4xl text-white mb-2 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed">{item.subtitle}</p>
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