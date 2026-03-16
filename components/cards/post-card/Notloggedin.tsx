"use client"

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import laxmanpic from "@/public/laxman.jpg"
import paramapic from "@/public/parama.jpg"
import { poppins } from "@/components/fonts";
import { cn } from "@/lib/utils";

const features = [
  { title: "Connect", description: "Build real relationships with people around you", icon: "◈" },
  { title: "Share", description: "Express yourself through photos and stories", icon: "◉" },
  { title: "Discover", description: "Explore content tailored to your world", icon: "◎" },
  { title: "Engage", description: "React, comment, and grow your circle", icon: "◐" },
];

const testimonials = [
  { name: "Laxman", role: "Influencer", content: "This app has revolutionized the way I connect with my audience. Intuitive, fast, and keeps me engaged.", avatar: laxmanpic },
  { name: "Paramaguru", role: "AI Engineer", content: "As a visual creator, I love how this platform showcases my work. The community here is genuinely supportive.", avatar: paramapic },
];

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25,0.1,0.25,1] as const } } };

export const NotloggedIn: React.FC = () => {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#1a1612' }}>

      {/* Hero */}
      <section className="relative w-full px-6 pt-28 pb-24 text-center overflow-hidden">
        {/* Warm glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(ellipse, #f07c1e 0%, transparent 70%)' }} />
        </div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 max-w-3xl mx-auto">
          <motion.p variants={fadeUp} className="text-[#f07c1e] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            A social platform for real people
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className={cn("text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight", poppins.className)}
          >
            Where friendships<br />
            <span style={{ color: '#f07c1e' }}>come alive.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Share moments, follow people you admire, and build a community that matters to you.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center gap-3 flex-wrap">
            <Link
              href="/auth/signup"
              className="px-7 py-3 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: '#f07c1e' }}
            >
              Start for free
            </Link>
            <Link
              href="/auth/login"
              className="px-7 py-3 rounded-lg font-medium text-white/60 text-sm border border-white/10 hover:border-white/20 hover:text-white/80 transition-all duration-200"
            >
              Sign in
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="w-full py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="text-center">
                <div className="text-2xl mb-3 text-[#f07c1e]">{f.icon}</div>
                <h3 className={cn("text-white font-semibold text-base mb-1", poppins.className)}>{f.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={cn("text-2xl font-semibold text-white text-center mb-10", poppins.className)}
          >
            Loved by our community
          </motion.h2>
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name} variants={fadeUp}
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image src={t.avatar} alt={t.name} width={44} height={44} className="rounded-full object-cover w-11 h-11" />
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/35 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className={cn("text-white font-semibold text-lg", poppins.className)}>Friends</span>
          <div className="flex gap-5">
            <a href="https://github.com/MohamedAklamaash" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.483 0-.237-.008-.866-.012-1.699-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.004.07 1.531 1.031 1.531 1.031.892 1.528 2.341 1.087 2.912.832.091-.646.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.682-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.577 9.577 0 0112 6.844c.853.004 1.71.115 2.51.336 1.91-1.294 2.75-1.025 2.75-1.025.546 1.378.202 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.841-2.338 4.687-4.566 4.935.36.31.682.922.682 1.855 0 1.34-.012 2.422-.012 2.749 0 .268.18.576.688.478A10.016 10.016 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/aklamaash" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 8a6.5 6.5 0 00-6.5 6.5v5h2v-5a4.5 4.5 0 019 0v5h2v-5a6.5 6.5 0 00-6.5-6.5zm-13 5.5v5h2v-5h-2zm1-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
            </a>
          </div>
          <p className="text-white/20 text-xs">Made by &lt;/&gt; Mohamed Aklamaash</p>
        </div>
      </footer>
    </div>
  );
};
