import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Book, 
  FileText, 
  Search, 
  ChevronRight, 
  ArrowRight, 
  Layers, 
  Cloud, 
  Shield, 
  Cpu,
  Github,
  Twitter,
  Linkedin,
  Video,
  Play,
  GitBranch
} from 'lucide-react';

const featuredPosts = [
  {
    title: "Docker: De Zéro à Héros",
    excerpt: "Comprendre les conteneurs, les images et les volumes avec une approche visuelle et pratique.",
    category: "Conteneurisation",
    date: "15 Mars 2026",
    readTime: "12 min",
    icon: Layers,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Terraform Best Practices",
    excerpt: "Comment structurer vos projets Terraform pour la production et éviter les erreurs communes.",
    category: "Infrastructure as Code",
    date: "10 Mars 2026",
    readTime: "15 min",
    icon: Cloud,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    title: "Sécuriser son Pipeline CI/CD",
    excerpt: "Intégrer la sécurité dès le début du cycle de développement avec DevSecOps.",
    category: "Sécurité",
    date: "05 Mars 2026",
    readTime: "10 min",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section - Editorial Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Terminal className="w-3.5 h-3.5" />
              Démystifier le DevOps
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              APPRENDRE LE <span className="text-emerald-500 italic">DEVOPS</span> PAR LA PRATIQUE.
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Un blog pédagogique structuré pour maîtriser l'infrastructure moderne, du conteneur au cloud hybride.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/docs" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-emerald-500/20 group">
                Commencer à lire
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl text-lg font-bold transition-all">
                <Search className="w-5 h-5" />
                Rechercher un sujet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Webinar Banner ───────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-[#050505] to-blue-950/40"
          >
            {/* Glow blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 lg:p-12">
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Webinaire Disponible
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                  De Zéro à la{' '}
                  <span className="text-emerald-500">Production</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  Déployer une application moderne avec une approche DevOps complète — GitHub, Jenkins, Docker, Kubernetes et ArgoCD.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'ArgoCD', 'GitOps'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold bg-white/5 border border-white/10 text-gray-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <Link
                  to="/webinar/devops-production"
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-xl shadow-emerald-500/20 group"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Accéder au contenu
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Stats */}
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full lg:w-auto">
                {[
                  { icon: GitBranch, label: 'Modules', value: '6' },
                  { icon: Video, label: 'Durée estimée', value: '~3h' },
                  { icon: Layers, label: 'Fichiers de code', value: '8+' },
                  { icon: Cloud, label: 'Niveau', value: 'Complet' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="p-5 bg-white/5 border border-white/10 rounded-2xl text-center">
                    <Icon className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                    <p className="text-2xl font-black text-white">{value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid - Technical Dashboard Style */}
      <section className="py-20 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {[
              { title: "Conteneurs", desc: "Docker, K8s, Containerd", icon: Layers, color: "text-blue-500" },
              { title: "Cloud Native", desc: "AWS, GCP, Azure", icon: Cloud, color: "text-emerald-500" },
              { title: "Automatisation", desc: "CI/CD, Ansible, Terraform", icon: Cpu, color: "text-purple-500" },
              { title: "Sécurité", desc: "DevSecOps, Vault, Falco", icon: Shield, color: "text-red-500" }
            ].map((cat, idx) => (
              <div key={idx} className="bg-[#050505] p-8 hover:bg-white/5 transition-colors group cursor-pointer">
                <cat.icon className={`w-8 h-8 ${cat.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Clean Utility Style */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 mb-4">Derniers Articles</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">Explorations Techniques</h3>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
              Voir tout le blog
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all flex flex-col h-full"
              >
                <div className={`w-12 h-12 ${post.bgColor} ${post.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <post.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">{post.category}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-medium">{post.readTime} de lecture</span>
                  <button className="text-white group-hover:text-emerald-500 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Restez à la pointe du DevOps.
              </h2>
              <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                Recevez chaque semaine une analyse technique, un tutoriel pratique et les dernières nouvelles de l'écosystème Cloud Native.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white hover:text-emerald-200 transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-white hover:text-emerald-200 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-white hover:text-emerald-200 transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-emerald-200 focus:outline-none focus:border-white transition-all"
                  />
                </div>
                <button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-black/10">
                  S'abonner à la newsletter
                </button>
                <p className="text-center text-xs text-emerald-200 font-medium">
                  Pas de spam. Désabonnement en un clic.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight text-white">Demyst<span className="text-emerald-500">Ops</span></span>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            © 2026 DemystOps. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Confidentialité</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
