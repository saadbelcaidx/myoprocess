import { motion } from 'framer-motion';
import { Activity, TrendingUp, Zap, Network } from 'lucide-react';
import { useEffect, useState } from 'react';

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

const MetricCard = ({
  icon: Icon,
  label,
  value,
  unit,
  trend,
  color
}: {
  icon: any;
  label: string;
  value: string;
  unit: string;
  trend: string;
  color: string;
}) => {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayValue(value);
    }, 300);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <motion.div
      variants={itemVariants}
      className="relative p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-sm hover:border-white/10 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg bg-${color}-500/10 border border-${color}-500/20`}>
          <Icon className={`w-4 h-4 text-${color}-400`} />
        </div>
        <div className="flex items-center gap-1 text-emerald-400 text-[11px] font-semibold">
          <TrendingUp className="w-3 h-3" />
          {trend}
        </div>
      </div>
      <div className="text-[11px] text-[#71717a] font-semibold tracking-wider mb-2">
        {label}
      </div>
      <div className="flex items-baseline gap-1">
        <div className={`text-3xl font-bold text-${color}-400 transition-all duration-700`}>
          {displayValue}
        </div>
        <div className={`text-sm text-${color}-500/60 font-medium`}>
          {unit}
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${color}-500/0 via-${color}-500/50 to-${color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
};

export default function NetworkMetrics() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05)_0%,transparent_50%)]" />

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
              NETWORK METRICS
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-[-0.03em] text-[#fafafa] mb-6">
            Infrastructure Performance
          </h2>
          <p className="text-[15px] text-[#71717a] max-w-2xl mx-auto leading-relaxed">
            Real-time visibility into routing operations. Scale measured in throughput, not transactions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard
            icon={Activity}
            label="ROUTES PROCESSED"
            value="847k"
            unit="total"
            trend="+23%"
            color="cyan"
          />
          <MetricCard
            icon={Zap}
            label="ROUTING VELOCITY"
            value="2.4k"
            unit="/day"
            trend="+18%"
            color="blue"
          />
          <MetricCard
            icon={Network}
            label="QUALIFICATION RATE"
            value="87"
            unit="%"
            trend="+5%"
            color="emerald"
          />
          <MetricCard
            icon={TrendingUp}
            label="CONNECTION DENSITY"
            value="94"
            unit="%"
            trend="+12%"
            color="green"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-[11px] text-[#71717a] font-semibold tracking-wider">
                  NETWORK UPTIME
                </div>
                <div className="text-2xl font-bold text-[#fafafa]">99.97%</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[12px]">
                <span className="text-[#71717a]">Last 30 days</span>
                <span className="text-emerald-400 font-semibold">Operational</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[99.97%] bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] text-[#71717a] font-semibold tracking-wider">
                  AVG RESPONSE TIME
                </div>
                <div className="text-2xl font-bold text-[#fafafa]">&lt;120ms</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[12px]">
                <span className="text-[#71717a]">P95 latency</span>
                <span className="text-cyan-400 font-semibold">185ms</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 backdrop-blur-sm"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[13px] text-[#71717a] mb-3 tracking-wider font-semibold">
              INFRASTRUCTURE SCOPE
            </div>
            <div className="text-[16px] text-[#fafafa] leading-relaxed">
              <span className="text-cyan-400 font-semibold">$1.2B+</span> in total routed transaction value
              {' • '}
              <span className="text-emerald-400 font-semibold">450+</span> active network nodes
              {' • '}
              <span className="text-blue-400 font-semibold">12</span> enterprise sectors
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
