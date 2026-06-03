import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Interactive3DCard } from './Interactive3DCard';

interface PricingProps {
  setCurrentPage: (page: 'home' | 'booking') => void;
}

export default function Pricing({ setCurrentPage }: PricingProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const plans = [
    {
      name: 'Starter',
      badge: 'Essential',
      users: '1–10 users',
      description: 'Basic IT support needs',
      color: 'from-green-500/10 to-emerald-600/5',
      borderColor: 'border-green-500/30',
      badgeColor: 'bg-green-500/20 text-green-300 border-green-500/30',
      buttonColor: 'from-green-500 to-emerald-600 hover:shadow-green-500/50',
      features: [
        'Level 1 & 2 helpdesk support',
        'Business hours (Mon–Fri)',
        'Remote troubleshooting',
        'Ticket management',
        'Basic network monitoring',
        'Monthly health report',
      ],
    },
    {
      name: 'Professional',
      badge: 'Recommended',
      users: '11–50 users',
      description: 'Growing SME',
      color: 'from-cyan-500/10 to-blue-600/5',
      borderColor: 'border-cyan-500/30',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      buttonColor: 'from-cyan-500 to-blue-600 hover:shadow-cyan-500/50',
      featured: true,
      features: [
        'Level 1–3 support coverage',
        'Extended hours support',
        'Network security monitoring',
        'Proactive patching',
        'Synology backup deployment',
        'Quarterly IT review meetings',
      ],
    },
    {
      name: 'Enterprise',
      badge: 'Full Coverage',
      users: '50+ users',
      description: 'Compliance & infrastructure focus',
      color: 'from-purple-500/10 to-pink-600/5',
      borderColor: 'border-purple-500/30',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      buttonColor: 'from-purple-500 to-pink-600 hover:shadow-purple-500/50',
      features: [
        'Full Level 1–4 support',
        '24/7 monitoring & priority response',
        'ISO alignment',
        'SOP & documentation',
        'Disaster recovery planning',
        'Dedicated account manager',
        'Strategic roadmap sessions',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="pricing" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-16 text-center" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-50">Flexible Service Plans</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose 1-year or 2-year contracts tailored to your business size and IT complexity.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto" initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
          {plans.map((plan, index) => (
            <Interactive3DCard
              key={index}
              className={`${plan.featured ? 'md:scale-105 md:shadow-2xl md:shadow-cyan-500/20' : ''}`}
              backContent={
                <div className={`h-full p-8 bg-gradient-to-br ${plan.color} border ${plan.borderColor} rounded-2xl flex flex-col justify-center`}>
                  <p className="text-slate-300 text-center">Click to see pricing details</p>
                </div>
              }
            >
              <motion.div
                className={`h-full p-8 bg-gradient-to-br ${plan.color} border ${plan.borderColor} rounded-2xl flex flex-col transition-all duration-300`}
                variants={itemVariants}
                whileHover={{
                  scale: plan.featured ? 1.08 : 1.05,
                  rotateY: 5,
                }}
              >
                {/* Badge */}
                {plan.featured && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={`px-4 py-1 ${plan.badgeColor} border rounded-full text-sm font-semibold whitespace-nowrap`}>
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 ${plan.badgeColor} border rounded-full text-xs font-semibold mb-3`}>
                    {plan.badge}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-50 mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-2">{plan.users}</p>
                  <p className="text-slate-400">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setCurrentPage('booking')}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan.buttonColor} text-white font-semibold rounded-lg transition-all duration-300 mb-8 shadow-lg`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <Check size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <p className="text-xs text-slate-500 text-center">Pricing on request - contact us for quotes</p>
                </div>
              </motion.div>
            </Interactive3DCard>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 px-6 py-8 bg-gradient-to-r from-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <h4 className="font-semibold text-slate-50 mb-2">Onboarding Included</h4>
            <p className="text-sm text-slate-400">Comprehensive assessment and setup for all plans</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-50 mb-2">Contract Flexibility</h4>
            <p className="text-sm text-slate-400">1-year or 2-year options with loyalty discounts</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-50 mb-2">Add-On Modules</h4>
            <p className="text-sm text-slate-400">ISO compliance package and custom services available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
