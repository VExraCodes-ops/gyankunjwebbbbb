import { motion } from 'motion/react';

const stats = [
  { value: '2500+', label: 'Students' },
  { value: '120+', label: 'Faculty Members' },
  { value: '15+', label: 'Sports Facilities' },
  { value: '100%', label: 'Board Results' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-serif font-bold mb-2">{stat.value}</h3>
              <p className="text-sm font-sans uppercase tracking-[0.2em] text-white/50 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
