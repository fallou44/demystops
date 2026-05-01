import React from 'react';
import { motion } from 'motion/react';
import { 
  Layout, BookOpen, Terminal, Award, 
  Settings, Bell, LogOut, ChevronRight,
  Clock, CheckCircle, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const enrolledCourses = [
  { title: "Docker pour la Production", progress: 65, lastAccessed: "Il y a 2 heures", image: "https://picsum.photos/seed/docker/400/225" },
  { title: "Orchestration Kubernetes", progress: 12, lastAccessed: "Hier", image: "https://picsum.photos/seed/kubernetes/400/225" },
];

const recentLabs = [
  { title: "Configuration d'un Cluster K3s", status: "En cours", difficulty: "Intermédiaire" },
  { title: "Sécurisation d'Images Docker", status: "Terminé", difficulty: "Débutant" },
];

export default function DashboardPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-emerald-500">
                JD
              </div>
              <h3 className="font-bold text-lg">Jean Dupont</h3>
              <p className="text-gray-500 text-sm">Ingénieur DevOps</p>
            </div>

            <nav className="space-y-2">
              {[
                { icon: Layout, label: "Tableau de bord", active: true },
                { icon: BookOpen, label: "Mes Cours", active: false },
                { icon: Terminal, label: "Mes Labs", active: false },
                { icon: Award, label: "Certifications", active: false },
                { icon: Bell, label: "Notifications", active: false },
                { icon: Settings, label: "Paramètres", active: false },
              ].map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                    item.active 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-bold text-sm">{item.label}</span>
                </button>
              ))}
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all mt-8">
                <LogOut className="w-5 h-5" />
                <span className="font-bold text-sm">Déconnexion</span>
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-grow space-y-12">
            {/* Welcome & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Cours Enrolés", value: "4", icon: BookOpen, color: "text-blue-500" },
                { label: "Labs Complétés", value: "12", icon: Terminal, color: "text-emerald-500" },
                { label: "Points XP", value: "2,450", icon: Zap, color: "text-purple-500" },
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-white/20 transition-all">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            {/* Enrolled Courses */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Continuer l'apprentissage</h2>
                <Link to="/courses" className="text-emerald-500 text-sm font-bold hover:underline">Voir tout</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {enrolledCourses.map((course, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-emerald-500/30 transition-all">
                    <div className="aspect-video relative">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="font-bold text-xl text-white mb-4">{course.title}</h4>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            className="h-full bg-emerald-500"
                          />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs text-gray-400">{course.progress}% complété</span>
                          <span className="text-xs text-gray-400">{course.lastAccessed}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <button className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all flex items-center justify-center gap-2">
                        Reprendre le cours
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Labs */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Labs récents</h2>
              <div className="space-y-4">
                {recentLabs.map((lab, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${lab.status === 'Terminé' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                        {lab.status === 'Terminé' ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{lab.title}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{lab.difficulty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <span className={`text-xs font-bold uppercase tracking-widest ${lab.status === 'Terminé' ? 'text-emerald-500' : 'text-blue-500'}`}>
                        {lab.status}
                      </span>
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
