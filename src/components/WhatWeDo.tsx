import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, CheckCircle2 } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-8 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <GitBranch className="w-4 h-4 text-blue-400/60" strokeWidth={1.5} />
          </div>
          <h2 className="text-[11px] text-[#71717a] tracking-[-0.01em] font-medium">
            What We Do
          </h2>
        </div>

        <div className="space-y-6 text-[15px] leading-[1.6] tracking-[-0.01em]">
          <p className="text-[#fafafa] font-normal">
            We route introductions between companies and their ideal customers.
          </p>

          <p className="text-[#a1a1aa] font-normal">
            Real intent. Mutual fit. Direct connection.
          </p>

          <div className="pt-6 space-y-3">
            {[
              'No searching.',
              'No outreach.',
              'No noise.'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#71717a]">
                <div className="w-1 h-1 rounded-full bg-[#52525b]" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400/60 flex-shrink-0" strokeWidth={1.5} />
              <p className="text-[#fafafa] font-normal">
                Qualified introductions route to you.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
