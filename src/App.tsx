import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Layout from './components/Layout';
    import Home from './pages/Home';
    import About from './pages/About';
    import Services from './pages/Services';
    import Gallery from './pages/Gallery';
    import Contact from './pages/Contact';
    import FAQ from './pages/FAQ';
    import ScrollToTop from './components/ScrollToTop';

    function App() {
      return (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Route>
          </Routes>
        </Router>
      );
    }

    export default App;
