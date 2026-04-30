import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-accent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-brand-secondary mb-4 text-sm">
              Connect With Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-12">
              Get in Touch for <span className="italic">Admissions</span> & Inquiries
            </h2>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-secondary flex-shrink-0 border border-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-serif text-xl font-bold text-brand-primary mb-1">Our Location</h5>
                  <p className="text-slate-600 font-sans leading-relaxed">
                    Atraulia, Bansdih Road, Ballia,<br />Uttar Pradesh - 277001
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-secondary flex-shrink-0 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-serif text-xl font-bold text-brand-primary mb-1">Call Us</h5>
                  <p className="text-slate-600 font-sans leading-relaxed">
                    +91 94158 43468<br />+91 94153 10203
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-secondary flex-shrink-0 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-serif text-xl font-bold text-brand-primary mb-1">Email</h5>
                  <p className="text-slate-600 font-sans leading-relaxed">
                    info@gyankunjacademy.edu.in<br />gyankunjacademy@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-secondary flex-shrink-0 border border-slate-100">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-serif text-xl font-bold text-brand-primary mb-1">Working Hours</h5>
                  <p className="text-slate-600 font-sans leading-relaxed">
                    Mon - Sat: 8:00 AM - 2:00 PM<br />Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[48px] shadow-xl border border-slate-100"
          >
            <h3 className="font-serif text-3xl font-bold text-brand-primary mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-500">Student Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-500">How can we help?</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all"></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-sans font-bold text-sm tracking-widest uppercase hover:bg-brand-primary/90 transition-colors shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
