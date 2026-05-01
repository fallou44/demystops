import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Alexandre Rivière",
    role: "Ingénieur DevOps chez Google",
    content: "DEVOPSLAB m'a permis de passer de sysadmin traditionnel à ingénieur Cloud Native en quelques mois. Les labs sont d'une qualité exceptionnelle.",
    avatar: "https://picsum.photos/seed/alex/100/100",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    role: "SRE chez Datadog",
    content: "La formation Kubernetes est la plus complète que j'ai pu suivre. Les scénarios de production réels sont ce qui fait la différence.",
    avatar: "https://picsum.photos/seed/sophie/100/100",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Lead Platform Engineer",
    content: "Une ressource indispensable pour toute mon équipe. Nous utilisons les labs pour tester nos compétences avant chaque mise en production critique.",
    avatar: "https://picsum.photos/seed/thomas/100/100",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ce que disent nos <span className="text-emerald-500 italic">Étudiants</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Rejoignez des milliers d'ingénieurs qui ont transformé leur carrière grâce à notre plateforme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative group hover:bg-white/10 transition-all"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-emerald-500" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-emerald-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-emerald-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
