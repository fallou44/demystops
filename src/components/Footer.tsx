import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Mail, MapPin, Phone, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-500/20">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">DEVOPS<span className="text-emerald-500">LAB</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              La plateforme de référence pour maîtriser l'écosystème Cloud Native et DevOps. Formations de haut niveau pour ingénieurs exigeants.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Plateforme</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-gray-400 hover:text-emerald-500 transition-colors">Cours & Certifications</Link></li>
              <li><Link to="/labs" className="text-gray-400 hover:text-emerald-500 transition-colors">Labs Interactifs</Link></li>
              <li><Link to="/webinars" className="text-gray-400 hover:text-emerald-500 transition-colors">Webinaires Live</Link></li>
              <li><Link to="/consulting" className="text-gray-400 hover:text-emerald-500 transition-colors">Services Consulting</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Parcours d'apprentissage</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support & Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Contactez-nous</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Sénégal, Dakar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>contact@devopslab.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 DEVOPSLAB. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Système opérationnel
            </span>
            <select className="bg-transparent text-gray-500 text-sm border-none focus:ring-0 cursor-pointer hover:text-white transition-colors">
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
