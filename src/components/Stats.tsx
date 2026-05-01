import React from 'react';
import { Users, BookOpen, Terminal, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: "Étudiants Actifs", value: "50,000+", icon: Users, color: "text-blue-500" },
  { label: "Cours Premium", value: "120+", icon: BookOpen, color: "text-emerald-500" },
  { label: "Labs Complétés", value: "1.2M+", icon: Terminal, color: "text-purple-500" },
  { label: "Pays Représentés", value: "85+", icon: Globe, color: "text-orange-500" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
