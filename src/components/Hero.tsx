import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="font-sans font-semibold tracking-[0.3em] uppercase text-brand-secondary mb-4 text-sm"
          >
            Welcome to Gyankunj Academy
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 text-balance">
            Educating the Leaders of <span className="italic font-light">Tomorrow</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-brand-accent/80 mb-10 max-w-xl leading-relaxed">
            Nurturing excellence through innovative education, ethical values, and a passion for lifelong learning in a state-of-the-art campus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-secondary text-white px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-widest uppercase flex items-center gap-3 transition-colors hover:bg-brand-secondary/90 shadow-xl"
            >
              Explore Campus <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-widest uppercase transition-colors hover:bg-white hover:text-brand-primary"
            >
              Admission 2026-27
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-6 z-10 hidden md:block">
        <div className="flex items-center gap-4 text-white/50 text-xs font-sans tracking-widest uppercase">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <span>Lead Kindly Light</span>
        </div>
      </div>
    </section>
  );
}
