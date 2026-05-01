import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal, ChevronRight, Hash, Copy, Check, ExternalLink,
  Github, Package, GitBranch, Server, Cpu, Layers, Play,
  BookOpen, ArrowRight, ArrowLeft, Menu, X, Zap, Shield,
  RefreshCw, Box
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────

interface Section { id: string; title: string; }
interface NavItem { id: string; title: string; icon: React.ElementType; sections: Section[]; }

// ─── Navigation Data ───────────────────────────────────────────────────────

const navItems: NavItem[] = [
  {
    id: 'intro', title: 'Introduction', icon: BookOpen,
    sections: [
      { id: 'intro-devops', title: 'Qu\'est-ce que le DevOps ?' },
      { id: 'intro-stack', title: 'La Stack du Webinaire' },
      { id: 'intro-flow', title: 'Le Flux CI/CD Complet' },
    ]
  },
  {
    id: 'github', title: 'GitHub', icon: Github,
    sections: [
      { id: 'github-repo', title: 'Structure du Repo' },
      { id: 'github-webhook', title: 'Configurer le Webhook' },
      { id: 'github-token', title: 'Générer un Token' },
    ]
  },
  {
    id: 'docker', title: 'Docker', icon: Box,
    sections: [
      { id: 'docker-dockerfile', title: 'Le Dockerfile' },
      { id: 'docker-build', title: 'Build & Run Local' },
      { id: 'docker-push', title: 'Push sur Docker Hub' },
    ]
  },
  {
    id: 'jenkins', title: 'Jenkins', icon: Zap,
    sections: [
      { id: 'jenkins-install', title: 'Installation' },
      { id: 'jenkins-creds', title: 'Credentials' },
      { id: 'jenkins-pipeline', title: 'Le Jenkinsfile Complet' },
    ]
  },
  {
    id: 'kubernetes', title: 'Kubernetes (k3s)', icon: Server,
    sections: [
      { id: 'k8s-namespace', title: 'Namespace' },
      { id: 'k8s-deployment', title: 'Deployment' },
      { id: 'k8s-service', title: 'Service' },
    ]
  },
  {
    id: 'argocd', title: 'ArgoCD (GitOps)', icon: RefreshCw,
    sections: [
      { id: 'argocd-install', title: 'Installation ArgoCD' },
      { id: 'argocd-app', title: 'Application Manifest' },
      { id: 'argocd-deploy', title: 'Déploiement GitOps' },
    ]
  },
];

// ─── Code Block Component ──────────────────────────────────────────────────

function CodeBlock({ code, filename, lang = 'bash' }: { code: string; filename?: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117]">
      <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          {filename && <span className="text-xs font-mono text-gray-400">{filename}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>
      <pre className="p-5 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

// ─── Section Header ────────────────────────────────────────────────────────

function SectionHeader({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-white mt-14 mb-5 flex items-center gap-3 scroll-mt-24 group">
      <Hash className="w-5 h-5 text-emerald-500 flex-shrink-0" />
      {title}
      <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 hover:text-gray-400">
        <Hash className="w-4 h-4" />
      </a>
    </h2>
  );
}

function SubHeader({ id, title }: { id: string; title: string }) {
  return (
    <h3 id={id} className="text-lg font-bold text-white mt-10 mb-4 flex items-center gap-2 scroll-mt-24">
      <span className="w-1.5 h-5 bg-emerald-500 rounded-full" />
      {title}
    </h3>
  );
}

function InfoBox({ type = 'info', children }: { type?: 'info' | 'warning' | 'tip'; children: React.ReactNode }) {
  const styles = {
    info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: '💡', text: 'text-blue-300' },
    warning: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: '⚠️', text: 'text-yellow-300' },
    tip: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: '✅', text: 'text-emerald-300' },
  }[type];

  return (
    <div className={`my-6 p-5 rounded-2xl ${styles.bg} border ${styles.border}`}>
      <p className={`text-sm leading-relaxed ${styles.text}`}>
        <span className="mr-2">{styles.icon}</span>{children}
      </p>
    </div>
  );
}

