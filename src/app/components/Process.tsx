import React from "react"
import Image from "next/image"
import { Target, Code2, Rocket, Zap } from "lucide-react"
import Link from "next/link"

export default function Process() {
  return (
    <section
      id="process"
      className="relative text-white py-32 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      {/* === Background Image === */}
      <Image
        src="/write.jpg"
        alt="Process background"
        fill
        className="object-cover object-center opacity-20 absolute inset-0 z-1"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black -z-10" />

      {/* === Content Wrapper === */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* LEFT — INTRO */}
        <div className="md:w-1/2 w-full space-y-8">
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-light inline-block">
            • How We Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            A Process <br className="hidden md:block" /> Built for Results
          </h2>

          <p className="text-gray-300 text-base leading-relaxed max-w-md">
            We combine strategy, design, and technology to turn ideas into
            powerful digital experiences. Every step is transparent, data-driven,
            and focused on measurable growth.
          </p>

    

          <div className="flex items-center gap-3 pt-4 text-gray-400">
            <Zap className="w-5 h-5 text-yellow-400" />
            <p className="text-sm">
              Agile, transparent, and results-driven — we work with you, not just for you.
            </p>
          </div>
        </div>

        {/* RIGHT — STEPS */}
        <div className="md:w-1/2 w-full space-y-6">
          {[
            {
              id: "01",
              title: "Discovery & Strategy",
              desc: "We start by deeply understanding your goals, audience, and market. This insight guides every design and technical decision we make.",
              icon: Target,
            },
            {
              id: "02",
              title: "Design & Development",
              desc: "We craft beautiful, functional experiences using modern technologies — React, Next.js, Node, and AI — built to perform and scale.",
              icon: Code2,
            },
            {
              id: "03",
              title: "Launch, Support & Growth",
              desc: "After launch, we stay with you — optimizing performance, integrating analytics, and evolving your product as your business grows.",
              icon: Rocket,
            },
          ].map(({ id, title, desc, icon: Icon }) => (
            <div
              key={id}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/[0.07] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <span className="text-gray-500 text-sm font-semibold">{id}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
