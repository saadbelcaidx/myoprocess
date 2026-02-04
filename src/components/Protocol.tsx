import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stages = [
  {
    icon: Search,
    stage: 'DETECT',
    title: 'Signal Detection',
    description: 'Inbound buyer signals enter the system',
    metrics: ['Signal Volume', 'Intent Strength', 'Source Quality'],
    color: 'cyan',
  },
  {
    icon: Filter,
    stage: 'QUALIFY',
    title: 'Route Qualification',
    description: 'Real-time filtering and pathway validation',
    metrics: ['Match Score', 'Qualification Rate', 'Filter Efficiency'],
    color: 'blue',
  },
  {
    icon: ArrowRight,
    stage: 'ROUTE',
    title: 'Pathway Execution',
    description: 'Controlled connection to optimal destination',
    metrics: ['Routing Speed', 'Path Accuracy', 'Throughput'],
    color: 'emerald',
  },
  {
    icon: CheckCircle2,
    stage: 'COMPLETE',
    title: 'Transaction Flow',
    description: 'Successful handoff and outcome tracking',
    metrics: ['Completion Rate', 'Transaction Value', 'Network Effect'],
    color: 'green',
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20',
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20',
    },
    green: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      glow: 'shadow-green-500/20',
    },
  };
  return colors[color];
};

export default function Protocol() {
  return (
    <section className="relative py-32 px-8 overflow-hidden bg-gradient-to-b from-black via-blue-950/5 to-black">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <p className="text-[11px] text-emerald-400 tracking-wider font-semibold">
              THE PROTOCOL
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-[-0.03em] text-[#fafafa] mb-6">
            System-Level Processing
          </h2>
          <p className="text-[15px] text-[#71717a] max-w-2xl mx-auto leading-relaxed">
            Not steps. Not tasks. A continuous flow of signal processing at infrastructure scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stages.map((stage, index) => {
            const colorClasses = getColorClasses(stage.color);
            return (
              <motion.div
                key={stage.stage}
                variants={itemVariants}
                className="relative group"
              >
                <div
                  className={`
                    p-6 rounded-2xl border ${colorClasses.border} ${colorClasses.bg}
                    backdrop-blur-sm hover:shadow-lg ${colorClasses.glow}
                    transition-all duration-300
                  `}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2.5 rounded-lg bg-black/50 border ${colorClasses.border}`}>
                      <stage.icon className={`w-5 h-5 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-[11px] ${colorClasses.text} font-bold tracking-wider mb-1`}>
                        {stage.stage}
                      </div>
                      <h3 className="text-lg font-semibold text-[#fafafa] mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-[13px] text-[#a1a1aa] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="text-[11px] text-[#71717a] font-semibold mb-2 tracking-wider">
                      METRICS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stage.metrics.map((metric) => (
                        <span
                          key={metric}
                          className={`px-2 py-1 rounded text-[10px] ${colorClasses.bg} ${colorClasses.border} border ${colorClasses.text} font-medium`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {index < stages.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-white/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <p className="text-[10px] text-emerald-400 font-bold tracking-wider">
                  THROUGHPUT CAPACITY
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  2.4k<span className="text-lg text-emerald-500/60">/day</span>
                </div>
                <div className="text-[12px] text-[#71717a]">Signals Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  87<span className="text-lg text-cyan-500/60">%</span>
                </div>
                <div className="text-[12px] text-[#71717a]">Qualification Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  &lt;120<span className="text-lg text-blue-500/60">ms</span>
                </div>
                <div className="text-[12px] text-[#71717a]">Avg Route Time</div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
