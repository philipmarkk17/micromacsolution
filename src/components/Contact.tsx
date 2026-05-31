import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: 'home' | 'booking') => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Available 24/7 for immediate support',
      action: 'Speak with specialist',
      color: 'text-cyan-400',
      onClick: null,
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Proposals, consultations & assessments',
      action: 'Send inquiry',
      color: 'text-blue-400',
      onClick: null,
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

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="mb-16 p-12 bg-gradient-to-r from-cyan-500/10 via-slate-900/50 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
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
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <Icon className={`${method.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
                <h3 className="text-xl font-bold text-slate-50 mb-2">{method.title}</h3>
                <p className="text-slate-400 mb-6">{method.description}</p>
                <button
                  onClick={method.onClick ? method.onClick : undefined}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/btn"
                >
                  {method.action}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-4 gap-6 p-8 bg-slate-800/20 border border-slate-700/50 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
            <p className="text-sm text-slate-400">Monitoring & Support</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">4-Tier</div>
            <p className="text-sm text-slate-400">Support Coverage</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">1 Vendor</div>
            <p className="text-sm text-slate-400">All Your Needs</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">ISO Ready</div>
            <p className="text-sm text-slate-400">Compliance Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
