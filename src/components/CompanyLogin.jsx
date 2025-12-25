import React, { useState } from 'react';
import { Eye, EyeOff, Building2, Lock } from 'lucide-react';

const CompanyLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slanje podataka na backend:", formData);
 
  };

  return (
    <div className="min-h-screen flex bg-white">
      
 
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12 animate-fade-in-up">
        
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#002d72] mb-6 tracking-tight uppercase">
            Prijavi se kao kompanija
          </h1>
          
          <p className="text-slate-500 mb-10 text-sm leading-relaxed">
            Platformi Jobzee mogu pristupiti samo kompanije koje imaju kreiran nalog i korporativni profil.
            Pristupite bazi najboljih talenata.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-slate-50 text-slate-800 border-b-2 border-slate-200 focus:border-[#002d72] pl-10 pr-4 py-4 outline-none transition-all placeholder:text-slate-400"
                placeholder="Korisničko ime kompanije"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-50 text-slate-800 border-b-2 border-slate-200 focus:border-[#002d72] pl-10 pr-12 py-4 outline-none transition-all placeholder:text-slate-400"
                placeholder="Lozinka"
                required
              />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#002d72] transition-colors italic">
                Zaboravili ste svoju lozinku?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-4 px-4 rounded shadow-lg transform active:scale-95 transition-all duration-200 uppercase tracking-widest"
            >
              Prijavi se kao kompanija
            </button>
          </form>

          <div className="mt-12 text-sm text-slate-500 space-y-2 border-t border-slate-100 pt-6">
            <p>Ukoliko želite da postanete deo Jobzee platforme ili imate bilo kakvih pitanja, pišite nam na:</p>
            <a href="mailto:partners@jobzee.rs" className="text-[#002d72] font-bold hover:underline">
              partners@jobzee.rs
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Office vibe" 
          className="absolute inset-0 w-full h-full object-cover rounded-tl-[4rem] rounded-bl-[4rem] shadow-2xl"
        />
        <div className="absolute inset-0 bg-[#002d72] mix-blend-multiply opacity-20 rounded-tl-[4rem] rounded-bl-[4rem]"></div>
      </div>

    </div>
  );
};

export default CompanyLogin;