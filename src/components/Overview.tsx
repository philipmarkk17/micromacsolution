import { AlertTriangle, Zap, Lock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Overview() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const items = [
    {
      number: '01',
      title: 'SME IT Challenges',
      description: 'Critical technology gaps and security risks facing businesses today.',
      icon: AlertTriangle,
      color: 'text-cyan-400',
    },
    {
      number: '02',
      title: 'MicroMac Solutions',
      description: 'Your trusted IT partner delivering comprehensive outsourcing services.',
      icon: Zap,
      color: 'text-blue-400',
    },
    {
      number: '03',
      title: '4-Level Support Model',
      description: 'Complete coverage from helpdesk to strategic consultancy.',
      icon: TrendingUp,
      color: 'text-cyan-400',
    },
    {
      number: '04',
      title: 'Security & Infrastructure',
      description: 'Network protection and infrastructure management for continuity.',
      icon: Lock,
      color: 'text-blue-400',
    },
  ];

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
    hidden: { opacity: 0, y: 40, rotateX: 20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="overview" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-16" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why MicroMac
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            We provide enterprise-grade IT infrastructure at SME scale with dedicated expertise across all support levels.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-4xl font-bold text-slate-700 group-hover:text-slate-600 transition-colors">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Icon className={`${item.color} mb-3 transition-transform group-hover:scale-110`} size={24} />
                    <h3 className="text-xl font-bold text-slate-50 mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
