import React from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  { id: 1, src: "/logo.png", href : "https://www.andersonphysiotherapy.ca/" },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6 md:px-16 lg:px-28">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-light inline-block mb-6">
          • Portfolio
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Recent Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Explore a selection of our most impactful web, mobile, and AI projects —
          each built to drive results and reflect our creative precision.
        </p>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <a href={project.href} key={project.id}><div
            className={`relative overflow-hidden rounded-xl group transform transition-all duration-700 ease-out ${
              index % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"
            }`}
          >
            <Image
              src={project.src}
              alt="Project preview"
              width={400}
              height={280}
              className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Overlay Button */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500">
              <span className="mb-6 inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md text-sm">
                View Case Study <span className="text-base">↗</span>
              </span>
            </div>
          </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-14">
        <Link  href='/contact' className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition">
          Book a Call
        </Link>
      </div>
      
    </section>
  )
}

