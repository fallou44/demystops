import React from 'react';
import { Check, Zap, Shield, Crown } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    description: "Pour commencer votre voyage DevOps.",
    features: ["Accès aux cours gratuits", "Labs communautaires", "Webinaires publics", "Support par forum"],
    icon: Zap,
    color: "bg-blue-500/10 text-blue-500",
    button: "Commencer gratuitement",
    popular: false
  },
  {
    name: "Pro",
    price: "29€",
    period: "/mois",
    description: "Pour les ingénieurs sérieux qui veulent progresser.",
    features: ["Tous les cours premium", "Labs illimités", "Certifications incluses", "Support prioritaire", "Accès anticipé"],
    icon: Shield,
    color: "bg-emerald-500/10 text-emerald-500",
    button: "S'abonner maintenant",
    popular: true
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    description: "Pour les équipes qui veulent scaler leur excellence.",
    features: ["Parcours personnalisés", "Gestion d'équipe", "Labs privés", "Support dédié 24/7", "Audit de sécurité annuel"],
    icon: Crown,
    color: "bg-purple-500/10 text-purple-500",
    button: "Contacter l'équipe",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Investissez dans votre <span className="text-emerald-500 italic">Carrière</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des plans flexibles adaptés à chaque étape de votre progression. Pas de frais cachés, annulation à tout moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-emerald-500 bg-white/5' : 'border-white/10 bg-white/5'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Plus Populaire
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
