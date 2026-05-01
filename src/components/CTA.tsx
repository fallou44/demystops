import React from 'react';
import { ArrowRight, Zap, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-[200px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden backdrop-blur-3xl">
          <div className="absolute top-0 left-0 p-12 opacity-5">
            <Zap className="w-64 h-64 text-emerald-500" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Prêt à transformer votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic">Carrière DevOps ?</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Rejoignez plus de 50,000 ingénieurs et commencez votre voyage vers l'excellence Cloud Native dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/login" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-emerald-500/40 flex items-center justify-center gap-3 group">
                Commencer maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-12 py-6 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3">
                <Play className="w-6 h-6" />
                Voir les cours
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Accès Immédiat
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Certifications Incluses
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Support Prioritaire
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
