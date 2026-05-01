import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, BookOpen, Clock, Star, User, ArrowRight, X } from 'lucide-react';
import CourseCard from './CourseCard';

const courses = [
  { title: "Docker pour la Production", description: "Maîtrisez la conteneurisation du développement au déploiement en production. Apprenez le réseau, les volumes et la sécurité.", instructor: "Jean Dupont", price: 49, rating: 4.9, duration: "12h", level: "Intermédiaire", category: "Containers" },
  { title: "Orchestration Kubernetes", description: "Apprenez à gérer des microservices complexes avec K8s. Déployez, scalez et gérez des applications conteneurisées.", instructor: "Jeanne Durand", price: 99, rating: 4.8, duration: "24h", level: "Avancé", category: "Kubernetes" },
  { title: "Pipelines CI/CD avec GitLab", description: "Automatisez votre processus de livraison avec des pipelines robustes. Implémentez des tests, des scans de sécurité et l'auto-déploiement.", instructor: "Michel Martin", price: 39, rating: 4.7, duration: "8h", level: "Débutant", category: "CI/CD" },
  { title: "Terraform Infrastructure as Code", description: "Provisionnez et gérez n'importe quel cloud, infrastructure ou service avec Terraform. Stratégies multi-cloud.", instructor: "Sarah Wilson", price: 59, rating: 4.9, duration: "15h", level: "Intermédiaire", category: "IaC" },
  { title: "Monitoring Prometheus & Grafana", description: "Plongez dans l'observabilité. Configurez des métriques, des alertes et de superbes tableaux de bord pour votre stack.", instructor: "Alex Chen", price: 45, rating: 4.6, duration: "10h", level: "Intermédiaire", category: "Observabilité" },
  { title: "AWS DevOps Engineer Pro", description: "Le guide ultime des outils AWS DevOps : CodePipeline, CodeBuild, CodeDeploy, et plus encore.", instructor: "David Miller", price: 129, rating: 4.9, duration: "30h", level: "Avancé", category: "Cloud" },
];

const categories = ["Tous", "Containers", "Kubernetes", "CI/CD", "IaC", "Observabilité", "Cloud"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Tous" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Bibliothèque de <span className="text-emerald-500 italic">Savoir</span></h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Explorez nos formations spécialisées conçues pour transformer des ingénieurs en experts DevOps. Apprenez les outils et les méthodologies utilisés par les leaders du marché.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-grow sm:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un cours..."
                className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/50 w-full sm:w-80 transition-all placeholder:text-gray-600"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all border ${
                selectedCategory === category 
                ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Aucun cours trouvé</h3>
            <p className="text-gray-500">Essayez d'ajuster vos filtres ou votre recherche.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Tous"); }}
              className="mt-8 text-emerald-500 hover:text-emerald-400 font-bold underline underline-offset-8"
            >
              Réinitialiser tous les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
