'use client';

import { motion } from 'framer-motion';
import { poppins } from '@/components/fonts';
import { cn } from '@/lib/utils';

interface FormLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function FormLayout({ title, children }: FormLayoutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-[400px] relative z-10"
      style={{
        background: 'rgba(255,253,250,0.06)',
        border: '1px solid rgba(240,124,30,0.2)',
        borderRadius: '12px',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div className="px-8 py-9">
        <h1 className={cn('text-white text-center text-2xl font-semibold tracking-tight mb-1', poppins.className)}>
          {title}
        </h1>
        <div className="w-8 h-0.5 bg-gradient-to-r from-[#f07c1e] to-[#e8522a] mx-auto mt-2 mb-1 rounded-full" />
        {children}
      </div>
    </motion.section>
  );
}

export function FormHeader({ children }: { children: React.ReactNode }) {
  return <p className="text-center text-white/50 mt-4 text-sm">{children}</p>;
}
