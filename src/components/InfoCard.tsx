import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface InfoCardProps {
  trigger: React.ReactNode;
  content: string | React.ReactNode;
  title?: string;
}

export default function InfoCard({ trigger, content, title }: InfoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-3xl shadow-2xl max-w-2xl w-[90vw] max-h-[80vh] overflow-y-auto"
            >
              <div className="p-12 md:p-16">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {title && (
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">{title}</h3>
                )}
                
                <div className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {content}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
