import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export default function Slide1() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHNob3BzJTIwbmV0d29yayUyMGNvbm5lY3RlZCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzAxNzk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Connected local shops network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-20 leading-tight">SwiftMart</h1>
          <p className="text-4xl md:text-5xl text-white/90 mb-16 leading-relaxed">
            <span className="font-bold">Fast</span> delivery.{' '}
            <span className="font-bold">Fair</span> commerce.
          </p>
          <motion.p 
            className="text-3xl md:text-4xl text-[#2ECC71] mt-28 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Decentralizing quick commerce
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}