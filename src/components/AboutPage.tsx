import React from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Book,
  FileText,
  Users,
  Globe,
  Shield,
  Cpu,
  Linkedin,
  Mail,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Terminal className="w-3.5 h-3.5" />
              Notre Mission
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              DÉMYSTIFIER LE <span className="text-emerald-500 italic">DEVOPS</span> POUR TOUS.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              DemystOps est né d'une conviction simple : l'infrastructure moderne ne devrait pas être une boîte noire. Notre mission est de rendre le Cloud Native, le DevOps et l'IaC accessibles à travers une approche pédagogique, structurée et technique.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Nous croyons en l'apprentissage par la pratique et en la puissance de la documentation bien faite. Chaque article, chaque guide est conçu pour vous aider à comprendre non seulement le "comment", mais surtout le "pourquoi".
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-emerald-500/5 border border-emerald-500/10 rounded-[3rem] p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]" />
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { icon: Globe, label: "Communauté" },
                { icon: Shield, label: "Sécurité" },
                { icon: Cpu, label: "Performance" },
                { icon: Book, label: "Pédagogie" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-emerald-500/30 transition-all group">
                  <item.icon className="w-12 h-12 text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mb-4">Direction</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Les Co-Fondateurs de DemystOps</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Serigne Fallou Seck",
                role: "DevOps Engineer & SRE | NoOps Automation Expert",
                bio: "Ingénieur DevOps spécialisé en automatisation des déploiements et en orchestration d’environnements conteneurisés (cloud & on-premise). J’interviens en support applicatif, observabilité et gestion des incidents pour garantir des systèmes fiables et hautement disponibles.",
                avatar: "/team/serigne-fallou-seck.jpg",
                linkedin: "https://www.linkedin.com/in/fadildev/"
              },
              {
                name: "Salif Abdoul SOW",
                role: "DevOps Engineer & SRE | CI/CD & Prod Support",
                bio: "Ingénieur DevOps spécialisé en automatisation CI/CD,  orchestration  Kubernetes, avec une expérience en support applicatif N2/N3 et en gestion d’environnements de production. Compétent en monitoring, résolution d’incidents et optimisation de la performance pour garantir la disponibilité des services.",
                avatar: "/team/salif-abdoul-sow.jpg",
                linkedin: "https://www.linkedin.com/in/salif-abdoul-sow-0bb916192/"
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center hover:border-emerald-500/30 transition-all group flex flex-col h-full">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition-colors" />
                  <img src={member.avatar} alt={member.name} className="relative z-10 w-32 h-32 rounded-full mx-auto object-cover border-2 border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-emerald-500 text-[13px] uppercase tracking-wider font-bold mb-6">{member.role}</p>
                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">{member.bio}</p>
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all group/link">
                    <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-emerald-600 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Une Question ? Un Projet ?</h2>
              <p className="text-emerald-100 text-lg mb-12 leading-relaxed">
                N'hésitez pas à nous contacter pour toute question, suggestion ou demande de collaboration. Nous sommes toujours ravis d'échanger avec la communauté.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-medium">contact@demystops.com</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Sénégal, Dakar</span>
                </div>
              </div>
            </div>
            <div className="bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white mb-2 uppercase tracking-widest">Nom</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white mb-2 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-white transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-white mb-2 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-white transition-all"></textarea>
                </div>
                <button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/10">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
