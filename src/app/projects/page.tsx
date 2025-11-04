'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


const projects = [
  { id: 1, src: "/logo.png", href: "https://www.andersonphysiotherapy.ca/" },
]

export default function Projects() {
  const router = useRouter()

  return (
    <section id="projects" className="bg-black text-white py-24 px-6 md:px-16 lg:px-28">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Recent Work</h2>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
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
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <button className="mb-5 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-md text-sm hover:bg-white/20 transition duration-300">
                  View Project <span className="text-base">↗</span>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-14">
        <button
          onClick={() => router.back()}
          className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition"
        >
          ← Back
        </button>
        <Link
          href="/contact"
          className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition"
        >
          Book a Call
        </Link>
      </div>
    </section>
  )
}
