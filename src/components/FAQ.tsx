import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Quels sont les prérequis pour suivre les cours ?",
    answer: "La plupart de nos cours s'adressent à des ingénieurs ayant une base en administration système Linux et en développement. Cependant, nous avons des parcours 'Zéro à Héros' pour les débutants motivés."
  },
  {
    question: "Les certifications sont-elles reconnues par l'industrie ?",
    answer: "Oui, nos certifications sont basées sur des compétences réelles et des scénarios de production. Elles sont hautement valorisées par les recruteurs dans l'écosystème Cloud Native."
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Absolument. Il n'y a aucun engagement de durée. Vous pouvez annuler votre abonnement Pro en un clic depuis votre tableau de bord."
  },
  {
    question: "Comment fonctionnent les labs interactifs ?",
    answer: "Nos labs utilisent des environnements sandbox réels dans le cloud. Vous accédez à un terminal directement dans votre navigateur pour manipuler de vraies infrastructures sans rien installer sur votre machine."
  },
  {
    question: "Proposez-vous des tarifs pour les étudiants ?",
    answer: "Oui, nous offrons une réduction de 50% sur l'abonnement Pro pour les étudiants. Contactez notre support avec un justificatif pour en bénéficier."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Tout ce que vous devez <span className="text-emerald-500 italic">Savoir</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-emerald-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
