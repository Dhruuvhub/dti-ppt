import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { MapPinned, Package, Route } from 'lucide-react';
import InfoCard from './InfoCard';

export default function Slide6() {
  const steps = [
    { 
      icon: MapPinned, 
      text: '<strong>Discover</strong> nearby shops by location',
      info: 'The app uses your location to show all local shops within delivery range. No hidden warehouses—just real stores in your neighborhood.'
    },
    { 
      icon: Package, 
      text: '<strong>Compare</strong> distance and availability',
      info: 'See which shops have your items in stock, compare prices, and choose based on your preference—quality, distance, or familiarity.'
    },
    { 
      icon: Route, 
      text: '<strong>Route-aware</strong> delivery reduces cost',
      info: 'Smart algorithms optimize delivery routes, reducing time and cost while supporting multiple shop pickups in one trip.'
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2ECC71]/5 to-white">
      <div className="w-full max-w-4xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-24 text-center">How It Works</h2>
          
          {/* Steps */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <InfoCard
                    trigger={
                      <div className="flex items-start gap-8 p-10 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                        <motion.div 
                          className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div>
                          <div className="text-base font-bold text-[#2ECC71] mb-2">Step {index + 1}</div>
                          <p 
                            className="text-2xl md:text-3xl text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: step.text }}
                          />
                        </div>
                      </div>
                    }
                    title={`Step ${index + 1}`}
                    content={step.info}
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