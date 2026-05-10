import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/* ── helpers ─────────────────────────────────────────────── */

function CountUp({ value }: { value: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const vis = useInView(ref, { once: true, margin: '-60px' });
  useEffect(() => {
    if (!vis) return;
    const t0 = performance.now();
    let id = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [vis, value]);
  return <span ref={ref}>{n}</span>;
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={vis ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  );
}

/* ── logo ────────────────────────────────────────────────── */

function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9133FF" />
          <stop offset="0.5" stopColor="#4B34F1" />
          <stop offset="1" stopColor="#0066FF" />
        </linearGradient>
      </defs>
      <g stroke="url(#lg)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(100,100)">
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <g key={deg} transform={`rotate(${deg})`}>
              <path d="M-20,-75 L30,-75 L60,-40 L40,-10" />
            </g>
          ))}
        </g>
      </g>
      <g fill="#fff" stroke="url(#lg)" strokeWidth="6">
        <g transform="translate(100,100)">
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <g key={deg} transform={`rotate(${deg})`}>
              <circle cx="40" cy="-10" r="8" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

/* ── navbar ──────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-sm' : 'bg-white'}`}
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between h-16 px-6">
        <Logo size={40} />
        <div className="hidden md:flex items-center gap-9 text-[13px] font-semibold">
          <a href="#home" className="text-[#C423F2]">Home</a>
          <a href="#about" className="text-gray-800 hover:text-[#C423F2] transition-colors">About</a>
          <a href="#services" className="text-gray-800 hover:text-[#C423F2] transition-colors">Services</a>
          <a href="#teams" className="text-gray-800 hover:text-[#C423F2] transition-colors">Teams</a>
          <a href="#contact" className="text-gray-800 hover:text-[#C423F2] transition-colors">Contact Us</a>
        </div>
        <motion.button whileHover={{ scale: 1.04 }} className="hidden md:block rounded-md bg-gradient-to-r from-[#F01863] via-[#9F17D4] to-[#1235DC] p-[1.5px]">
          <span className="block rounded-[5px] bg-white px-6 py-2 text-[12px] font-semibold text-gray-900">Register</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}

/* ── hero ────────────────────────────────────────────────── */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section id="home" ref={ref} className="relative pt-16 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center min-h-[520px]">
        {/* left images */}
        <motion.div className="relative h-[420px] md:h-[480px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.div
            className="absolute left-0 top-[70px] z-0 select-none text-[80px] md:text-[105px] font-extralight leading-[0.85] tracking-widest"
            style={{ WebkitTextStroke: '1.5px rgba(195,190,230,0.55)', WebkitTextFillColor: 'transparent', y: bgY }}
          >
            <div>MOBILE</div><div>DEV</div><div>STUDIOS</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 bottom-0 w-[155px] h-[250px] md:w-[180px] md:h-[290px] rounded-t-full overflow-hidden z-10"
          >
            <img src="/images/hero-person.jpg" alt="" className="w-full h-full object-cover object-top" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[120px] md:left-[140px] top-[20px] w-[220px] h-[340px] md:w-[260px] md:h-[400px] rounded-t-[130px] overflow-hidden shadow-2xl z-20 border-[5px] border-white"
          >
            <img src="/images/hero-team.jpg" alt="" className="w-full h-full object-cover object-top" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute left-[130px] top-[60px] w-[240px] h-[380px] rounded-t-full bg-gradient-to-b from-purple-400/30 via-violet-200/20 to-transparent blur-2xl z-[5]" />
        </motion.div>

        {/* right content */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="py-10 md:pl-6">
          <h1 className="text-[34px] md:text-[42px] font-extrabold leading-[1.15] tracking-tight text-gray-900">We Are A Creative<br />Digital Agency</h1>
          <p className="mt-5 text-[14px] leading-[1.7] text-gray-600 max-w-[400px]">Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
          <motion.button 
          whileHover={{ scale: 1.04, boxShadow: '0 18px 40px rgba(124,58,237,0.25)' }} 
          className="mt-8 h-[48px] px-7 bg-gradient-to-r from-[#F00655] via-[#A107C7] to-[#0628D4] text-[13px] font-bold text-white rounded-sm"
          onClick={() => window.location.hash = '#contact'}
        >
          Book An Appointment
        </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ── section wrapper ─────────────────────────────────────── */

function SectionWrap({ id, num, label, children, className = '', clickable }: { id: string; num: string; label: string; children: ReactNode; className?: string; clickable?: boolean }) {
  return (
    <section id={id} className={`max-w-[1120px] mx-auto px-6 ${className}`}>
      <Reveal>
        <div className="border border-[#6D28D9] rounded-sm overflow-hidden bg-white">
          <div className="grid md:grid-cols-[100px_1fr]">
            <motion.div 
              whileHover={clickable ? { backgroundColor: 'rgba(109, 40, 217, 0.04)' } : {}}
              className={`border-b border-[#6D28D9] px-5 py-6 text-center md:border-b-0 md:border-r flex flex-col justify-center items-center ${clickable ? 'cursor-pointer' : ''}`}
              onClick={clickable ? () => window.location.hash = '#contact' : undefined}
            >
              <div className="bg-gradient-to-r from-[#E6005C] via-[#A500E8] to-[#0528D8] bg-clip-text text-[28px] font-black text-transparent leading-none">{num}</div>
              <div className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-gray-500">{label}</div>
            </motion.div>
            <div className="flex flex-col">{children}</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── about ───────────────────────────────────────────────── */

function About() {
  return (
    <SectionWrap id="about" num="01" label="About Us" className="mt-14" clickable>
      <div className="p-7 md:p-9 relative cursor-pointer group" onClick={() => window.location.hash = '#contact'}>
        <motion.div whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.01)' }} className="absolute inset-0 transition-colors" />
        <p className="relative z-10 text-[13px] leading-[1.75] text-gray-700 max-w-[600px]">Duis aute irure dolor in reprehenewiderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.</p>
        <div className="relative z-10 flex justify-end mt-4"><GradBtn>Learn More</GradBtn></div>
      </div>
      <div className="grid grid-cols-3 border-t border-[#6D28D9]">
        {[[500, 'Projects'], [50, 'Employees'], [300, 'Happy Clients']].map(([count, label], index) => (
          <Reveal key={String(label)} delay={index * 0.12} className={`p-0 ${index < 2 ? 'border-r border-[#6D28D9]' : ''}`}>
             <motion.div 
              whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.02)' }}
              className="p-7 cursor-pointer"
              onClick={() => window.location.hash = '#contact'}
             >
              <div className="text-[26px] md:text-[30px] font-black text-gray-900"><CountUp value={Number(count)} />+</div>
              <div className="text-[11px] text-gray-500 mt-0.5">{String(label)}</div>
             </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}

/* ── why us ──────────────────────────────────────────────── */

function WhyUs() {
  const items = [
    ['Easy To Use', false], ['Transparent Pricing', false],
    ['Safety', true], ['Service 24/7', false],
  ] as const;
  return (
    <SectionWrap id="why" num="02" label="Why Us" className="mt-6" clickable>
      <div className="p-7 md:p-9 relative cursor-pointer group" onClick={() => window.location.hash = '#contact'}>
        <motion.div whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.01)' }} className="absolute inset-0 transition-colors" />
        <p className="relative z-10 text-[13px] leading-[1.75] text-gray-700 max-w-[600px]">Duis aute irure dolor in reprehenewiderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.</p>
        <div className="relative z-10 flex justify-end mt-4"><GradBtn>Learn More</GradBtn></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#6D28D9]">
        {items.map(([title, hl], i) => (
          <Reveal key={title} delay={i * 0.1}>
            <motion.div
              whileHover={{ backgroundColor: hl ? '' : 'rgba(109, 40, 217, 0.02)' }}
              className={`group relative p-7 min-h-[145px] cursor-pointer ${i % 2 === 0 ? 'sm:border-r border-[#6D28D9]' : ''} ${i < 2 ? 'border-b border-[#6D28D9]' : ''} ${hl ? 'bg-gradient-to-br from-[#F00655] via-[#A107E3] to-[#0730D9] text-white' : ''}`}
              onClick={() => window.location.hash = '#contact'}
            >
              <h3 className="text-[15px] font-bold">{title}</h3>
              <p className={`mt-3 text-[10px] leading-[1.8] ${hl ? 'text-white/85' : 'text-gray-600'}`}>Duis aute irure dolor in reprehenewiderit.<br />Sed a metus sed enim sodales varius.</p>
              <span className={`absolute bottom-4 right-5 text-[9px] font-semibold transition-transform group-hover:translate-x-1 ${hl ? 'text-white/80' : 'text-[#A107C7]'}`}>Know More</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}

/* ── our work ────────────────────────────────────────────── */

function OurWork() {
  const works = [
    { title: 'Animated Graphics', img: '/images/project-graphics.jpg', flip: false },
    { title: 'Analytic App', img: '/images/project-mobile.jpg', flip: true },
    { title: 'Photo Collection App', img: '/images/project-photo.jpg', flip: false },
  ];
  return (
    <SectionWrap id="work" num="03" label="Our Work" className="mt-6" clickable>
      <div className="p-7 md:p-9 relative cursor-pointer group" onClick={() => window.location.hash = '#contact'}>
        <motion.div whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.01)' }} className="absolute inset-0 transition-colors" />
        <p className="relative z-10 text-[13px] leading-[1.75] text-gray-700 max-w-[600px]">Duis aute irure dolor in reprehenewiderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.</p>
        <div className="relative z-10 flex justify-end mt-4"><GradBtn>Learn More</GradBtn></div>
      </div>
      {works.map((w, i) => (
        <Reveal key={w.title} delay={i * 0.12}>
          <motion.div 
            whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.02)' }}
            className="group grid md:grid-cols-2 border-t border-[#6D28D9] cursor-pointer"
            onClick={() => window.location.hash = '#contact'}
          >
            <motion.div whileHover={{ scale: 1.03 }} className={`overflow-hidden h-[220px] ${w.flip ? 'md:order-2' : ''}`}>
              <img src={w.img} alt={w.title} className="w-full h-full object-cover" />
            </motion.div>
            <div className={`relative p-7 ${w.flip ? 'md:border-r border-[#6D28D9]' : 'md:border-l border-[#6D28D9]'}`}>
              <h3 className="text-[16px] font-bold text-gray-900">{w.title}</h3>
              <p className="mt-3 text-[10px] leading-[1.8] text-gray-600">Duis aute irure dolor in reprehenewiderit.<br />Sed a metus sed enim sodales varius.</p>
              <span className="absolute bottom-5 right-5 text-[9px] font-semibold text-[#A107C7] transition-transform group-hover:translate-x-1">Know More</span>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </SectionWrap>
  );
}

/* ── services ────────────────────────────────────────────── */

function Services() {
  const items = ['Web Development', 'Software Development', 'Mobile App\nDevelopment', 'Databases'];
  return (
    <SectionWrap id="services" num="04" label="Our Services" className="mt-6" clickable>
      <div className="p-7 md:p-9 relative cursor-pointer group" onClick={() => window.location.hash = '#contact'}>
        <motion.div whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.01)' }} className="absolute inset-0 transition-colors" />
        <p className="relative z-10 text-[13px] leading-[1.75] text-gray-700 max-w-[600px]">Duis aute irure dolor in reprehenewiderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.</p>
        <div className="relative z-10 flex justify-end mt-4"><GradBtn>Learn More</GradBtn></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#6D28D9]">
        {items.map((title, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4, backgroundColor: i === 3 ? '' : 'rgba(109, 40, 217, 0.02)' }}
              className={`group relative p-7 min-h-[145px] cursor-pointer ${i % 2 === 0 ? 'sm:border-r border-[#6D28D9]' : ''} ${i < 2 ? 'border-b border-[#6D28D9]' : ''} ${i === 3 ? 'bg-gradient-to-br from-[#F00655] via-[#A107E3] to-[#0730D9] text-white' : ''}`}
              onClick={() => window.location.hash = '#contact'}
            >
              <h3 className="whitespace-pre-line text-[15px] font-bold leading-[1.35]">{title}</h3>
              <p className={`mt-3 text-[10px] leading-[1.8] ${i === 3 ? 'text-white/85' : 'text-gray-600'}`}>Duis aute irure dolor in reprehenewiderit.<br />Sed a metus sed enim sodales varius.</p>
              <span className={`absolute bottom-4 right-5 text-[9px] font-semibold transition-transform group-hover:translate-x-1 ${i === 3 ? 'text-white/80' : 'text-[#A107C7]'}`}>Know More</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}

/* ── testimonials ────────────────────────────────────────── */

function Testimonials() {
  return (
    <SectionWrap id="teams" num="05" label="Testimonial" className="mt-6" clickable>
      <div className="p-7 md:p-9 relative cursor-pointer group" onClick={() => window.location.hash = '#contact'}>
        <motion.div whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.01)' }} className="absolute inset-0 transition-colors" />
        <p className="relative z-10 text-[13px] leading-[1.75] text-gray-700 max-w-[600px] font-semibold">Duis aute irure dolor in reprehenewiderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque malesuada rhoncus rutrum. Sed a metus sed enim sodales varius.</p>
        <div className="relative z-10 flex justify-end mt-4"><GradBtn>Learn More</GradBtn></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#6D28D9]">
        {[0, 1].map(i => (
          <Reveal key={i} delay={i * 0.15} className={`${i === 0 ? 'sm:border-r border-[#6D28D9]' : ''}`}>
            <motion.div 
              whileHover={{ backgroundColor: 'rgba(109, 40, 217, 0.02)' }}
              className="p-7 cursor-pointer h-full"
              onClick={() => window.location.hash = '#contact'}
            >
              <h3 className="text-[13px] font-bold leading-[1.5] text-gray-900">Duis aute irure dolor in<br />reprehenewiderit..</h3>
              <p className="mt-3 text-[9px] leading-[1.85] text-gray-600">Aenean viverra nec orci in feugiat.<br />Quisque malesuada rhoncus rutrum. Sed<br />a metus sed enim sodales varius. Morbi<br />scelerisque euismod velit eu euismod.<br />Vivamus aliquet ligula non posuere.</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#1C25D8] to-[#E6005C]" />
                <div><div className="text-[11px] font-bold">Mauris Cursus</div><div className="text-[9px] text-gray-500">Mauris Cursus</div></div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}

/* ── footer ──────────────────────────────────────────────── */

function Footer() {
  return (
    <Reveal className="mt-10">
      <footer id="contact" className="max-w-[1120px] mx-auto px-6">
        <div className="bg-[#11111D] rounded-sm px-10 py-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5"><Logo size={28} /><span className="text-[11px] font-bold tracking-wide">MOBILE DEV STUDIOS</span></div>
              <p className="mt-4 text-[9px] leading-[1.9] text-white/60 max-w-[220px]">Nam nec augue lobortis nisi molestie fermentum aenean viverra nec feugiat.</p>
              <p className="mt-3 text-[9px] leading-[1.9] text-white/60">username@domain.com<br />1234-567-890</p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold">Home</h4>
              <ul className="mt-4 space-y-3 text-[9px] text-white/60">{['About Us', 'Services', 'Teams'].map(l => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold">Resources</h4>
              <ul className="mt-4 space-y-3 text-[9px] text-white/60">{['Contact Us', 'FAQ', 'Featured'].map(l => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold">Legal</h4>
              <ul className="mt-4 space-y-3 text-[9px] text-white/60">{['Privacy Policy', 'Terms & Condition'].map(l => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}</ul>
            </div>
          </div>
          <div className="mt-8 pt-5 border-t border-white/10 text-center text-[8px] text-white/40">Copyright @Name Year All Right Reserved</div>
        </div>
      </footer>
    </Reveal>
  );
}

/* ── gradient button ─────────────────────────────────────── */

function GradBtn({ children }: { children: ReactNode }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }} 
      className="h-[32px] px-5 bg-gradient-to-r from-[#F00655] via-[#A107C7] to-[#0628D4] text-[10px] font-bold text-white rounded-sm"
      onClick={() => window.location.hash = '#contact'}
    >
      {children}
    </motion.button>
  );
}

/* ── app ─────────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-12">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <OurWork />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
