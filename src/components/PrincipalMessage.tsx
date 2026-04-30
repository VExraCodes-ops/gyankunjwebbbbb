import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function PrincipalMessage() {
  return (
    <section className="py-24 bg-brand-accent">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[48px] shadow-xl overflow-hidden grid lg:grid-cols-5 items-stretch border border-slate-100">
          <div className="lg:col-span-2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
              alt="Principal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent flex items-end p-10">
              <div className="text-white">
                <h3 className="font-serif text-3xl font-bold">K. C. Pandey</h3>
                <p className="font-sans text-sm uppercase tracking-widest opacity-80 mt-1">Principal, Gyankunj Academy</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center">
            <Quote className="text-brand-secondary/20 mb-8" size={64} fill="currentColor" />
            <h2 className="font-serif text-4xl font-bold text-brand-primary mb-8 underline decoration-brand-secondary/30 underline-offset-8">
              Message from the Principal
            </h2>
            <div className="space-y-6 text-slate-600 font-sans leading-relaxed text-lg italic">
              <p>
                "At Gyankunj Academy, we believe that education is the most powerful weapon which you can use to change the world. Our mission is to provide a nurturing environment where every child feels valued and inspired."
              </p>
              <p>
                "We focus not just on academic brilliance, but on fostering creativity, resilience, and compassion. Our teachers are mentors who guide students towards self-discovery and global citizenship."
              </p>
              <p>
                "Join us in this journey of excellence as we shape the future of our nation, one student at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
