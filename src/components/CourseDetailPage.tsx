import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BookOpen, Clock, Star, User, CheckCircle, 
  Play, Shield, Zap, ArrowLeft, Download, 
  MessageSquare, Share2, Award
} from 'lucide-react';

const coursesData: Record<string, any> = {
  "docker-pour-la-production": {
    title: "Docker pour la Production",
    description: "Maîtrisez la conteneurisation du développement au déploiement en production. Apprenez le réseau, les volumes et la sécurité.",
    instructor: "Jean Dupont",
    price: 49,
    rating: 4.9,
    duration: "12h",
    level: "Intermédiaire",
    category: "Containers",
    lessons: 45,
    students: 1250,
    lastUpdated: "Janvier 2026",
    curriculum: [
      { title: "Introduction à Docker", duration: "45min", lessons: 5 },
      { title: "Images et Dockerfiles", duration: "2h 15min", lessons: 8 },
      { title: "Réseaux et Volumes", duration: "3h", lessons: 12 },
      { title: "Docker Compose pour le Dev", duration: "2h", lessons: 10 },
      { title: "Sécurité et Optimisation", duration: "4h", lessons: 10 },
    ],
    features: [
      "Accès à vie au contenu",
      "Projets pratiques réels",
      "Certification de fin de cours",
      "Support communautaire 24/7",
      "Mises à jour gratuites"
    ]
  },
  "orchestration-kubernetes": {
    title: "Orchestration Kubernetes",
    description: "Apprenez à gérer des microservices complexes avec K8s. Déployez, scalez et gérez des applications conteneurisées.",
    instructor: "Jeanne Durand",
    price: 99,
    rating: 4.8,
    duration: "24h",
    level: "Avancé",
    category: "Kubernetes",
    lessons: 68,
    students: 850,
    lastUpdated: "Février 2026",
    curriculum: [
      { title: "Architecture de Kubernetes", duration: "2h", lessons: 6 },
      { title: "Pods, Deployments et Services", duration: "5h", lessons: 15 },
      { title: "ConfigMaps et Secrets", duration: "3h", lessons: 10 },
      { title: "Ingress et Load Balancing", duration: "4h", lessons: 12 },
      { title: "Helm et Gestion de Packages", duration: "4h", lessons: 10 },
      { title: "Monitoring et Logging", duration: "6h", lessons: 15 },
    ],
    features: [
      "Labs Kubernetes interactifs",
      "Préparation à la CKA",
      "Études de cas réelles",
      "Accès au cluster de test",
      "Badge certifiant"
    ]
  }
};

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = coursesData[slug || ""] || coursesData["docker-pour-la-production"];

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src={`https://picsum.photos/seed/${slug}/1920/1080?blur=10`} 
            alt={course.title} 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux cours
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                  {course.category}
                </span>
                <span className="text-gray-500 text-sm">Dernière mise à jour : {course.lastUpdated}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">{course.title}</h1>
              <p className="text-gray-400 text-xl mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-8 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-emerald-500 fill-current" />
                  <span className="font-bold text-lg">{course.rating}</span>
                  <span className="text-gray-500">(128 avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-300">{course.students} étudiants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-300">{course.duration} de contenu</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Instructeur</p>
                  <p className="font-bold text-white">{course.instructor}</p>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl shadow-2xl">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative group cursor-pointer">
                  <img src={`https://picsum.photos/seed/${slug}/800/450`} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                    Aperçu gratuit
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-white">{course.price}€</span>
                  <span className="text-gray-500 line-through">149€</span>
                  <span className="text-emerald-500 font-bold ml-auto">67% de réduction</span>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 mb-4">
                  S'inscrire maintenant
                </button>
                <p className="text-center text-gray-500 text-sm mb-8">Garantie satisfait ou remboursé de 30 jours</p>

                <div className="space-y-4">
                  <p className="font-bold text-white text-sm uppercase tracking-widest mb-4">Ce cours inclut :</p>
                  {course.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/5">
                  <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-[10px] uppercase font-bold">Partager</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                    <span className="text-[10px] uppercase font-bold">Ressources</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-[10px] uppercase font-bold">Forum</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Learning Objectives */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">Ce que vous allez apprendre</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Comprendre les concepts fondamentaux de l'outil",
                  "Mettre en place des architectures scalables",
                  "Sécuriser vos déploiements en production",
                  "Automatiser les tâches répétitives",
                  "Résoudre des problèmes complexes en temps réel",
                  "Appliquer les meilleures pratiques de l'industrie"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Programme du cours</h2>
                <p className="text-gray-500">{course.lessons} leçons • {course.duration}</p>
              </div>
              <div className="space-y-4">
                {course.curriculum.map((module: any, i: number) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{module.title}</h4>
                          <p className="text-xs text-gray-500">{module.lessons} leçons</p>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">{module.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">Prérequis</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-400">
                <li>Connaissances de base en ligne de commande Linux</li>
                <li>Compréhension des concepts fondamentaux du réseau</li>
                <li>Un ordinateur avec au moins 8Go de RAM</li>
                <li>Une motivation à toute épreuve pour apprendre le DevOps</li>
              </ul>
            </section>
          </div>

          <div className="space-y-12">
            {/* Certification Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-blue-600/20 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Award className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Certification incluse</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Obtenez un certificat de réussite reconnu par l'industrie à la fin de ce parcours.
              </p>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-full h-full bg-emerald-500" />
              </div>
            </div>

            {/* Support Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Besoin d'aide ?</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Nos mentors sont disponibles 24/7 pour répondre à vos questions sur le forum dédié.
              </p>
              <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                Accéder au forum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
