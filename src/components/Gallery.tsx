import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1577891729319-f4871c6ecdf1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="font-sans font-bold tracking-[0.2em] uppercase text-brand-secondary mb-4 text-sm">
              Life at GKA
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary leading-[1.2]">
              Capturing Moments of Learning, Joy, and Discovery
            </h2>
          </div>
          <button className="bg-brand-primary text-white px-10 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-brand-primary/90 transition-colors shadow-lg">
            View All Photos
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-[32px] cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-serif italic text-2xl">Excellence</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
