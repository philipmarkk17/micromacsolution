import { Suspense, lazy } from 'react';

const Scene = lazy(() => import('./3D/Scene'));

interface Hero3DProps {
  setCurrentPage: (page: 'home' | 'booking') => void;
}

export default function Hero3D({ setCurrentPage }: Hero3DProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas Background */}
      <Suspense fallback={<div className="w-full h-screen bg-gradient-to-b from-slate-900 to-slate-800" />}>
        <Scene />
      </Suspense>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-4 drop-shadow-lg pointer-events-auto">
            MicroMac Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto drop-shadow-lg pointer-events-auto">
            Transforming Your Business with Innovative Technology
          </p>
          <button
            onClick={() => setCurrentPage('booking')}
            className="pointer-events-auto inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 drop-shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-300 animate-bounce">
        <p className="text-sm mb-2">Scroll to explore</p>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
