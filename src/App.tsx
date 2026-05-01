import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import DocsPage from './components/DocsPage';
// import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import WebinarDocPage from './components/WebinarDocPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<DocsPage />} />
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            {/* <Route path="/#" element={<BlogPage />} /> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/webinar/devops-production" element={<WebinarDocPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
