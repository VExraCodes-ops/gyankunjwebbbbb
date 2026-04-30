import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523050335192-ce11558cd97d?auto=format&fit=crop&q=80&w=1000"
                alt="School Culture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background pattern/blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-secondary/10 rounded-full -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-brand-secondary mb-4 text-sm">
              Our Legacy
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8 leading-tight text-balance">
              Building a Foundation for Global Excellence
            </h2>
            <div className="space-y-6 text-slate-600 font-sans leading-relaxed text-lg">
              <p>
                Gyankunj Academy, located in the heart of Ballia, is more than just a school. It is an intellectual ecosystem designed to inspire students to reach their full potential. Affiliated with CBSE, we follow a rigorous yet flexible curriculum that balances academic mastery with character development.
              </p>
              <p>
                Our philosophy "Lead Kindly Light" guides us in illuminating the paths of our students, helping them navigate the complexities of the modern world with confidence, compassion, and critical thinking.
              </p>
              <p>
                With a history of academic toppers and athletic champions, GKA continues to redefine educational standards in Uttar Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h5 className="font-serif text-3xl font-bold text-brand-primary mb-1">CBSE</h5>
                <p className="text-sm font-sans text-slate-500 uppercase tracking-widest">Affiliated Board</p>
              </div>
              <div>
                <h5 className="font-serif text-3xl font-bold text-brand-primary mb-1">20+</h5>
                <p className="text-sm font-sans text-slate-500 uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
