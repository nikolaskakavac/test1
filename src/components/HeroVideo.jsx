import React from 'react'

const HeroVideo = () => {
  return (
    <div className='relative w-full h-[65vh] bg-black overflow-hidden mt-[-1px]'>
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className='absolute top-0 left-0 w-full h-full object-cover opacity-60'
            src="/hero-video.mp4" 
        />

        <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>

        <div className='relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4'>
            <h1 className='text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-2xl'>
                Tražiš posao ili praksu?
            </h1>
            
            <p className='text-2xl md:text-3xl text-blue-500 font-bold'>
                Jobzee je pravo mesto za vas.
            </p>
            
            <button className='mt-10  text-white px-12 py-4 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl shadow-blue-500/50'>
                Prijavi se
            </button>
        </div>
    </div>
  )
}

export default HeroVideo