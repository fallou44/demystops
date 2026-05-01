import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Book, FileText, Info, Menu, X, Search, Github, Video } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/', icon: Terminal },
    { name: 'Docs', path: '/docs', icon: Book },
    // { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'À Propos', path: '/about', icon: Info },
    { name: 'Webinaire', path: '/webinar/devops-production', icon: Video },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Demyst<span className="text-emerald-500">Ops</span></span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${location.pathname === link.path
                    ? 'text-emerald-500 bg-emerald-500/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:border-emerald-500/30 transition-all cursor-pointer group">
              <Search className="w-4 h-4 group-hover:text-emerald-500 transition-colors" />
              <span className="text-xs font-medium">Rechercher...</span>
              <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium bg-white/10 rounded border border-white/10">
                ⌘K
              </kbd>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 p-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
