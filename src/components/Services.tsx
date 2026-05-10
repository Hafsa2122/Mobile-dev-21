import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Globe, Code, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: false,
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: false,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: false,
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: true,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 relative">
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
                <span className="text-4xl md:text-5xl font-bold gradient-text">04</span>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-2">Our Services</p>
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

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    service.highlighted
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10'
                  }`}
                >
                  {/* Ambient glow */}
                  {service.highlighted && (
                    <>
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                        service.highlighted
                          ? 'bg-white/20'
                          : 'bg-purple-50 group-hover:bg-purple-100 transition-colors'
                      }`}
                    >
                      <Icon
                        size={20}
                        className={service.highlighted ? 'text-white' : 'text-purple-600'}
                      />
                    </div>

                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        service.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-4 ${
                        service.highlighted ? 'text-purple-100' : 'text-gray-500'
                      }`}
                    >
                      {service.description}
                    </p>

                    <motion.span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        service.highlighted ? 'text-white/80' : 'text-purple-600'
                      }`}
                    >
                      Know More
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
