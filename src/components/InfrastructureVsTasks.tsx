import { motion } from 'framer-motion';
import { User, Network } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const comparisons = [
  { manual: 'Search for prospects', routing: 'Prospects route to you' },
  { manual: 'Run campaigns', routing: 'Introductions flow automatically' },
  { manual: 'Hire teams to prospect', routing: 'Infrastructure handles routing' },
  { manual: 'Pay per contact', routing: 'Pay for infrastructure access' },
  { manual: 'Chase conversations', routing: 'Conversations come to you' },
  { manual: 'Hope to be discovered', routing: 'ICP routes through you' },
];

export default function InfrastructureVsTasks() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <p className="text-[11px] text-cyan-400 tracking-wider font-semibold">
              TRADITIONAL METHODS VS. ROUTING INFRASTRUCTURE
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-[-0.03em] text-[#fafafa] mb-6">
            Old Way vs. New Way
          </h2>
          <p className="text-[15px] text-[#71717a] max-w-2xl mx-auto leading-relaxed">
            Traditional methods make you search. Infrastructure brings them to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <User className="w-5 h-5 text-[#71717a]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#fafafa]">Traditional Methods</h3>
                <p className="text-[12px] text-[#71717a]">Manual outreach and searching</p>
              </div>
            </div>

            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <div className="w-1 h-1 rounded-full bg-[#71717a] mt-2 flex-shrink-0" />
                  <span className="text-[14px] text-[#71717a] leading-relaxed">
                    {item.manual}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#71717a] font-semibold tracking-wider">
                  OPERATING LEVEL
                </span>
                <span className="text-[12px] text-[#71717a]">Individual</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30">
                  <Network className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#fafafa]">myoProcess</h3>
                  <p className="text-[12px] text-cyan-400/80">Routing infrastructure</p>
                </div>
              </div>

              <div className="space-y-3">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/20 transition-colors duration-200"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 mt-2 flex-shrink-0" />
                    <span className="text-[14px] text-[#fafafa] leading-relaxed font-medium">
                      {item.routing}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-cyan-500/10">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-cyan-400/80 font-semibold tracking-wider">
                    OPERATING LEVEL
                  </span>
                  <span className="text-[12px] text-cyan-400 font-semibold">Systems</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <p className="text-[10px] text-emerald-400 tracking-wider font-bold">
                THE FUNDAMENTAL SHIFT
              </p>
            </div>
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed">
              Banks don't facilitate transactions—they route capital. Telecoms don't connect calls—they route data. B2B companies don't search for their ICP—
              <span className="text-emerald-400 font-semibold"> their ICP routes through them</span>.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
