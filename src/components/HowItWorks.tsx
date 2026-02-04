import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Filter, Link2 } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: '1',
    title: 'Intent Detection',
    description: 'We monitor real-world signals that indicate buying or selling intent — growth, funding, hiring, expansion, tech changes, and operational triggers.',
    icon: Target,
    color: 'blue'
  },
  {
    number: '2',
    title: 'Qualification',
    description: "Both sides are vetted for budget, authority, and relevance. If it's not a real opportunity, it doesn't get routed.",
    icon: Filter,
    color: 'violet'
  },
  {
    number: '3',
    title: 'Private Introduction',
    description: 'We make a clean, contextual introduction so both parties enter the conversation already aligned.',
    icon: Link2,
    color: 'emerald'
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how" ref={ref} className="py-32 px-8 border-t border-white/[0.06]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <h2 className="text-[11px] text-[#71717a] mb-12 tracking-[-0.01em] font-medium">
          How It Works
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-14 w-px h-12 bg-gradient-to-b from-white/[0.06] to-transparent" />
                )}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-baseline gap-3 mb-3">
                      <div className="text-[11px] text-[#52525b] tracking-[-0.01em]">Step {step.number}</div>
                      <div className="w-8 h-px bg-white/[0.06]" />
                      <h3 className="text-[15px] text-[#fafafa] font-medium tracking-[-0.01em]">{step.title}</h3>
                    </div>
                    <p className="text-[15px] text-[#a1a1aa] leading-[1.6] font-normal tracking-[-0.01em]">
                      {step.description}
                    </p>
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
