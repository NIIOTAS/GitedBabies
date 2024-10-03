import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutFounderMessage from './pages/about/AboutFounderMessage';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Course1 from './pages/programs/Course1';
import Course2 from './pages/programs/Course2';
import Course3 from './pages/programs/Course3';
import Course4 from './pages/programs/Course4';
import Course5 from './pages/programs/Course5';
import Course6 from './pages/programs/Course6';
import Course7 from './pages/programs/Course7';
import Course8 from './pages/programs/Course8';
import AboutCeoMessage from './pages/about/AboutCeoMessage';
import './App.css';
import Footer from './components/Footer';
import { LoaderProvider, useLoader } from './context/LoaderContext';
import Loader from './components/Loader/Loader';

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<'gold' | 'sea-blue'>('gold');
  const { isLoading, setIsLoading } = useLoader();
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    // Simulate initial load time (adjust as needed)
    const timer = setTimeout(() => {
      setInitialLoadComplete(true);
      setIsLoading(false);
    }, 6000); // 6 seconds for 2 complete cycles

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'gold' ? 'sea-blue' : 'gold'));
    document.body.setAttribute('data-theme', theme === 'gold' ? 'sea-blue' : 'gold');
  };

  if (!initialLoadComplete) {
    return <Loader />;
  }

  return (
    <div className="App">
      {isLoading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/ceo-message" element={<AboutCeoMessage />} />
        <Route path="/about/founder-message" element={<AboutFounderMessage />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/course1" element={<Course1 />} />
        <Route path="/programs/course2" element={<Course2 />} />
        <Route path="/programs/course3" element={<Course3 />} />
        <Route path="/programs/course4" element={<Course4 />} />
        <Route path="/programs/course5" element={<Course5 />} />
        <Route path="/programs/course6" element={<Course6 />} />
        <Route path="/programs/course7" element={<Course7 />} />
        <Route path="/programs/course8" element={<Course8 />} />
      </Routes>
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LoaderProvider>
        <AppContent />
      </LoaderProvider>
    </Router>
  );
};

export default App;