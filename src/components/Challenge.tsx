import { Users, Shield, TrendingDown, Network } from 'lucide-react';

export default function Challenge() {
  const challenges = [
    {
      icon: Users,
      percentage: '70%',
      title: 'of SMEs lack dedicated IT staff',
      description: 'Operating without an IT team leads to productivity losses, prolonged downtime and unresolved technical issues.',
      color: 'from-cyan-500/10 to-cyan-600/5',
      borderColor: 'border-cyan-500/20',
    },
    {
      icon: Shield,
      percentage: '$200K+',
      title: 'average cost of a security breach',
      description: 'Small businesses are prime targets. A single breach can be financially devastating, with costs exceeding RM 900,000.',
      color: 'from-red-500/10 to-red-600/5',
      borderColor: 'border-red-500/20',
    },
    {
      icon: TrendingDown,
      percentage: 'Limited',
      title: 'budget for full-time specialists',
      description: 'Hiring skilled IT professionals with diverse expertise across networking, security, cloud and compliance is prohibitive.',
      color: 'from-yellow-500/10 to-yellow-600/5',
      borderColor: 'border-yellow-500/20',
    },
    {
      icon: Network,
      percentage: 'Complex',
      title: 'infrastructure demands',
      description: 'Cloud services, network security, data backup, disaster recovery and compliance require specialized knowledge.',
      color: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-500/20',
    },
  ];

  return (
    <section id="challenge" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-50">The Challenge</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            SMEs face critical IT gaps that impact security, productivity, and growth. Here's what you're up against.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${challenge.color} border ${challenge.borderColor} rounded-xl transition-all duration-300 hover:border-opacity-50 hover:shadow-lg hover:shadow-slate-900/50`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <Icon size={24} className="text-slate-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-50">{challenge.percentage}</div>
                    <p className="text-sm text-slate-400">{challenge.title}</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">{challenge.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10 border border-cyan-500/20 rounded-xl">
          <p className="text-center text-slate-300 leading-relaxed">
            Without dedicated support, businesses risk security breaches, productivity loss and competitive disadvantage.
            <span className="block mt-4 text-slate-400 italic">
              MicroMac Solutions fills these gaps with enterprise-grade support at SME scale.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
