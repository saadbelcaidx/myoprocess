import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Globe, Users, Lock } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const metrics = [
  {
    icon: TrendingUp,
    label: 'Transaction Value',
    value: 'Over $1B+ routed'
  },
  {
    icon: Globe,
    label: 'Coverage',
    value: 'Multiple industries and deal sizes'
  },
  {
    icon: Users,
    label: 'Trust',
    value: 'Operators, founders, and growth teams'
  },
  {
    icon: Lock,
    label: 'Model',
    value: 'Zero-spam, invite-only routing'
  }
];

export default function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-8 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <h2 className="text-[11px] text-[#71717a] mb-12 tracking-[-0.01em] font-medium">
          Proven at Scale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white/40" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[13px] text-[#71717a] mb-2 font-normal tracking-[-0.01em]">
                      {metric.label}
                    </div>
                    <div className="text-[#fafafa] text-[15px] font-normal tracking-[-0.01em] leading-[1.5]">
                      {metric.value}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
