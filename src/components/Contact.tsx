import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MouseGradient } from './MouseGradient';

interface ContactProps {
  setCurrentPage: (page: 'home' | 'booking') => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Available 24/7 for immediate support',
      action: 'Speak with specialist',
      color: 'text-cyan-400',
      link: 'tel:018-5852208',
      display: '018-5852208',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Proposals, consultations & assessments',
      action: 'Send inquiry',
      color: 'text-blue-400',
      link: 'mailto:techsupport@micromacsolution.com',
      display: 'techsupport@micromacsolution.com',
    },
    {
      icon: Globe,
      title: 'Online',
      description: 'Request a quote at your convenience',
      action: 'Request demo',
      color: 'text-cyan-400',
      onClick: () => setCurrentPage('booking'),
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
    hidden: { opacity: 0, y: 40, rotateX: 25 },
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
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <motion.div
          className="mb-16 p-12 bg-gradient-to-r from-cyan-500/10 via-slate-900/50 to-blue-500/10 border border-cyan-500/20 rounded-2xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotateX: -5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-50">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Your IT Infrastructure?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mt-4">
            Serving SME businesses across Klang Valley — let our specialists assess your current infrastructure and design a plan that fits your needs and budget.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <MouseGradient className="mb-16">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
              >
                <Icon className={`${method.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
                <h3 className="text-xl font-bold text-slate-50 mb-2">{method.title}</h3>
                <p className="text-slate-400 mb-6">{method.description}</p>
                {method.link ? (
                  <a
                    href={method.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/btn"
                  >
                    {method.display}
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <motion.button
                    onClick={method.onClick ? method.onClick : undefined}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/btn"
                    whileHover={{ x: 5 }}
                  >
                    {method.action}
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                )}
              </motion.div>
            );
          })}
          </motion.div>
        </MouseGradient>

        {/* Trust Signals */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 p-8 bg-slate-800/20 border border-slate-700/50 rounded-xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {[
            { number: '24/7', label: 'Monitoring & Support' },
            { number: '4-Tier', label: 'Support Coverage' },
            { number: '1 Vendor', label: 'All Your Needs' },
            { number: 'ISO Ready', label: 'Compliance Support' },
          ].map((item, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <motion.div
                className="text-2xl font-bold text-cyan-400 mb-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
              >
                {item.number}
              </motion.div>
              <p className="text-sm text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
