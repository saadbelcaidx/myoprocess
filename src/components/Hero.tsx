import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.16,
      ease,
    },
  },
};

const NetworkVisualization = () => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [activeRoutes, setActiveRoutes] = useState<number[]>([]);

  useEffect(() => {
    const nodeInterval = setInterval(() => {
      const randomNode = Math.floor(Math.random() * 12);
      setActiveNodes(prev => [...prev.slice(-3), randomNode]);
    }, 1200);

    const routeInterval = setInterval(() => {
      const randomRoute = Math.floor(Math.random() * 8);
      setActiveRoutes(prev => [...prev.slice(-2), randomRoute]);
    }, 1800);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(routeInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {[...Array(12)].map((_, i) => {
          const x = 100 + (i % 4) * 200;
          const y = 150 + Math.floor(i / 4) * 150;
          const isActive = activeNodes.includes(i);

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={isActive ? 6 : 4}
                fill="#06b6d4"
                opacity={isActive ? 1 : 0.3}
                className="transition-all duration-500"
              >
                {isActive && (
                  <animate
                    attributeName="r"
                    values="4;8;4"
                    dur="1.5s"
                    repeatCount="1"
                  />
                )}
              </circle>
              {isActive && (
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  opacity={0.6}
                >
                  <animate
                    attributeName="r"
                    values="4;16;24"
                    dur="1.5s"
                    repeatCount="1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.3;0"
                    dur="1.5s"
                    repeatCount="1"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {[...Array(8)].map((_, i) => {
          const startNode = i * 1.5;
          const endNode = startNode + 4;
          const x1 = 100 + (Math.floor(startNode) % 4) * 200;
          const y1 = 150 + Math.floor(Math.floor(startNode) / 4) * 150;
          const x2 = 100 + (Math.floor(endNode) % 4) * 200;
          const y2 = 150 + Math.floor(Math.floor(endNode) / 4) * 150;
          const isActive = activeRoutes.includes(i);

          return (
            <line
              key={`route-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#routeGradient)"
              strokeWidth={isActive ? 2 : 1}
              opacity={isActive ? 0.8 : 0.15}
              className="transition-all duration-700"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pt-20 overflow-hidden">
      <NetworkVisualization />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_65%)]" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mb-12 space-y-8">
          <motion.div
            className="space-y-3"
            variants={itemVariants}
          >
            <h1 className="text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-medium tracking-[-0.04em] text-[#fafafa]">
              Banks route capital.
            </h1>
            <h1 className="text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-medium tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              We route access.
            </h1>
          </motion.div>

          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
            variants={itemVariants}
          >
            <p className="text-[12px] text-cyan-400 tracking-[-0.01em] font-medium">
              INFRASTRUCTURE • NOT A SERVICE
            </p>
          </motion.div>

          <motion.p
            className="text-[16px] text-[#a1a1aa] leading-[1.7] font-normal max-w-2xl tracking-[-0.01em]"
            variants={itemVariants}
          >
            Trusted in over $1B of routed B2B transactions (2023–2025).
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          variants={itemVariants}
        >
          <a
            href="https://cal.com/saadmyoprocess/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-[13px] font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 text-center"
          >
            Access the Routing Layer
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
