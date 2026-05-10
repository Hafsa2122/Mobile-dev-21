import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMouseParallax } from '@/hooks/useMouseParallax';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMouseParallax(0.008);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* LEFT SIDE: Images with background text */}
          <div className="relative h-[500px] lg:h-[560px] flex items-end justify-center lg:justify-start order-2 lg:order-1">
            
            {/* Background outline text: MOBILE DEV STUDIOS */}
            <motion.div
              style={{ y: bgY }}
              className="absolute -left-4 lg:-left-2 top-0 z-0 pointer-events-none select-none"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="leading-[0.95]"
              >
                <p className="text-[100px] sm:text-[120px] lg:text-[140px] font-extralight tracking-wide"
                   style={{ 
                     WebkitTextStroke: '1.5px #C7C9E8',
                     WebkitTextFillColor: 'transparent',
                     color: 'transparent'
                   }}
                >MOBILE</p>
                <p className="text-[100px] sm:text-[120px] lg:text-[140px] font-extralight tracking-wide -mt-4"
                   style={{ 
                     WebkitTextStroke: '1.5px #C7C9E8',
                     WebkitTextFillColor: 'transparent',
                     color: 'transparent'
                   }}
                >DEV</p>
                <p className="text-[100px] sm:text-[120px] lg:text-[140px] font-extralight tracking-wide -mt-4"
                   style={{ 
                     WebkitTextStroke: '1.5px #C7C9E8',
                     WebkitTextFillColor: 'transparent',
                     color: 'transparent'
                   }}
                >STUDIOS</p>
              </motion.div>
            </motion.div>

            {/* Man at desk image (left, smaller, lower) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: mouse.x * -0.6 }}
              className="absolute left-0 bottom-0 w-[170px] h-[280px] lg:w-[200px] lg:h-[330px] rounded-t-full overflow-hidden shadow-lg z-10"
            >
              <img
                src="/images/hero-person.jpg"
                alt="Man working at desk"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Purple/pink soft glow behind team arch */}
            <motion.div 
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[90px] lg:left-[120px] top-[30px] w-[280px] h-[400px] lg:w-[310px] lg:h-[460px] rounded-t-full bg-gradient-to-b from-purple-300/35 via-pink-200/25 to-transparent blur-2xl z-[15]" 
            />

            {/* Team image (right, larger, with white border) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: mouse.x * 1, y: mouse.y * 0.8 }}
              className="absolute left-[90px] lg:left-[120px] top-[16px] lg:top-[8px] w-[260px] h-[390px] lg:w-[295px] lg:h-[450px] rounded-t-[140px] overflow-hidden shadow-2xl z-20 border-[6px] border-white"
            >
              <img
                src="/images/hero-team.jpg"
                alt="Two women and one man collaborating around laptop"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content */}
          <motion.div 
            style={{ opacity: contentOpacity }}
            className="text-left lg:pl-8 xl:pl-16 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                We Are A Creative
                <br />
                Digital Agency
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-600 text-base lg:text-lg max-w-md mb-8 leading-relaxed"
            >
              Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.35)' 
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#E84393] via-[#9B59B6] to-[#2C3E8C] shadow-lg"
              >
                Book An Appointment
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
