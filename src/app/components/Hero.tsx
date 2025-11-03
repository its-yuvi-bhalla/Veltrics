import React from 'react'

function Hero() {
  return (
    <section className="hero-bg flex flex-col items-center justify-center text-center px-6 md:px-20 relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 -z-10"
        >
          <source src="/ChyEbZ4.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 -z-10" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-[85vh]">
          <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md mb-6">
            • Crafting Custom Software Solutions
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Software That <br /> Scales With Your Business
          </h1>

          <p className="text-gray-300 max-w-2xl mb-10 text-lg">
            Elevate your business with custom web and mobile solutions built to perform.
            We transform your ideas into powerful digital products.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
              Get Started Now
            </button>
            <button className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition">
              See Projects
            </button>
          </div>
        </div>
      </section>
  )
}

export default Hero