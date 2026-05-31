import { Shield, Search, Server, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Firewall configuration, intrusion detection and comprehensive 24/7 threat monitoring.',
      features: ['Threat Detection', 'Firewall Setup', '24/7 Monitoring'],
    },
    {
      icon: Search,
      title: 'Vulnerability Assessments',
      description: 'Regular security audits, proactive patch management and risk identification.',
      features: ['Security Audits', 'Patch Management', 'Risk Analysis'],
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'End-to-end infrastructure management including server health and cloud integration.',
      features: ['Server Monitoring', 'Cloud Integration', 'Performance Tuning'],
    },
    {
      icon: FileText,
      title: 'ISO Compliance',
      description: 'SOP development, documentation and alignment to ISO standards for audit readiness.',
      features: ['SOP Development', 'Documentation', 'Compliance Alignment'],
    },
  ];

  const supportLevels = [
    {
      level: 'L1',
      type: 'Helpdesk Support',
      category: 'Operational',
      description: 'First-line user assistance, password resets, basic troubleshooting and rapid response.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      level: 'L2',
      type: 'Advanced Technical',
      category: 'Operational',
      description: 'Application issues, system configurations, software installations and escalated problems.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      level: 'L3',
      type: 'Infrastructure',
      category: 'Strategic',
      description: 'Complex server issues, network architecture problems and system integration challenges.',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      level: 'L4',
      type: 'Strategic IT Consultancy',
      category: 'Strategic',
      description: 'Disaster recovery planning, technology roadmaps, vendor management and long-term strategy.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Core Services */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-50">Core Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-12">
            Comprehensive IT solutions covering security, infrastructure and compliance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="mb-4 p-3 bg-slate-800/50 rounded-lg w-fit group-hover:bg-cyan-500/20 transition-colors">
                    <Icon size={24} className="text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-50 mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Model */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-50">4-Level Support Model</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-12">
            From helpdesk to strategic consultancy — complete coverage for every IT need.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {supportLevels.map((level, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-xl hover:border-opacity-50 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color} rounded-t-xl`}></div>
                <div className="mb-4">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                    {level.level}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                    {level.category}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-50 mb-2">{level.type}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
