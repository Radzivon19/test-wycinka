
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <div className="pt-48 text-center text-white text-3xl font-black">Nie znaleziono artykułu.</div>;

  return (
    <div className="pt-40 pb-24 bg-slate-900 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="text-sm font-bold uppercase tracking-widest text-emerald-400/50 mb-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-emerald-400 transition-colors">Baza Wiedzy</Link>
          <span>/</span>
          <span className="text-white">{post.title}</span>
        </nav>

        <header className="mb-12">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block">{post.date}</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">{post.title}</h1>
        </header>

        <div className="rounded-[2.5rem] overflow-hidden border border-white/10 mb-16 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 prose prose-invert prose-emerald max-w-none text-lg leading-relaxed text-slate-400">
          {post.content}
        </div>

        <div className="mt-20 neo-gradient p-12 md:p-16 rounded-[3rem] text-slate-900">
          <h3 className="text-3xl font-black mb-6 uppercase italic">Chcesz profesjonalnej diagnozy?</h3>
          <p className="text-xl font-bold mb-10 opacity-80 max-w-2xl leading-relaxed">Nasi eksperci wykorzystują ten sam stack technologiczny, o którym czytasz, by dbać o Twoje drzewa.</p>
          <Link to="/kontakt" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block">
            ZAMÓW KONSULTACJĘ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
