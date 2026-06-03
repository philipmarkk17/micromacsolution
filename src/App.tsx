import { useState } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import Overview from './components/Overview';
import Challenge from './components/Challenge';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'booking'>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {currentPage === 'booking' ? (
        <BookingPage setCurrentPage={setCurrentPage} />
      ) : (
        <>
          <Hero3D setCurrentPage={setCurrentPage} />
          <Overview />
          <Challenge />
          <Services />
          <Pricing setCurrentPage={setCurrentPage} />
          <Contact setCurrentPage={setCurrentPage} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
