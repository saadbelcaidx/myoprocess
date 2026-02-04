import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, XCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-8 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/[0.02] rounded-full blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-red-400/60" strokeWidth={1.5} />
          </div>
          <h2 className="text-[11px] text-[#71717a] tracking-[-0.01em] font-medium">
            The Problem
          </h2>
        </div>

        <div className="space-y-6 text-[15px] leading-[1.6] tracking-[-0.01em]">
          <p className="text-[#fafafa] font-normal">
            Most B2B deals die before they start.
          </p>
          <p className="text-[#a1a1aa] font-normal">
            Not because the solution is bad — but because the right people never meet at the right time.
          </p>

          <div className="pt-6 space-y-4">
            {[
              'Buyers are overwhelmed.',
              'Sellers rely on outreach and luck.',
              'Both waste time on wrong-fit conversations.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-[#71717a]">
                <XCircle className="w-4 h-4 text-red-400/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 pl-6 border-l-2 border-white/[0.06]">
            <p className="text-[#fafafa] font-normal">
              The real problem isn't demand. It's routing.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
