"use client"

import React from "react"
import { Linkedin } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/70 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="https://i.imgur.com/eU0W58F_d.webp?maxwidth=760&fidelity=grand"
          alt="Veltrics Logo"
          width={50}
          height={50}
          className="rounded-md object-contain ml-5"
        />
        
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
        <a href="#services" className="hover:text-white transition">
          Services
        </a>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#process" className="hover:text-white transition">
          Process
        </a>
        <a href="#faq" className="hover:text-white transition">
          FAQ
        </a>
        <a href="/contact" className="hover:text-white transition">
          Contact
        </a>
      </nav>

      {/* CTA Button */}
      <a href="https://www.linkedin.com/company/veltrics/posts/?feedView=all" target='_blank'><button className="flex items-center gap-2 border border-white/20 bg-white/10 px-5 py-2.5 rounded-full text-sm text-white hover:bg-white/20 transition">
        <Linkedin className="w-4 h-4" />
      </button>
      </a>
    </header>
  )
}
