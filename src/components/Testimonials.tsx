import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mauris Cursus',
    role: 'Mauris Cursus',
    text: 'Duis aute irure dolor in reprehenderit. Aenean viverra nec orci in feugiat. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius. Morbi scelerisque euismod velit eu euismod. Vivamus aliquet ligula non posuere.',
    avatar: 'MC',
  },
  {
    name: 'Mauris Cursus',
    role: 'Mauris Cursus',
    text: 'Duis aute irure dolor in reprehenderit. Aenean viverra nec orci in feugiat. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius. Morbi scelerisque euismod velit eu euismod. Vivamus aliquet ligula non posuere.',
    avatar: 'MC',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="teams" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="border border-gray-200 rounded-2xl p-8 md:p-12 lg:p-16 bg-white/50 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-4xl md:text-5xl font-bold gradient-text">05</span>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-2">Testimonial</p>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-base md:text-lg"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.
              </motion.p>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end items-start">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-6 py-2.5 text-sm font-medium text-white rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-400" />
                <span className="relative flex items-center gap-2">
                  Learn More
                  <ArrowRight size={14} />
                </span>
              </motion.button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-6 md:p-8 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                  <Quote size={16} className="text-purple-400" />
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 pr-8">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
