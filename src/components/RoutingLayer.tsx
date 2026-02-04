import { motion } from 'framer-motion';
import { Layers, Radio, Zap } from 'lucide-react';

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

const layers = [
  {
    icon: Radio,
    name: 'Signal Layer',
    description: 'Incoming buyer signals, intent data, and qualification triggers',
    color: 'from-cyan-500/20 to-cyan-600/20',
    borderColor: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Layers,
    name: 'Routing Layer',
    description: 'Real-time matching, qualification filtering, and pathway control',
    color: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    highlight: true,
  },
  {
    icon: Zap,
    name: 'Connection Layer',
    description: 'Executed routes, completed handoffs, and transaction flow',
    color: 'from-emerald-500/20 to-green-600/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
];

export default function RoutingLayer() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />

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
              THE ROUTING LAYER
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-[-0.03em] text-[#fafafa] mb-6">
            Connect with Your
            <br />
            Ideal Clients
          </h2>
          <p className="text-[15px] text-[#71717a] max-w-2xl mx-auto leading-relaxed">
            B2B executives and business owners partner with myoProcess to get connected directly with their ideal client profile through our intelligent routing infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 mb-16">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              variants={itemVariants}
              className="relative group"
            >
              <div
                className={`
                  relative p-8 rounded-2xl border bg-gradient-to-br ${layer.color} ${layer.borderColor}
                  backdrop-blur-sm transition-all duration-300
                  ${layer.highlight ? 'scale-[1.02] shadow-lg shadow-emerald-500/10' : 'hover:scale-[1.01]'}
                `}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-3 rounded-xl bg-black/50 border ${layer.borderColor}`}>
                    <layer.icon className={`w-6 h-6 ${layer.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-[#fafafa]">
                        {layer.name}
                      </h3>
                      {layer.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold tracking-wider">
                          YOU ARE HERE
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-[#a1a1aa] leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className={`text-2xl font-bold ${layer.iconColor}`}>
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {index < layers.length - 1 && (
                  <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14m0 0l-4-4m4 4l4-4"
                        stroke="url(#arrowGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
        >
          <p className="text-[15px] text-[#a1a1aa] leading-relaxed max-w-3xl mx-auto">
            <span className="text-cyan-400 font-semibold">Your ideal clients, delivered.</span> Every qualified signal, every matched connection, every introduction—routed directly to you through myoProcess. We connect B2B decision-makers with the right partners at the right time.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
