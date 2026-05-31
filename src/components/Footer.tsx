import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 font-bold text-lg mb-4">
              <img src="/Company_Logo_Design.png" alt="MicroMac Solutions" className="h-10 w-auto" />
              <span className="text-slate-50">MicroMac</span>
            </div>
            <p className="text-sm text-slate-500">
              Enterprise-grade IT support for SMEs in Klang Valley.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Support Model
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-semibold text-slate-50 mb-4">Technology</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-slate-400">Synology Solutions</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Network Security</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Cloud Integration</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Disaster Recovery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 flex items-center gap-2">
              Made with <Heart size={16} className="text-cyan-400" /> by the MicroMac team
            </p>
            <p className="text-sm text-slate-500">
              MicroMac Solutions • Klang Valley, Malaysia • {currentYear}
            </p>
            <p className="text-sm text-slate-500">Enterprise IT for Every SME</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
