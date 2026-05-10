import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Clock, Sparkles, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'Easy To Use',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: false,
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: false,
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: true,
  },
  {
    icon: Clock,
    title: 'Service 24/7',
    description: 'Duis aute irure dolor in reprehenderit. Sed a metus sed enim sodales varius.',
    highlighted: false,
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="border border-gray-200 rounded-2xl p-8 md:p-12 lg:p-16 bg-white/50 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Left label */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-4xl md:text-5xl font-bold gradient-text">02</span>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-2">Why Us</p>
              </motion.div>
            </div>

            <div className="lg:col-span-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.
              </motion.p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    reason.highlighted
                      ? 'bg-gradient-to-br from-purple-600 to-purple-700 border-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10'
                  }`}
                >
                  {/* Ambient glow for highlighted */}
                  {reason.highlighted && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl" />
                  )}

                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                        reason.highlighted
                          ? 'bg-white/20'
                          : 'bg-purple-50 group-hover:bg-purple-100 transition-colors'
                      }`}
                    >
                      <Icon
                        size={20}
                        className={reason.highlighted ? 'text-white' : 'text-purple-600'}
                      />
                    </div>

                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        reason.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {reason.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-4 ${
                        reason.highlighted ? 'text-purple-100' : 'text-gray-500'
                      }`}
                    >
                      {reason.description}
                    </p>

                    <motion.span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        reason.highlighted ? 'text-white/80' : 'text-purple-600'
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
