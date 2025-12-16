import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import EmployersBrokers from './pages/EmployersBrokers';
import MemberExperience from './pages/MemberExperience';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <Router basename="/">
      <div className="bg-dark-bg min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/employers" element={<EmployersBrokers />} />
            <Route path="/member-experience" element={<MemberExperience />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
