import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assuming Navbar is in the components folder
import Home from './pages/Home.tsx';
import AboutFounderMessage from './pages/about/AboutFounderMessage';
import Mission from './pages/Mission.tsx';
import Vision from './pages/Vision.tsx';
import Admission from './pages/Admission.tsx';
import Contact from './pages/Contact.tsx';
import Course1 from './pages/programs/Course1';  // Similarly for other courses
import Course2 from './pages/programs/Course2';
import Course3 from './pages/programs/Course3';
import Course4 from './pages/programs/Course4';
import Course5 from './pages/programs/Course5';
import Course6 from './pages/programs/Course6';
import Course7 from './pages/programs/Course7';
import Course8 from './pages/programs/Course8';
import AboutCeoMessage from './pages/about/AboutCeoMessage.tsx';

const App: React.FC = () => {
  return (
    <Router>
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

        {/* Add routes for the rest of the courses similarly */}
      </Routes>
    </Router>
  );
};

export default App;
