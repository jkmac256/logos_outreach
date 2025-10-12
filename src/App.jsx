import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutMinistry from './pages/AboutMinistry.jsx';
import AboutFounder from './pages/AboutFounder.jsx';
import Programs from './pages/Programs.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div className="bg-brandBlue text-white min-h-screen">
      <Navbar />
      <div className="pt-24"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-ministry" element={<AboutMinistry />} />
          <Route path="/about-founder" element={<AboutFounder />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
