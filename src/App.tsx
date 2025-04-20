import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Import page components
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import BlogListPage from './pages/BlogList';
import BlogPostPage from './pages/BlogPost';
import AboutPage from './pages/About';
import ComingSoonPage from './pages/ComingSoon';
import Error404Page from './pages/Error404';

function App() {
  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="coming-soon" element={<ComingSoonPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
