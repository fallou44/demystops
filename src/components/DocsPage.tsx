import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Search, 
  Book, 
  Terminal, 
  Layers, 
  Cloud, 
  Shield, 
  Cpu,
  ExternalLink,
  Hash
} from 'lucide-react';

const categories = [
  {
    title: 'Fondamentaux',
    icon: Book,
    items: [
      { id: 'intro', title: 'Introduction au DevOps', slug: 'intro-devops' },
      { id: 'culture', title: 'La Culture DevOps', slug: 'culture-devops' },
      { id: 'cicd', title: 'CI/CD Expliqué', slug: 'cicd-explained' },
    ]
  },
  {
    title: 'Conteneurisation',
    icon: Layers,
    items: [
      { id: 'docker-basics', title: 'Docker: Les Bases', slug: 'docker-basics' },
      { id: 'docker-compose', title: 'Docker Compose', slug: 'docker-compose' },
      { id: 'kubernetes', title: 'Kubernetes Architecture', slug: 'k8s-arch' },
    ]
  },
  {
    title: 'Infrastructure as Code',
    icon: Cloud,
    items: [
      { id: 'terraform', title: 'Terraform: Provisioning', slug: 'terraform-basics' },
      { id: 'ansible', title: 'Ansible: Configuration', slug: 'ansible-basics' },
      { id: 'pulumi', title: 'Pulumi: IaC en Python/TS', slug: 'pulumi-intro' },
    ]
  },
  {
    title: 'Observabilité',
    icon: Cpu,
    items: [
      { id: 'prometheus', title: 'Prometheus & Metrics', slug: 'prometheus-metrics' },
      { id: 'grafana', title: 'Grafana Dashboards', slug: 'grafana-viz' },
      { id: 'elk', title: 'ELK Stack Logging', slug: 'elk-logging' },
    ]
  }
];

export default function DocsPage() {
  const [activeItem, setActiveItem] = useState('intro');

  return (
    <div className="min-h-screen pt-16 bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-72 border-r border-white/5 bg-black/40 backdrop-blur-xl fixed h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
        <div className="p-6">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Rechercher dans les docs..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>

          <nav className="space-y-8">
            {categories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-2 px-2 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <category.icon className="w-3.5 h-3.5" />
                  {category.title}
                </div>
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group ${
                        activeItem === item.id 
                          ? 'bg-emerald-500/10 text-emerald-500 font-medium' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeItem === item.id ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 min-w-0">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium mb-4">
              <Terminal className="w-4 h-4" />
              <span>Démarrer</span>
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-gray-400">Introduction au DevOps</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Introduction au DevOps
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Le DevOps n'est pas seulement un métier ou un ensemble d'outils, c'est une culture qui vise à unifier le développement logiciel (Dev) et l'exploitation des systèmes (Ops).
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Hash className="w-5 h-5 text-emerald-500" />
                  Pourquoi le DevOps ?
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Traditionnellement, les équipes de développement et d'exploitation travaillaient en silos. Les développeurs voulaient pousser des changements rapidement, tandis que les Ops voulaient maintenir la stabilité du système. Cette friction entraînait des délais et des erreurs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h3 className="text-white font-bold mb-2">Vitesse</h3>
                    <p className="text-sm text-gray-500">Livrer des fonctionnalités plus rapidement sur le marché.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h3 className="text-white font-bold mb-2">Fiabilité</h3>
                    <p className="text-sm text-gray-500">Réduire les échecs de déploiement et le temps de récupération.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Hash className="w-5 h-5 text-emerald-500" />
                  Le Pipeline CI/CD
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  L'automatisation est au cœur du DevOps. Le pipeline CI/CD (Continuous Integration / Continuous Deployment) permet de tester et déployer automatiquement chaque changement de code.
                </p>
                <div className="bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-xs font-mono text-gray-400">pipeline.yaml</span>
                    <button className="text-[10px] uppercase font-bold text-emerald-500 hover:text-emerald-400 transition-colors">Copier</button>
                  </div>
                  <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
                    {`stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - npm install
    - npm run build

test_job:
  stage: test
  script:
    - npm test`}
                  </pre>
                </div>
              </section>

              <section className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Note Pédagogique</h3>
                    <p className="text-gray-400 leading-relaxed">
                      N'oubliez pas que l'outil ne résout pas le problème de culture. Avant de mettre en place Jenkins ou GitLab CI, assurez-vous que vos équipes partagent les mêmes objectifs de qualité et de responsabilité.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Pagination */}
            <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between">
              <button className="group flex flex-col items-start gap-1">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Précédent</span>
                <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors font-medium">Installation</span>
              </button>
              <button className="group flex flex-col items-end gap-1">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Suivant</span>
                <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors font-medium">La Culture DevOps</span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Table of Contents */}
      <aside className="hidden xl:block w-64 p-12">
        <div className="sticky top-24">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Sur cette page</h4>
          <nav className="space-y-3">
            <a href="#" className="block text-sm text-emerald-500 font-medium">Pourquoi le DevOps ?</a>
            <a href="#" className="block text-sm text-gray-500 hover:text-white transition-colors">Le Pipeline CI/CD</a>
            <a href="#" className="block text-sm text-gray-500 hover:text-white transition-colors">Note Pédagogique</a>
          </nav>
          
          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-xs text-gray-500 mb-4">Besoin d'aide ?</p>
            <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-emerald-500 transition-colors">
              <ExternalLink className="w-4 h-4" />
              Rejoindre le Discord
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

