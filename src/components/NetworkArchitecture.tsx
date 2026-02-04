import { motion } from 'framer-motion';
import { Building2, Users, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buyerTypes = [
  { type: 'Enterprise Buyers', signal: 'Active RFP', compatible: true },
  { type: 'Growth Stage', signal: 'Budget Approved', compatible: true },
  { type: 'Strategic Partners', signal: 'Qualified Intent', compatible: true },
  { type: 'Early Stage', signal: 'Exploratory', compatible: false },
];

const sellerTypes = [
  { type: 'Solution Providers', capacity: 'High Volume', compatible: true },
  { type: 'Service Partners', capacity: 'Mid-Market Focus', compatible: true },
  { type: 'Enterprise Vendors', capacity: 'Strategic Only', compatible: true },
  { type: 'Early Vendors', capacity: 'Unverified', compatible: false },
];

export default function NetworkArchitecture() {
  return (
    <section className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-black via-emerald-950/5 to-black">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <p className="text-[11px] text-emerald-400 tracking-wider font-semibold">
              NETWORK ARCHITECTURE
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-[-0.03em] text-[#fafafa] mb-6">
            Two-Sided Routing Network
          </h2>
          <p className="text-[15px] text-[#71717a] max-w-2xl mx-auto leading-relaxed">
            Compatible nodes connect through the routing layer. Incompatible signals are filtered at the edge.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#fafafa]">Buyer Nodes</h3>
                <p className="text-[12px] text-[#71717a]">Inbound signal sources</p>
              </div>
            </div>

            {buyerTypes.map((buyer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  p-4 rounded-xl border backdrop-blur-sm transition-all duration-300
                  ${buyer.compatible
                    ? 'border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/30'
                    : 'border-white/5 bg-white/[0.01] opacity-50'
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {buyer.compatible ? (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400/50" />
                      )}
                      <h4 className="text-[14px] font-semibold text-[#fafafa]">
                        {buyer.type}
                      </h4>
                    </div>
                    <p className="text-[12px] text-[#71717a]">{buyer.signal}</p>
                  </div>
                  {buyer.compatible && (
                    <div className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      <span className="text-[10px] text-cyan-400 font-semibold">ROUTABLE</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden lg:flex flex-col items-center gap-4 px-8"
          >
            <div className="relative p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-black" />
                </div>
                <div className="text-[11px] text-emerald-400 font-bold tracking-wider mb-1">
                  ROUTING LAYER
                </div>
                <div className="text-[13px] text-[#a1a1aa]">
                  Match • Filter • Route
                </div>
              </div>

              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <div className="flex items-center gap-1">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-500/50 to-cyan-500" />
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                <div className="flex items-center gap-1">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500/50" />
                </div>
              </div>
            </div>

            <div className="text-center text-[11px] text-[#71717a] max-w-[120px]">
              87% of signals qualify for routing
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Building2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#fafafa]">Seller Nodes</h3>
                <p className="text-[12px] text-[#71717a]">Destination endpoints</p>
              </div>
            </div>

            {sellerTypes.map((seller, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  p-4 rounded-xl border backdrop-blur-sm transition-all duration-300
                  ${seller.compatible
                    ? 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/30'
                    : 'border-white/5 bg-white/[0.01] opacity-50'
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {seller.compatible ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400/50" />
                      )}
                      <h4 className="text-[14px] font-semibold text-[#fafafa]">
                        {seller.type}
                      </h4>
                    </div>
                    <p className="text-[12px] text-[#71717a]">{seller.capacity}</p>
                  </div>
                  {seller.compatible && (
                    <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-[10px] text-emerald-400 font-semibold">ACTIVE</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed">
              Network effects compound as node density increases. Each compatible connection strengthens the routing layer. Incompatible signals are rejected before consuming system resources.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
