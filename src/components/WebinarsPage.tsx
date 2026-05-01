import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Video, Calendar, Clock, User, ArrowRight, Play } from 'lucide-react';

const webinars = [
  { 
    title: "Scaler des Microservices avec Istio", 
    date: "25 Mars 2026", 
    time: "18:00 UTC", 
    instructor: "Dr. Elena Vance", 
    description: "Apprenez à implémenter un service mesh pour gérer le trafic, la sécurité et l'observabilité.", 
    image: "https://picsum.photos/seed/istio/800/450",
    link: null
  },
  { 
    title: "De Zéro à la Production : DevOps Complet", 
    date: "2 Avril 2026", 
    time: "17:00 UTC", 
    instructor: "Salif Abdoul Sow", 
    description: "Déploiement complet avec GitHub, Jenkins, Docker, Kubernetes et ArgoCD.", 
    image: "https://picsum.photos/seed/argocd/800/450",
    link: "/webinar/devops-production"
  },
  { 
    title: "Sécurité Zero Trust dans le Cloud Native", 
    date: "15 Avril 2026", 
    time: "19:00 UTC", 
    instructor: "Sarah Jenkins", 
    description: "Sécurisez votre infrastructure dès la base dans un monde cloud-native.", 
    image: "https://picsum.photos/seed/security/800/450",
    link: null
  },
];

export default function WebinarsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Webinaires Live</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Rejoignez nos sessions hebdomadaires en direct avec des experts de l'industrie. Études approfondies, Q&A et résolution de problèmes réels.
          </p>
        </div>

        <div className="space-y-12">
          {webinars.map((webinar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex flex-col lg:flex-row gap-8 items-center bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-6 lg:p-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 aspect-video relative group overflow-hidden rounded-2xl lg:rounded-none">
                <img src={webinar.image} alt={webinar.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-70" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">À venir</span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {webinar.time}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{webinar.title}</h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{webinar.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20" />
                    <span className="font-medium text-gray-300">{webinar.instructor}</span>
                  </div>
                  {webinar.link ? (
                    <Link to={webinar.link} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/20">
                      Voir la documentation
                    </Link>
                  ) : (
                    <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all">
                      S'inscrire
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
