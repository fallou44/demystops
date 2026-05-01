import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  ArrowRight, 
  Clock, 
  User, 
  Tag,
  ChevronRight
} from 'lucide-react';

const blogPosts = [
  {
    title: "Docker: De Zéro à Héros",
    excerpt: "Comprendre les conteneurs, les images et les volumes avec une approche visuelle et pratique.",
    category: "Conteneurisation",
    author: "Jean Dupont",
    date: "15 Mars 2026",
    readTime: "12 min",
    image: "https://picsum.photos/seed/docker/800/400"
  },
  {
    title: "Terraform Best Practices",
    excerpt: "Comment structurer vos projets Terraform pour la production et éviter les erreurs communes.",
    category: "Infrastructure as Code",
    author: "Jeanne Durand",
    date: "10 Mars 2026",
    readTime: "15 min",
    image: "https://picsum.photos/seed/terraform/800/400"
  },
  {
    title: "Sécuriser son Pipeline CI/CD",
    excerpt: "Intégrer la sécurité dès le début du cycle de développement avec DevSecOps.",
    category: "Sécurité",
    author: "Michel Martin",
    date: "05 Mars 2026",
    readTime: "10 min",
    image: "https://picsum.photos/seed/security/800/400"
  },
  {
    title: "Introduction à l'Observabilité",
    excerpt: "Pourquoi le monitoring ne suffit plus et comment passer à l'observabilité avec Prometheus et Grafana.",
    category: "Observabilité",
    author: "Sophie Bernard",
    date: "01 Mars 2026",
    readTime: "8 min",
    image: "https://picsum.photos/seed/monitoring/800/400"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Le Blog <span className="text-emerald-500">DemystOps</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Analyses techniques, tutoriels approfondis et retours d'expérience sur l'écosystème Cloud Native.
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto custom-scrollbar">
            {['Tout', 'Conteneurs', 'IaC', 'Sécurité', 'Cloud'].map((cat) => (
              <button 
                key={cat}
                className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${idx}`} 
                  className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:gap-3 transition-all"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all">
            1
          </button>
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all">
            2
          </button>
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
