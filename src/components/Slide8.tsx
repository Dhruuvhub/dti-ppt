import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { TrendingUp, Users, ShoppingCart } from 'lucide-react';
import CountUp from './CountUp';
import InfoCard from './InfoCard';

export default function Slide8() {
  const impacts = [
    { 
      icon: TrendingUp, 
      title: '<strong>Vendors</strong>', 
      text: 'Higher income for local vendors',
      stat: '+35%',
      info: 'Local vendors see an average 35% increase in revenue by gaining access to digital customers while maintaining full control over pricing and inventory.'
    },
    { 
      icon: Users, 
      title: '<strong>Partners</strong>', 
      text: 'More flexibility for delivery partners',
      stat: '+50%',
      info: 'Delivery partners earn 50% more with route optimization, allowing them to complete more deliveries per hour with less travel distance.'
    },
    { 
      icon: ShoppingCart, 
      title: '<strong>Buyers</strong>', 
      text: 'More choice and trust for buyers',
      stat: '10x',
      info: 'Buyers get 10x more shop options compared to traditional platforms, enabling them to support their trusted local vendors.'
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Impact at Scale</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-16 text-center">Creating value for everyone</p>
          
          {/* Impacts */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <InfoCard
                    trigger={
                      <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#2ECC71] transition-all duration-500 hover:shadow-2xl cursor-pointer">
                        <div className="flex items-start gap-6">
                          <motion.div 
                            className="w-14 h-14 rounded-2xl bg-[#2ECC71] flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.4 }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 
                              className="text-2xl md:text-3xl font-bold mb-2"
                              dangerouslySetInnerHTML={{ __html: impact.title }}
                            />
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-3">{impact.text}</p>
                            <div className="text-3xl md:text-4xl font-bold text-[#2ECC71]">
                              {impact.stat}
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    title={impact.title.replace(/<[^>]*>/g, '')}
                    content={impact.info}
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