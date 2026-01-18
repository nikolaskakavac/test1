import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import CompanySlider from './components/CompanySlider'; 
import BlogPage from './components/BlogPage';
import BlogPostDetail from './components/BlogPostDetail'; 
import CompanyLogin from './components/CompanyLogin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroVideo />
            <CompanySlider />
          </>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/kompanije" element={<CompanyLogin />} />
      </Routes>
    </>
  );
}

export default App;