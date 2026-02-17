import { motion } from 'motion/react';
import { useState } from 'react';
import { Smartphone, MapPin, ShoppingCart, TrendingUp, Package, Truck } from 'lucide-react';

export default function Slide6Flow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    { 
      icon: Smartphone, 
      title: 'User opens app',
      subtitle: 'Shares location',
      description: 'Customer opens SwiftMart and shares their location to discover nearby shops'
    },
    { 
      icon: MapPin, 
      title: 'Nearby shops',
      subtitle: 'Discovered',
      description: 'Platform identifies all local shops within delivery range based on location'
    },
    { 
      icon: ShoppingCart, 
      title: 'Select products',
      subtitle: 'From preferred shops',
      description: 'User browses products and selects items from their trusted local vendors'
    },
    { 
      icon: TrendingUp, 
      title: 'Smart routing',
      subtitle: 'Calculates path',
      description: 'Algorithm optimizes delivery route across multiple shops for efficiency'
    },
    { 
      icon: Package, 
      title: 'Order prepared',
      subtitle: 'By shops',
      description: 'Local shops receive orders and prepare items for pickup by delivery partner'
    },
    { 
      icon: Truck, 
      title: 'Delivered',
      subtitle: 'Efficiently',
      description: 'Partner picks up from shops along optimized route and delivers to customer'
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="w-full max-w-6xl mx-auto px-16 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-10 text-center">How SwiftMart Works</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-20 text-center">From browse to doorstep</p>
          
          {/* Horizontal Flowchart */}
          <div className="relative">
            {/* Flow Line */}
            <div className="absolute top-[60px] left-0 right-0 h-1 hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
                <motion.line
                  x1="0"
                  y1="0.5"
                  x2="100"
                  y2="0.5"
                  stroke="#2ECC71"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Step Card */}
                    <div
                      className="relative cursor-pointer group"
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      {/* Icon Circle */}
                      <motion.div
                        className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                          activeStep === index
                            ? 'bg-[#2ECC71] shadow-2xl scale-110'
                            : 'bg-white shadow-lg group-hover:bg-[#2ECC71] border-2 border-gray-200 group-hover:border-[#2ECC71]'
                        }`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon 
                          className={`w-10 h-10 transition-colors duration-500 ${
                            activeStep === index ? 'text-white' : 'text-gray-700 group-hover:text-white'
                          }`} 
                        />
                      </motion.div>

                      {/* Step Number */}
                      <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                        activeStep === index 
                          ? 'bg-black text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Text */}
                      <div className="text-center max-w-[140px]">
                        <p className="text-base font-bold text-gray-900 mb-1 leading-tight">{step.title}</p>
                        <p className="text-sm text-gray-600 leading-tight">{step.subtitle}</p>
                      </div>

                      {/* Tooltip */}
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full mt-6 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-2xl p-6 w-64 border border-gray-200"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45" />
                          <p className="text-base text-gray-700 leading-relaxed">{step.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-gray-500 italic">Click or hover over each step to learn more</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}