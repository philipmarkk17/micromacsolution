import { ChevronLeft, Clock, User, Mail } from 'lucide-react';
import { useState } from 'react';

interface BookingPageProps {
  setCurrentPage: (page: 'home' | 'booking') => void;
}

export default function BookingPage({ setCurrentPage }: BookingPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    services: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://calendar.app.google/xddBTH91j2jEmdue8', '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-slate-50">Schedule Your</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Consultation
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Let's discuss your IT infrastructure needs and find the perfect support plan for your business.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-50 mb-1">30-Minute Session</h4>
                    <p className="text-sm text-slate-400">Quick assessment of your current IT landscape</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <User size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-50 mb-1">Expert Consultation</h4>
                    <p className="text-sm text-slate-400">Speak with our certified IT specialists</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-50 mb-1">Personalized Proposal</h4>
                    <p className="text-sm text-slate-400">Receive a customized plan within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg">
              <h4 className="font-semibold text-slate-50 mb-3">What to expect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  Current infrastructure assessment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  Gap analysis and recommendations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  Custom support plan discussion
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  No obligation, no sales pressure
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/50 rounded-xl sticky top-32">
            <h3 className="text-2xl font-bold text-slate-50 mb-6">Get Started</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Your company"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees *</label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Services of Interest</label>
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                >
                  <option value="">Select service</option>
                  <option value="helpdesk">Helpdesk Support</option>
                  <option value="security">Network Security</option>
                  <option value="infrastructure">Infrastructure Management</option>
                  <option value="compliance">ISO Compliance</option>
                  <option value="all">All Services</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mt-6"
              >
                Schedule Demo
              </button>

              <p className="text-xs text-slate-500 text-center mt-4">
                After filling this form, you'll be redirected to our calendar to select your preferred time slot.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
