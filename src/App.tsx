import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProgramsPage from './pages/Programs/ProgramsPage';
import AboutPage from './pages/About/AboutPage';
import TrainersPage from './pages/Trainers/TrainersPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll page to top on route change
    window.scrollTo(0, 0);

    // Re-initialize scroll reveal observer for new elements on this page
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Initial check: some elements might already be in viewport on render
    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Main Pages router container */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default App;
