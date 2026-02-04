import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-8 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-emerald-400/60" strokeWidth={1.5} />
          </div>
          <h2 className="text-[11px] text-[#71717a] tracking-[-0.01em] font-medium">
            Why myoProcess Is Different
          </h2>
        </div>

        <div className="space-y-6 text-[15px] leading-[1.6] tracking-[-0.01em]">
          <div className="space-y-3 text-[#71717a]">
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
              <p>Others sell databases.</p>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
              <p>Others sell outreach.</p>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
              <p>Others sell introductions one at a time.</p>
            </div>
          </div>

          <div className="pt-4 pl-6 border-l-2 border-emerald-500/20">
            <p className="text-[#fafafa] font-normal">
              We sell infrastructure.
            </p>
          </div>

          <div className="pt-6 space-y-3 text-[#71717a]">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#52525b]" />
              <p>No searching.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#52525b]" />
              <p>No campaigns.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#52525b]" />
              <p>No chasing.</p>
            </div>
          </div>

          <div className="pt-6 p-6 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-400/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-[#a1a1aa] font-normal">
                Your ICP routes to you. You become the destination, not the seeker.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
