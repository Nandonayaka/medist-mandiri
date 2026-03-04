import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>

          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Packages />
              <Contact />
            </main>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
