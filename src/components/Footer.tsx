import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Brand Background */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] select-none pointer-events-none transform rotate-12">
        <h2 className="text-[300px] font-serif font-black leading-none">GKA</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary font-serif font-bold text-xl">
                GKA
              </div>
              <div>
                <h1 className="font-serif font-bold text-xl leading-tight">GYANKUNJ ACADEMY</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Lead Kindly Light</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed font-sans">
              Dedicated to providing world-class education with a focus on character building and academic excellence. Empowering students to lead and innovate.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Useful Links</h4>
            <ul className="space-y-4 font-sans text-white/60">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Admission Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">School Rules</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Fee Structure</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Scholarships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Academics</h4>
            <ul className="space-y-4 font-sans text-white/60">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Primary Wing</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Secondary Wing</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Senior Secondary</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">E-Learning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Newsletter</h4>
            <p className="text-white/60 font-sans mb-6 leading-relaxed">
              Subscribe to stay updated with the latest news, events and scholarship opportunities.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 font-sans text-sm focus:outline-none focus:bg-white/10 transition-colors"
              />
              <button className="absolute right-2 top-2 bg-white text-brand-primary h-10 px-6 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-brand-secondary hover:text-white transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-sans tracking-wide">
            © 2026 Gyankunj Academy. All Rights Reserved. | Affiliated to CBSE
          </p>
          <div className="flex gap-8 text-white/40 text-xs font-sans tracking-wide">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
          >
            <ArrowUp size={20} className="text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  );
}
