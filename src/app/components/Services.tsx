import React from "react"
import {
  Layers,
  Palette,
  Package,
  MonitorSmartphone,
  BrainCircuit,
  Server
} from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-28 px-6 md:px-16 lg:px-28 flex flex-col gap-20"
    >
      {/* === HEADER === */}
      <div className="max-w-3xl space-y-6">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-light inline-block tracking-wide">
          • Our Services
        </span>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          What We Do Best
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          We build custom digital solutions that combine creative design with
          cutting-edge technology — helping businesses innovate, grow, and stand
          out online.
        </p>
      </div>

      {/* === TAGS === */}
      <div className="flex flex-wrap gap-3">
        {[
          "Web Development",
          "UI/UX Design",
          "App Development",
          "Automation",
          "AI Solutions",
          "Integrations",
          "Cloud Infrastructure & DevOps"
        ].map((tag) => (
          <span
            key={tag}
            className="bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm hover:bg-white/20 hover:scale-105 transition-transform"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* === CTA BUTTONS === */}
      <div className="flex flex-wrap gap-4">
        <Link  href='/contact'className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition">
          Book a Free Call
        </Link>
        <Link href='#projects' className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition">
          See Projects
        </Link>
      </div>

      {/* === SERVICE GRID === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-6">
        {[
          {
            icon: Layers,
            title: "Web Development",
            desc: "We create scalable, high-performance websites and platforms built for speed, conversion, and long-term growth.",
          },
          {
            icon: Palette,
            title: "UI/UX Design",
            desc: "User-centric design that blends creativity with clarity — ensuring every interaction feels intuitive and delightful.",
          },
          {
            icon: MonitorSmartphone,
            title: "App Development",
            desc: "Cross-platform mobile apps designed for performance and seamless user experience across all devices.",
          },
          {
            icon: Package,
            title: "Automation & Integrations",
            desc: "We connect your tools and automate workflows to streamline operations and increase productivity.",
          },
          {
            icon: BrainCircuit,
            title: "AI Solutions",
            desc: "We integrate intelligent systems like chatbots, predictive analytics, and custom automation to enhance business efficiency.",
          },
          {
            icon: Server,
            title: "Cloud Infrastructure & DevOps",
            desc: "We set up secure, scalable cloud environments and CI/CD pipelines to ensure smooth deployment, monitoring, and high availability across platforms.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className={`bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-lg hover:bg-white/[0.07] hover:scale-[1.02] transition-transform duration-300 }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* === FOOTER TAGS === */}
      <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-300">
        {[
          "Landing Pages",
          "API Integration",
          "Performance Tuning",
          "Machine Learning",
          "Chatbots",
          "Predictive Models",
          "Brand Visibility",
          "Optimization",
        ].map((tag) => (
          <span
            key={tag}
            className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/10 transition text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
