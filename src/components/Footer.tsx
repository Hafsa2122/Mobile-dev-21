import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const footerLinks = {
  company: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Teams', href: '#teams' },
  ],
  resources: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Featured', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  return (
    <footer id="contact" ref={footerRef} className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <img src="/images/mobile-dev-logo.svg" alt="Mobile Dev Studios" className="h-10 w-auto" />
              <span className="font-bold text-lg tracking-tight">MOBILE DEV STUDIOS</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm leading-relaxed max-w-xs mb-4"
            >
              Nam nec augue tincidunt nisi molestie fermentum senectus viverra nisi feugiat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-1 text-sm text-gray-400"
            >
              <p>Lastname@domain.com</p>
              <p>1234-567-890</p>
            </motion.div>
          </div>

          {/* Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-semibold mb-4 text-white"
            >
              Home
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm font-semibold mb-4 text-white"
            >
              Resources
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm font-semibold mb-4 text-white"
            >
              Legal
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-xs text-gray-500">
            Copyright @Name Year All Right Reserved
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
