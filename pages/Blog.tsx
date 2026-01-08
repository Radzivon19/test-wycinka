
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-black uppercase tracking-widest mb-4">Baza wiedzy</h2>
          <h1 className="text-5xl font-black text-white">Insights & News</h1>
        </div>
        <div className="space-y-12">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all group">
              <Link to={`/blog/${post.slug}`}>
                <div className="overflow-hidden h-80">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Link>
              <div className="p-10">
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">{post.date}</span>
                <h2 className="text-3xl font-black text-white mt-4 mb-6 hover:text-emerald-400 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-block neo-gradient text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-lg transition-all">
                  Czytaj więcej
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
