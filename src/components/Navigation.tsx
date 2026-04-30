import { motion } from 'motion/react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 px-6 flex justify-between items-center text-sm hidden md:flex">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} /> +91-9415843468
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} /> info@gyankunjacademy.edu.in
          </span>
        </div>
        <div className="font-serif italic">Affiliated to CBSE, New Delhi</div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/90 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center bg-brand-accent">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
            GKA
          </div>
          <div>
            <h1 className="font-serif font-bold text-xl leading-tight text-brand-primary">GYANKUNJ ACADEMY</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">Lead Kindly Light</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-slate-700 hover:text-brand-primary transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="lg:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-serif text-2xl font-medium text-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
