import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTransitionWrapper from './pages/PageTransitionWrapper';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

import Home from './Home';
import About from './components/AboutUs';
import Contact from './components/Contact';
import Rooms from './components/Room';

function App() {
  return (
    <Router>
      <Preloader />

      <PageTransitionWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransitionWrapper>

      <Footer />
      <SearchModal />
    </Router>
  );
}

export default App;
