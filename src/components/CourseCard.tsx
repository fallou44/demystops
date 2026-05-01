import React from 'react';
import { BookOpen, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ title, description, instructor, price, rating, duration }: any) {
  const slug = title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col h-full">
      <div className="aspect-video bg-emerald-500/10 flex items-center justify-center relative overflow-hidden">
        <img 
          src={`https://picsum.photos/seed/${slug}/800/450`} 
          alt={title} 
          className="absolute inset-0 object-cover w-full h-full opacity-40 group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <BookOpen className="relative w-12 h-12 text-emerald-500/40 group-hover:scale-110 transition-transform z-10" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md uppercase tracking-wider">DevOps</span>
          <div className="flex items-center gap-1 text-emerald-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold">{rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">{description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
          <span className="text-white font-bold text-lg">{price}€</span>
        </div>
        <Link 
          to={`/courses/${slug}`}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-emerald-600 text-white px-4 py-4 rounded-xl text-sm font-bold transition-all group-hover:shadow-lg group-hover:shadow-emerald-500/20"
        >
          S'inscrire maintenant
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
