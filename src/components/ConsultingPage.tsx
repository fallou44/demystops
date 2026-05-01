import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MessageSquare, BarChart, Rocket, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  { icon: Rocket, title: "Migration Cloud", description: "Déplacez en toute transparence votre infrastructure existante vers AWS, GCP ou Azure sans interruption de service." },
  { icon: Shield, title: "Audit DevSecOps", description: "Audit de sécurité complet de vos pipelines CI/CD et de la configuration de votre infrastructure." },
  { icon: BarChart, title: "Optimisation des Coûts", description: "Réduisez votre facture cloud jusqu'à 40 % grâce à une gestion intelligente des ressources." },
  { icon: MessageSquare, title: "Formation d'Équipe", description: "Ateliers personnalisés et mentorat à long terme pour vos équipes d'ingénierie." },
];

export default function ConsultingPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-[40px] overflow-hidden bg-emerald-600/10 border border-white/10 p-12 lg:p-24 mb-24">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/50 to-transparent" />
            <img src="https://picsum.photos/seed/consulting/1200/800" alt="Consulting" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              DevOps de Niveau <span className="text-emerald-500 italic">Production</span>
            </h1>
            <p className="text-gray-400 text-xl mb-10 leading-relaxed">
              Nous aidons les startups à forte croissance et les entreprises à construire une infrastructure évolutive, sécurisée et rentable.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-emerald-500/40 flex items-center gap-3">
              Réserver un appel stratégique
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Pourquoi travailler avec nous ?</h2>
            <div className="space-y-6">
              {[
                "Plus de 10 ans d'expérience dans les systèmes à grande échelle",
                "Experts certifiés AWS, GCP et Kubernetes",
                "Focus sur la sécurité et les coûts dès le premier jour",
                "Approche pragmatique de l'automatisation et des outils"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12">
            <h3 className="text-2xl font-bold mb-8">Prêt à passer à l'échelle ?</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Nom" className="bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50" />
                <input type="email" placeholder="Email" className="bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50" />
              </div>
              <select className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 appearance-none">
                <option>Sélectionner un service</option>
                <option>Migration Cloud</option>
                <option>Audit DevSecOps</option>
                <option>Optimisation des Coûts</option>
              </select>
              <textarea placeholder="Parlez-nous de votre projet" rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50" />
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold transition-all">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
