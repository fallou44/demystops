import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Globe, Shield, Zap, ArrowRight, Code } from 'lucide-react';

const labs = [
  { title: "Cluster K8s Multi-Région", description: "Déployez un cluster Kubernetes hautement disponible sur 3 régions AWS en utilisant EKS et Global Accelerator.", difficulty: "Difficile", duration: "4h", tools: ["AWS", "EKS", "Terraform"] },
  { title: "Déploiement Blue/Green sans interruption", description: "Implémentez une stratégie de déploiement blue/green à l'aide de Nginx Ingress et ArgoCD sur un cluster Kind local.", difficulty: "Moyen", duration: "2h", tools: ["ArgoCD", "Nginx", "Kind"] },
  { title: "Stack de Monitoring Prometheus", description: "Configurez une stack de monitoring complète avec Prometheus, Grafana et Alertmanager pour une application de microservices.", difficulty: "Moyen", duration: "1.5h", tools: ["Prometheus", "Grafana", "Docker"] },
  { title: "CI/CD sécurisé avec Vault", description: "Intégrez HashiCorp Vault dans votre pipeline GitLab CI pour gérer les secrets en toute sécurité pendant le build.", difficulty: "Difficile", duration: "3h", tools: ["Vault", "GitLab", "Docker"] },
];

export default function LabsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Labs Pratiques</h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Scénarios réels dans des environnements sandbox isolés. Aucune configuration requise, juste votre navigateur et un terminal.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">Accès Instantané</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">Sandbox Sécurisée</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium">Cloud Native</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-black border border-white/10 rounded-2xl p-6 font-mono text-sm shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-2">
                <p className="text-emerald-500">$ demystops lab start k8s-multi-region</p>
                <p className="text-gray-400">Initialisation de l'environnement...</p>
                <p className="text-gray-400">Provisionnement des ressources AWS via Terraform...</p>
                <p className="text-blue-400">[OK] VPC Créé</p>
                <p className="text-blue-400">[OK] Cluster EKS Prêt</p>
                <p className="text-emerald-500">$ kubectl get nodes</p>
                <p className="text-gray-300">NAME             STATUS   ROLES    AGE   VERSION</p>
                <p className="text-gray-300">us-east-1-a      Ready    node     2m    v1.28.0</p>
                <p className="text-gray-300">eu-west-1-b      Ready    node     2m    v1.28.0</p>
                <div className="w-2 h-5 bg-emerald-500 animate-pulse inline-block" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  lab.difficulty === 'Difficile' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {lab.difficulty}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">{lab.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{lab.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {lab.tools.map((tool, j) => (
                  <span key={j} className="text-xs font-medium bg-black/40 border border-white/5 px-2 py-1 rounded-md text-gray-500">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="text-sm text-gray-500">Estimé : <span className="text-white font-medium">{lab.duration}</span></div>
                <button className="flex items-center gap-2 text-emerald-500 font-bold group-hover:gap-3 transition-all">
                  Démarrer le Lab
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
