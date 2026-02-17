import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Zap, Network, Cpu } from 'lucide-react';
import InfoCard from './InfoCard';

export default function Slide7() {
  const innovations = [
    { 
      icon: Network, 
      text: '<strong>Decentralized</strong> alternative to dark stores',
      info: 'Instead of expensive warehouses, we leverage existing local shops as micro-fulfillment centers, creating a distributed network.'
    },
    { 
      icon: Zap, 
      text: '<strong>Smart routing</strong> instead of warehouses',
      info: 'Advanced algorithms calculate optimal delivery paths across multiple shops, ensuring speed without the overhead of centralized storage.'
    },
    { 
      icon: Cpu, 
      text: 'Tech <strong>adapts</strong> to local commerce',
      info: 'Our platform is built to enhance—not replace—existing neighborhood businesses, creating symbiosis between digital and physical retail.'
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1593346950530-9c1e644395a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc3MDE3OTgyMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Why It's Innovative</h2>
          <p className="text-2xl md:text-3xl text-[#2ECC71] mb-12">Reimagining commerce infrastructure</p>
          
          <div className="grid grid-cols-1 gap-6 mt-8 max-w-2xl mx-auto">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <InfoCard
                    trigger={
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-[#2ECC71] flex items-center justify-center mx-auto mb-4"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <p 
                          className="text-xl md:text-2xl text-white leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: innovation.text }}
                        />
                      </div>
                    }
                    content={innovation.info}
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