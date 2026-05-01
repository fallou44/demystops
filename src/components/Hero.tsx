import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Shield, Zap, Play, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Nouveau : Le Lab Kubernetes Avancé est disponible</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05]"
          >
            Maîtrisez le DevOps pour la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic">Production</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            La plateforme ultime pour les ingénieurs qui veulent construire, scaler et sécuriser des infrastructures modernes. Enseigné par des vétérans de l'industrie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/courses" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-emerald-500/40 flex items-center justify-center gap-3 group">
              Commencer à apprendre
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/labs" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
              <Terminal className="w-6 h-6" />
              Essayer un Lab
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex items-center gap-2 text-xl font-bold"><Github className="w-6 h-6" /> GitHub</div>
            <div className="flex items-center gap-2 text-xl font-bold"><Shield className="w-6 h-6" /> SecurityFirst</div>
            <div className="flex items-center gap-2 text-xl font-bold"><Zap className="w-6 h-6" /> FastDeploy</div>
            <div className="flex items-center gap-2 text-xl font-bold"><Play className="w-6 h-6" /> LiveOps</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
