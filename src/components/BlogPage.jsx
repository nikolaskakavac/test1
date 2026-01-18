import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData'; 

const BlogPage = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003366]">Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center items-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;