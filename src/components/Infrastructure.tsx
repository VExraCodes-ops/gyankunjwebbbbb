import { motion } from 'motion/react';
import { Microscope, BookOpen, Laptop, Trophy, Bus } from 'lucide-react';

const facilities = [
  {
    icon: <Microscope size={32} />,
    title: 'Science Labs',
    desc: 'Fully equipped physics, chemistry, and biology labs for hands-on learning.'
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Modern Library',
    desc: 'A vast collection of books, journals, and digital resources for every age.'
  },
  {
    icon: <Laptop size={32} />,
    title: 'Smart Classrooms',
    desc: 'Interactive digital boards and high-speed internet integration in every class.'
  },
  {
    icon: <Trophy size={32} />,
    title: 'Sports Complex',
    desc: 'Professional facilities for cricket, football, basketball, and indoor games.'
  },
  {
    icon: <Bus size={32} />,
    title: 'Safe Transport',
    desc: 'Dedicated fleet of buses covering all major routes with GPS tracking.'
  }
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 bg-brand-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-brand-secondary mb-4 text-sm">
            Our Infrastructure
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            State-of-the-art Facilities for Holistic Development
          </h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                {fac.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{fac.title}</h3>
              <p className="text-slate-300 font-sans leading-relaxed">
                {fac.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
