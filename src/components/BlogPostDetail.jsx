import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-20 text-2xl">Post nije pronađen.</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen py-12 px-4">
      <div className="max-w-[900px] mx-auto">
        
        <Link to="/blog" className="text-blue-600 font-semibold hover:underline mb-8 inline-block">
          ← Nazad na sve blogove
        </Link>

        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500">
            Napisano <span className="text-gray-900 font-semibold">{post.author}</span> • {post.date}
          </p>
        </div>

        <div className="w-full h-[400px] mb-10 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg prose-blue mx-auto text-gray-700">
          <p className="lead text-xl text-gray-500 mb-6 font-light">{post.excerpt}</p>
          <p>{post.fullContent}</p>
        </div>

      </div>
    </div>
  );
};

export default BlogPostDetail;