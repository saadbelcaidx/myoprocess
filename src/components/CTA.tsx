import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Activity, Zap, Network } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="access" ref={ref} className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_65%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl" />

      <motion.div
        className="max-w-5xl mx-auto relative"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.16, ease }}
      >
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <p className="text-[11px] text-cyan-400 tracking-wider font-semibold">
              JOIN THE NETWORK
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-[-0.03em] text-[#fafafa] mb-6">
            Access the Routing Layer
          </h2>
          <p className="text-[15px] text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
            Network capacity is controlled to maintain signal quality and routing velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-sm">
            <Activity className="w-6 h-6 text-cyan-400 mb-3" />
            <div className="text-[13px] text-[#71717a] font-semibold tracking-wider mb-1">
              ACTIVE ROUTES
            </div>
            <div className="text-2xl font-bold text-[#fafafa]">2.4k/day</div>
          </div>

          <div className="p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm">
            <Zap className="w-6 h-6 text-emerald-400 mb-3" />
            <div className="text-[13px] text-[#71717a] font-semibold tracking-wider mb-1">
              NETWORK CAPACITY
            </div>
            <div className="text-2xl font-bold text-[#fafafa]">87%</div>
          </div>

          <div className="p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm">
            <Network className="w-6 h-6 text-blue-400 mb-3" />
            <div className="text-[13px] text-[#71717a] font-semibold tracking-wider mb-1">
              CURRENT NODES
            </div>
            <div className="text-2xl font-bold text-[#fafafa]">450+</div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 backdrop-blur-sm mb-8">
            <div className="space-y-4 text-[15px] leading-[1.7] tracking-[-0.01em]">
              <p className="text-[#fafafa] font-medium">
                Network access is controlled.
              </p>
              <p className="text-[#a1a1aa]">
                We maintain strict qualification standards to protect routing integrity. Both buyer and seller nodes must meet network compatibility requirements.
              </p>
              <p className="text-[#a1a1aa]">
                If your signals are high-quality and your intent is clear, request access to join the routing layer.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://cal.com/saadmyoprocess/quick-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-[14px] font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Request Network Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
