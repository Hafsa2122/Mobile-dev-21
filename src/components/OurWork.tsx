import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Animated Graphics',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    image: '/images/project-graphics.jpg',
    layout: 'right',
  },
  {
    title: 'Analytic App',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    image: '/images/project-analytics.jpg',
    layout: 'left',
  },
  {
    title: 'Photo Collection App',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    image: '/images/project-photo.jpg',
    layout: 'right',
  },
];

export default function OurWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-28 relative">
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
                <span className="text-4xl md:text-5xl font-bold gradient-text">03</span>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-2">Our Work</p>
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

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                className={`grid md:grid-cols-2 gap-6 items-center ${
                  project.layout === 'left' ? 'md:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`relative overflow-hidden rounded-2xl group ${
                    project.layout === 'left' ? 'md:order-2' : ''
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>

                {/* Content */}
                <div className={project.layout === 'left' ? 'md:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: project.layout === 'left' ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 cursor-pointer"
                    >
                      Know More
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
