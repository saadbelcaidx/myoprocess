import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const goodFit = [
    'B2B companies with proven offers',
    'Clear ideal customer profiles',
    'High-value relationships',
    'Strategic partnerships'
  ];

  const notGoodFit = [
    'Early experiments',
    'Consumer offers',
    'Volume-based sales',
    'Transactional plays'
  ];

  return (
    <section ref={ref} className="py-32 px-8 border-t border-white/[0.06]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400/60" strokeWidth={1.5} />
              </div>
              <h2 className="text-[11px] text-[#71717a] tracking-[-0.01em] font-medium">
                Who This Is For
              </h2>
            </div>

            <p className="text-[15px] text-[#a1a1aa] mb-6 leading-[1.6] tracking-[-0.01em] font-normal">
              Best for:
            </p>

            <div className="space-y-3">
              {goodFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 mt-2 flex-shrink-0" />
                  <p className="text-[15px] text-[#71717a] tracking-[-0.01em]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <p className="text-[13px] text-[#a1a1aa] leading-[1.6] tracking-[-0.01em] font-normal">
                We build infrastructure for precision, not volume.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-400/60" strokeWidth={1.5} />
              </div>
              <h2 className="text-[11px] text-[#71717a] tracking-[-0.01em] font-medium">
                Who This Is Not For
              </h2>
            </div>

            <div className="space-y-3 mt-[52px]">
              {notGoodFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/30 mt-2 flex-shrink-0" />
                  <p className="text-[15px] text-[#71717a] tracking-[-0.01em]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
              <p className="text-[#fafafa] text-[13px] tracking-[-0.01em] font-medium">
                We route real opportunities, not hope.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