// ─── Content Sections ──────────────────────────────────────────────────────

function IntroSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mb-4">
        <Terminal className="w-4 h-4" />
        <span>Démarrer</span>
        <ChevronRight className="w-3 h-3 text-gray-600" />
        <span className="text-gray-400">Introduction au DevOps</span>
      </div>

      <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
        De Zéro à la&nbsp;<span className="text-emerald-500">Production</span>
      </h1>
      <p className="text-lg text-gray-400 leading-relaxed mb-2 font-medium">
        Déployer une application moderne avec une approche DevOps complète
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {['GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'ArgoCD', 'GitOps'].map(t => (
          <span key={t} className="px-3 py-1 text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">{t}</span>
        ))}
      </div>

      {/* Flow Overview */}
      <div id="intro-flow" className="my-8 p-6 bg-white/5 border border-white/10 rounded-3xl">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Flux CI/CD Complet</h3>

        <div className="mb-10 bg-[#0d1117] rounded-2xl p-4 flex justify-center border border-white/10 shadow-lg overflow-hidden hover:border-emerald-500/30 transition-colors">
          <img src="/diagrams/cicd-flow.png" alt="Schéma d'Architecture du Flux CI/CD" className="w-full h-auto rounded-xl max-w-4xl object-contain" />
        </div>

        <div className="space-y-3">
          {[
            { step: '1', label: 'git push sur GitHub', color: 'bg-gray-500' },
            { step: '2', label: 'GitHub Webhook → Jenkins', color: 'bg-blue-500' },
            { step: '3', label: 'Build Docker + Push Docker Hub', color: 'bg-cyan-500' },
            { step: '4', label: 'Mise à jour k8s/deployment.yaml', color: 'bg-purple-500' },
            { step: '5', label: 'ArgoCD détecte + sync auto', color: 'bg-orange-500' },
            { step: '6', label: 'k3s redéploie l\'application', color: 'bg-emerald-500' },
          ].map((f, i, arr) => (
            <div key={f.step} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full ${f.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>
                {f.step}
              </div>
              <span className="text-gray-300 text-sm font-medium">{f.label}</span>
              {i < arr.length - 1 && (
                <div className="ml-3 mt-8 absolute w-px h-3 bg-white/10" style={{ display: 'none' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <SectionHeader id="intro-devops" title="Qu'est-ce que le DevOps ?" />
      <p className="text-gray-400 leading-relaxed">
        Le DevOps est une approche culturelle et technique qui vise à unifier le <strong className="text-white">développement logiciel (Dev)</strong> et l'<strong className="text-white">exploitation des systèmes (Ops)</strong>. L'objectif : livrer plus vite, avec plus de fiabilité.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        {[
          { icon: Zap, label: 'Vitesse', desc: 'Livraisons continues en production' },
          { icon: Shield, label: 'Fiabilité', desc: 'Moins d\'erreurs, rollback rapide' },
          { icon: RefreshCw, label: 'Automatisation', desc: 'Pipeline déclenché au git push' },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
            <Icon className="w-6 h-6 text-emerald-500 mb-3" />
            <h4 className="font-bold text-white mb-1">{label}</h4>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        ))}
      </div>

      <SectionHeader id="intro-stack" title="La Stack du Webinaire" />
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-gray-500 font-semibold">Outil</th>
              <th className="text-left py-3 px-4 text-gray-500 font-semibold">Rôle</th>
            </tr>
          </thead>
          <tbody>
            {[
              { tool: 'GitHub', role: 'Hébergement du code source + déclencheur webhook' },
              { tool: 'Jenkins', role: 'Serveur CI — build, test, push image, mise à jour manifests' },
              { tool: 'Docker', role: 'Conteneurisation de l\'application Vue.js' },
              { tool: 'Docker Hub', role: 'Registry public pour stocker les images Docker' },
              { tool: 'Kubernetes (k3s)', role: 'Orchestrateur — déploiement, scaling, auto-heal' },
              { tool: 'ArgoCD', role: 'Opérateur GitOps — synchronisation automatique Git → k8s' },
            ].map((r) => (
              <tr key={r.tool} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-mono text-emerald-400 font-semibold">{r.tool}</td>
                <td className="py-3 px-4 text-gray-400">{r.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GitHubSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mb-4">
        <Github className="w-4 h-4" />
        <span>GitHub</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">GitHub — Source of Truth</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        GitHub héberge le code source et les manifests Kubernetes. Chaque <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded">git push</code> déclenche automatiquement le pipeline Jenkins via un webhook.
      </p>

      <SectionHeader id="github-repo" title="Structure du Repo" />
      <CodeBlock filename="immo-app/ (structure)" lang="tree" code={`
immo-app/
├── src/                    # Code source Vue.js
├── public/                 # Assets publics
├── k8s/                    # Manifests Kubernetes
│   ├── namespace.yaml
│   ├── deployment.yaml
│   └── service.yaml
├── argocd/                 # Configuration ArgoCD
│   └── application.yaml
├── Dockerfile              # Build de l'image
├── nginx.conf              # Configuration Nginx
├── Jenkinsfile             # Pipeline CI/CD
├── VERSION                 # Fichier de version (ex: 1.0.13)
├── package.json
└── README.md
      `} />

      <InfoBox type="tip">
        Le fichier <strong>VERSION</strong> est lu par Jenkins à chaque build. Après un build réussi, Jenkins l'incrémente automatiquement et pousse la nouvelle version sur GitHub avec le tag <code>[skip ci]</code> pour éviter une boucle infinie.
      </InfoBox>

      <SectionHeader id="github-webhook" title="Configurer le Webhook GitHub" />
      <p className="text-gray-400 mb-4 leading-relaxed">
        Le webhook permet à GitHub de notifier Jenkins automatiquement à chaque <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded">git push</code>.
      </p>
      <div className="space-y-3 mb-6">
        {[
          'Aller dans votre repo GitHub → Settings → Webhooks → Add webhook',
          'Payload URL : http://YOUR_VPS_IP:8080/github-webhook/',
          'Content type : application/json',
          'Events : Just the push event',
          'Active : ✓ → Sauvegarder',
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
            <span className="text-sm text-gray-300">{step}</span>
          </div>
        ))}
      </div>
      <CodeBlock filename="Webhook Payload URL" lang="text" code={`http://YOUR_VPS_IP:8080/github-webhook/`} />

      <SectionHeader id="github-token" title="Générer un Personal Access Token" />
      <p className="text-gray-400 mb-4">Ce token sera utilisé par Jenkins pour pusher sur GitHub.</p>
      <div className="space-y-3 mb-4">
        {[
          'GitHub → Settings → Developer settings → Personal access tokens',
          'Generate new token (classic)',
          'Sélectionner les scopes : repo + write:packages',
          'Générer et copier le token (ne sera plus visible ensuite)',
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
            <span className="text-sm text-gray-300">{step}</span>
          </div>
        ))}
      </div>
      <InfoBox type="warning">
        Conservez votre token dans un gestionnaire de mots de passe. Il ne sera affiché qu'une seule fois sur GitHub.
      </InfoBox>
    </div>
  );
}

function DockerSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mb-4">
        <Box className="w-4 h-4" />
        <span>Docker</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">Docker — Conteneurisation</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Docker permet d'empaqueter l'application Vue.js et son serveur Nginx dans un conteneur portable et reproductible.
      </p>

      <SectionHeader id="docker-dockerfile" title="Le Dockerfile — Multi-stage Build" />
      <p className="text-gray-400 mb-4 leading-relaxed">
        Le build multi-stage est une bonne pratique : la première étape compile le frontend, la seconde crée une image légère avec seulement Nginx et les fichiers compilés.
      </p>
      <CodeBlock filename="Dockerfile" lang="dockerfile" code={`
# ── Étape 1 : Build Node.js ──────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── Étape 2 : Image de production avec Nginx ──────────────────
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
      `} />

      <InfoBox type="tip">
        L'utilisation de <strong>node:22-alpine</strong> au lieu de <strong>node:22</strong> réduit la taille de l'image de build de ~1GB à ~200MB. L'image finale avec Nginx:alpine ne pèse que ~25MB.
      </InfoBox>

      <SectionHeader id="docker-build" title="Build & Run en Local" />
      <CodeBlock filename="Terminal" lang="bash" code={`
# Cloner le projet
git clone https://github.com/SalifAbdoulSow18/immo-app.git
cd immo-app

# Installer les dépendances et lancer en dev
npm install
npm run dev

# Build l'image Docker
docker build -t sasow/immo-app:latest .

# Lancer le conteneur en local
docker run -p 8080:80 sasow/immo-app:latest

# Accéder à : http://localhost:8080
      `} />

      <SectionHeader id="docker-push" title="Push sur Docker Hub" />
      <CodeBlock filename="Terminal" lang="bash" code={`
# Se connecter à Docker Hub
docker login

# Tagger l'image avec une version
docker tag sasow/immo-app:latest sasow/immo-app:1.0.13

# Pusher les deux tags
docker push sasow/immo-app:1.0.13
docker push sasow/immo-app:latest
      `} />
      <InfoBox type="info">
        Jenkins automatise entièrement cette étape. Le tag de version est lu depuis le fichier <code>VERSION</code> du repo.
      </InfoBox>
    </div>
  );
}

function JenkinsSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mb-4">
        <Zap className="w-4 h-4" />
        <span>Jenkins</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">Jenkins — Serveur CI/CD</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Jenkins orchestre tout le pipeline : il reçoit le webhook GitHub, build l'image Docker, la pousse sur Docker Hub, met à jour le manifest Kubernetes et crée un tag GitHub.
      </p>

      <SectionHeader id="jenkins-install" title="Installation des Plugins" />
      <p className="text-gray-400 mb-4">Dans Jenkins : <strong className="text-white">Manage Jenkins → Plugins → Available plugins</strong></p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {['Docker Pipeline', 'GitHub Integration', 'Kubernetes CLI'].map(p => (
          <div key={p} className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl">
            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="text-sm text-white font-mono">{p}</span>
          </div>
        ))}
      </div>

      <SectionHeader id="jenkins-creds" title="Ajouter les Credentials" />
      <p className="text-gray-400 mb-4"><strong className="text-white">Manage Jenkins → Credentials → Add Credentials</strong></p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-gray-500 font-semibold">Credential ID</th>
              <th className="text-left py-3 px-4 text-gray-500 font-semibold">Type</th>
              <th className="text-left py-3 px-4 text-gray-500 font-semibold">Valeur</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'github-credentials', type: 'Username/Password', val: 'Username GitHub + Token' },
              { id: 'github-token', type: 'Secret text', val: 'Votre Personal Access Token' },
              { id: 'docker-hub-password', type: 'Secret text', val: 'Votre mot de passe Docker Hub' },
            ].map(r => (
              <tr key={r.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-mono text-emerald-400 text-xs">{r.id}</td>
                <td className="py-3 px-4 text-gray-400 text-xs">{r.type}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{r.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeader id="jenkins-pipeline" title="Le Jenkinsfile — Pipeline Complet" />
      <p className="text-gray-400 mb-4 leading-relaxed">
        Ce fichier définit toutes les étapes du pipeline. Il est lu automatiquement par Jenkins depuis la racine du repo.
      </p>
      <CodeBlock filename="Jenkinsfile" lang="groovy" code={`
pipeline {
    agent any

    environment {
        GITHUB_USERNAME    = 'SalifAbdoulSow18'
        DOCKER_HUB_USERNAME = 'sasow'
        DOCKER_HUB_REPO    = 'immo-app'
        IMAGE_NAME         = "\${DOCKER_HUB_USERNAME}/\${DOCKER_HUB_REPO}"
        K8S_NAMESPACE      = 'immo-app'
    }

    stages {
        // ── Étape 0 : Ignorer les commits Jenkins ─────────────────
        stage('Check Commit Author') {
            steps {
                script {
                    def commitMessage = sh(
                        script: 'git log -1 --pretty=%B',
                        returnStdout: true
                    ).trim()
                    echo "Message du commit: \${commitMessage}"
                    if (commitMessage.contains('[skip ci]')) {
                        currentBuild.result = 'NOT_BUILT'
                        error("⏭ Build ignoré car le commit contient [skip ci]")
                    }
                    echo " Build déclenché par un vrai commit"
                }
            }
        }

        // ── Étape 1 : Checkout du code ────────────────────────────
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/SalifAbdoulSow18/immo-app.git',
                    credentialsId: 'github-credentials'
            }
        }

        // ── Étape 2 : Lire la version depuis VERSION ──────────────
        stage('Read Version') {
            steps {
                script {
                    def versionFile = readFile('VERSION').trim()
                    env.APP_VERSION = versionFile
                    echo " Version actuelle: \${env.APP_VERSION}"
                }
            }
        }

        // ── Étape 3 : Build de l'image Docker ────────────────────
        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                        docker build -t \${IMAGE_NAME}:\${env.APP_VERSION} .
                        docker tag \${IMAGE_NAME}:\${env.APP_VERSION} \${IMAGE_NAME}:latest
                    """
                }
            }
        }

        // ── Étape 4 : Push sur Docker Hub ────────────────────────
        stage('Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-password', variable: 'DOCKER_PASS')]) {
                    sh """
                        echo "\${DOCKER_PASS}" | docker login -u \${DOCKER_HUB_USERNAME} --password-stdin
                        docker push \${IMAGE_NAME}:\${env.APP_VERSION}
                        docker push \${IMAGE_NAME}:latest
                        docker logout
                    """
                }
            }
        }

        // ── Étape 5 : Mise à jour du manifest Kubernetes ─────────
        stage('Update Git Manifests') {
            steps {
                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
                    sh """
                        sed -i "s|image: \${IMAGE_NAME}:.*|image: \${IMAGE_NAME}:\${env.APP_VERSION}|" k8s/deployment.yaml
                        git config user.email "jenkins@immoapp.com"
                        git config user.name "Jenkins CI"
                        git add k8s/deployment.yaml
                        git commit -m "release: version \${env.APP_VERSION} [skip ci]" || echo "No changes"
                        git push https://\${GITHUB_USERNAME}:\${GITHUB_TOKEN}@github.com/\${GITHUB_USERNAME}/immo-app.git main
                    """
                }
            }
        }

        // ── Étape 6 : Créer un tag GitHub (Release) ─────────────
        stage('Create GitHub Release') {
            steps {
                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
                    sh """
                        git tag -a \${env.APP_VERSION} -m "Release \${env.APP_VERSION}" || true
                        git push https://\${GITHUB_USERNAME}:\${GITHUB_TOKEN}@github.com/\${GITHUB_USERNAME}/immo-app.git \${env.APP_VERSION} || true
                    """
                }
            }
        }
    }

    // ── Post : Incrémenter la version après succès ────────────────
    post {
        success {
            script {
                def currentVersion = env.APP_VERSION
                def parts = currentVersion.split('\\\\.')
                def newPatch = parts[2].toInteger() + 1
                def newVersion = "\${parts[0]}.\${parts[1]}.\${newPatch}"

                writeFile(file: 'VERSION', text: newVersion)

                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN')]) {
                    sh """
                        git config user.email "jenkins@immoapp.com"
                        git config user.name "Jenkins CI"
                        git add VERSION
                        git commit -m "chore: bump version to \${newVersion} [skip ci]"
                        git push https://\${GITHUB_USERNAME}:\${GITHUB_TOKEN}@github.com/\${GITHUB_USERNAME}/immo-app.git main
                    """
                }

                echo " Version déployée : \${currentVersion} | Prochaine : \${newVersion}"
            }
        }
        failure {
            echo " PIPELINE ÉCHOUÉ - Version \${env.APP_VERSION} non incrémentée"
        }
    }
}
      `} />
    </div>
  );
}

function KubernetesSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mb-4">
        <Server className="w-4 h-4" />
        <span>Kubernetes</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">Kubernetes (k3s) — Orchestration</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        k3s est une distribution légère de Kubernetes, parfaite pour les VPS. Les manifests décrivent l'état désiré de l'application ; k3s s'assure que cet état est toujours respecté.
      </p>

      <InfoBox type="info">
        Prérequis VPS : Ubuntu 22.04 LTS, 4GB RAM, 2 vCPUs, accès root.<br />
        Connexion : <code>ssh root@YOUR_VPS_IP</code>
      </InfoBox>

      <CodeBlock filename="Vérifier les services sur le VPS" lang="bash" code={`
systemctl status k3s
systemctl status jenkins
kubectl get nodes
      `} />

      <SectionHeader id="k8s-namespace" title="namespace.yaml — Isoler l'application" />
      <p className="text-gray-400 mb-4">Le namespace isole les ressources de l'application dans un espace dédié.</p>
      <CodeBlock filename="k8s/namespace.yaml" lang="yaml" code={`
apiVersion: v1
kind: Namespace
metadata:
  name: immo-app
      `} />

      <SectionHeader id="k8s-deployment" title="deployment.yaml — Déploiement de l'App" />
      <p className="text-gray-400 mb-4 leading-relaxed">
        Le Deployment définit le nombre de réplicas, l'image à utiliser et les ressources allouées. ArgoCD met à jour ce fichier automatiquement via Jenkins.
      </p>
      <CodeBlock filename="k8s/deployment.yaml" lang="yaml" code={`
apiVersion: apps/v1
kind: Deployment
metadata:
  name: immo-app
  namespace: immo-app
  labels:
    app: immo-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: immo-app
  template:
    metadata:
      labels:
        app: immo-app
    spec:
      containers:
      - name: immo-app
        image: sasow/immo-app:1.0.13
        imagePullPolicy: Always
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "50m"
          limits:
            memory: "128Mi"
            cpu: "100m"
      `} />

      <InfoBox type="tip">
        <strong>replicas: 2</strong> signifie que Kubernetes maintient toujours 2 instances en cours d'exécution. Si l'une tombe, k3s en redémarre une automatiquement (self-healing).
      </InfoBox>

      <SectionHeader id="k8s-service" title="service.yaml — Exposer l'Application" />
      <p className="text-gray-400 mb-4">Le Service expose le Deployment sur un port accessible depuis l'extérieur.</p>
      <CodeBlock filename="k8s/service.yaml" lang="yaml" code={`
apiVersion: v1
kind: Service
metadata:
  name: immo-app-service
  namespace: immo-app
spec:
  selector:
    app: immo-app
  ports:
  - port: 80
    targetPort: 80
    nodePort: 30080
  type: NodePort
      `} />

      <p className="text-gray-400 mb-8">
        L'application sera accessible sur <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded">http://IP_VPS:30080</code>
      </p>

      <SectionHeader id="k8s-deploy-manual" title="Déploiement Manuel" />
      <CodeBlock filename="Terminal (VPS)" lang="bash" code={`
# Appliquer tous les manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Vérifier l'état des pods
kubectl get pods -n immo-app

# Vérifier les services
kubectl get svc -n immo-app

# Mettre à jour l'image manuellement
kubectl set image deployment/immo-app immo-app=sasow/immo-app:latest -n immo-app

# Voir le statut du rollout
kubectl rollout status deployment/immo-app -n immo-app
      `} />

      <SectionHeader id="k8s-debug" title="Dépannage — CrashLoopBackOff" />
      <CodeBlock filename="Terminal (debug)" lang="bash" code={`
# Voir les logs d'un pod
kubectl logs -n immo-app <pod-name>

# Voir les détails et events
kubectl describe pod -n immo-app <pod-name>

# Supprimer un pod (k3s en recrée un automatiquement)
kubectl delete pod -n immo-app <pod-name>

# Lister tous les pods avec leur status
kubectl get pods -n immo-app -o wide
      `} />
    </div>
  );
}

function ArgoCDSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mb-4">
        <RefreshCw className="w-4 h-4" />
        <span>ArgoCD</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">ArgoCD — GitOps</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        ArgoCD surveille en permanence le repo GitHub. Dès qu'il détecte un changement dans le dossier <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded">k8s/</code>, il synchronise automatiquement l'état du cluster Kubernetes.
      </p>

      <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl mb-8">
        <h3 className="font-bold text-white mb-2">🎯 Principe GitOps</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Git est la <strong className="text-white">source unique de vérité</strong>. Jamais de <code>kubectl apply</code> manuel en production. Tout passe par un commit — ArgoCD se charge du reste.
        </p>
      </div>

      <SectionHeader id="argocd-install" title="Récupérer le Mot de Passe ArgoCD" />
      <CodeBlock filename="Terminal" lang="bash" code={`
# Récupérer le mot de passe initial ArgoCD
kubectl -n argocd get secret argocd-initial-admin-secret \\
  -o jsonpath="{.data.password}" | base64 -d

# Récupérer le mot de passe Jenkins
cat /var/lib/jenkins/secrets/initialAdminPassword
      `} />

      <SectionHeader id="argocd-app" title="application.yaml — Le Manifest ArgoCD" />
      <p className="text-gray-400 mb-4 leading-relaxed">
        Ce manifest dit à ArgoCD : "surveille ce repo GitHub, dans le dossier <code>k8s/</code>, et applique les changements sur ce cluster".
      </p>
      <CodeBlock filename="argocd/application.yaml" lang="yaml" code={`
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: immo-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/SalifAbdoulSow18/immo-app.git
    targetRevision: main
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: immo-app
  syncPolicy:
    automated:
      prune: true        # Supprime les ressources obsolètes
      selfHeal: true     # Corrige les dérives manuelles
      allowEmpty: false
    syncOptions:
    - CreateNamespace=true   # Crée le namespace si absent
    - PruneLast=true
  revisionHistoryLimit: 10
      `} />

      <SectionHeader id="argocd-deploy" title="Déployer l'Application ArgoCD" />
      <p className="text-gray-400 mb-4">Une seule commande pour démarrer la synchronisation GitOps :</p>
      <CodeBlock filename="Terminal" lang="bash" code={`
# Déployer l'application ArgoCD depuis GitHub
kubectl apply -f https://raw.githubusercontent.com/SalifAbdoulSow18/immo-app/main/argocd/application.yaml

# Vérifier que l'application est Synced & Healthy
kubectl get applications -n argocd
      `} />

      <InfoBox type="tip">
        Une fois déployé, ArgoCD vérifie le repo toutes les <strong>3 minutes</strong> par défaut. Vous pouvez aussi configurer un webhook pour une synchronisation instantanée.
      </InfoBox>

      <SectionHeader id="argocd-summary" title="Récapitulatif du Flux Complet" />
      <div className="space-y-4 mt-6">
        {[
          { num: '1', title: 'git push', desc: 'Vous poussez votre code sur la branche main', color: 'emerald' },
          { num: '2', title: 'GitHub Webhook → Jenkins', desc: 'Jenkins reçoit la notification et démarre le pipeline', color: 'blue' },
          { num: '3', title: 'Jenkins CI', desc: 'Build l\'image Docker, la pousse sur Docker Hub, met à jour deployment.yaml', color: 'purple' },
          { num: '4', title: 'ArgoCD détecte', desc: 'ArgoCD voit le changement dans k8s/deployment.yaml', color: 'orange' },
          { num: '5', title: 'Sync automatique', desc: 'ArgoCD applique les changements sur k3s (pull de la nouvelle image)', color: 'red' },
          { num: '6', title: '🎉 Production', desc: 'L\'application est disponible sur http://IP:30080', color: 'emerald' },
        ].map(s => (
          <div key={s.num} className={`flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl`}>
            <div className={`w-8 h-8 rounded-full bg-${s.color}-500/20 text-${s.color}-400 text-sm font-black flex items-center justify-center flex-shrink-0`}>
              {s.num}
            </div>
            <div>
              <p className="font-bold text-white text-sm">{s.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Content Map ───────────────────────────────────────────────────────────

const contentMap: Record<string, React.ReactNode> = {
  intro: <IntroSection />,
  github: <GitHubSection />,
  docker: <DockerSection />,
  jenkins: <JenkinsSection />,
  kubernetes: <KubernetesSection />,
  argocd: <ArgoCDSection />,
};

// ─── Main Component ─────────────────────────────────────────────────────────

export default function WebinarDocPage() {
  const [activeSection, setActiveSection] = useState('intro');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentIndex = navItems.findIndex(i => i.id === activeSection);
  const prevItem = navItems[currentIndex - 1];
  const nextItem = navItems[currentIndex + 1];

  const navigate = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16 bg-[#050505] flex">

      {/* ── Mobile Overlay ───────────────────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ──────────────────────────────────────────── */}
      <aside className={`
        fixed top-16 left-0 z-50 h-[calc(100vh-64px)] w-72
        bg-[#080808] border-r border-white/5
        overflow-y-auto transition-transform duration-300
        lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Webinar Badge */}
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Webinaire</p>
              <p className="text-xs text-gray-500">DevOps</p>
            </div>
          </div>
          <a
            href="https://github.com/SalifAbdoulSow18/real-estate-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            repo/immo-app
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Nav */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${isActive
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {item.title}
                {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
              </button>
            );
          })}
        </nav>

        {/* Tech Stack */}
        <div className="p-4 mx-4 mb-4 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3">Stack Webinaire</p>
          <div className="flex flex-wrap gap-1.5">
            {['GitHub', 'Jenkins', 'Docker', 'k3s', 'ArgoCD', 'GitOps'].map(t => (
              <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Mobile Toggle ─────────────────────────────────────── */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-50 lg:hidden w-12 h-12 bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-500/30 flex items-center justify-center"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* ── Main Content ──────────────────────────────────────── */}
      <main className="flex-1 lg:ml-72 min-w-0">
        <div className="max-w-3xl mx-auto px-6 py-14 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {contentMap[activeSection]}

              {/* ── Pagination ───────────────────────────────── */}
              <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between gap-4">
                {prevItem ? (
                  <button
                    onClick={() => navigate(prevItem.id)}
                    className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all text-left"
                  >
                    <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-emerald-500 group-hover:-translate-x-0.5 transition-all" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Précédent</p>
                      <p className="text-sm font-semibold text-white">{prevItem.title}</p>
                    </div>
                  </button>
                ) : <div />}

                {nextItem ? (
                  <button
                    onClick={() => navigate(nextItem.id)}
                    className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all text-right ml-auto"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Suivant</p>
                      <p className="text-sm font-semibold text-white">{nextItem.title}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ) : <div />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
