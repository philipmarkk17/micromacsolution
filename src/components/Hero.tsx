import { ArrowRight, Shield } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: 'home' | 'booking') => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Shield size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Enterprise IT Support</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-slate-50">Your Virtual</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                IT Department
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Enterprise-grade IT support tailored for growing SME businesses. One vendor. All your needs covered.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setCurrentPage('booking')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group"
            >
              Request Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 hover:text-slate-100 transition-colors duration-200">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
            <div>
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-slate-500">Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">4-Tier</div>
              <div className="text-sm text-slate-500">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">1-Stop</div>
              <div className="text-sm text-slate-500">Solution</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden md:block">
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur hover:border-cyan-500/30 transition-colors duration-300">
              <div className="text-cyan-400 font-semibold mb-2">Network Security</div>
              <div className="text-sm text-slate-400">Firewall configuration & 24/7 threat monitoring</div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur hover:border-blue-500/30 transition-colors duration-300 ml-8">
              <div className="text-blue-400 font-semibold mb-2">Infrastructure Management</div>
              <div className="text-sm text-slate-400">Server health & cloud integration optimized</div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur hover:border-cyan-500/30 transition-colors duration-300">
              <div className="text-cyan-400 font-semibold mb-2">Disaster Recovery</div>
              <div className="text-sm text-slate-400">Backup & recovery planning with tested protocols</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
