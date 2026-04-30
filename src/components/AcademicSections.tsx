import { motion } from 'motion/react';
import { Pencil, GraduationCap, School } from 'lucide-react';

const wings = [
  {
    icon: <Pencil size={32} />,
    title: 'Primary Wing',
    range: 'Classes I - V',
    desc: 'Foundational years focused on play-way methods, language skills, and social development.'
  },
  {
    icon: <School size={32} />,
    title: 'Secondary Wing',
    range: 'Classes VI - X',
    desc: 'Developing analytical thinking, scientific temper, and robust academic discipline.'
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Senior Secondary',
    range: 'Classes XI - XII',
    desc: 'Specialized streams (Science & Commerce) prepare students for competitive exams and higher studies.'
  }
];

export default function AcademicSections() {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-brand-secondary mb-4 text-sm">Our Academic Wings</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Comprehensive Learning Pathways</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {wings.map((wing, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-8 shadow-lg">
                <img
                  src={`https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800&sig=${idx}`}
                  alt={wing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-colors"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-brand-primary">
                  {wing.icon}
                </div>
              </div>
              <p className="text-xs font-sans font-bold text-brand-secondary uppercase tracking-[0.2em] mb-2">{wing.range}</p>
              <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{wing.title}</h3>
              <p className="text-slate-600 leading-relaxed font-sans">{wing.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
