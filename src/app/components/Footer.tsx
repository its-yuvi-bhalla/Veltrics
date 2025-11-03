import React from "react"
import { Mail, Linkedin, Github, Globe } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-24 px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* Background Glow / Wave Effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-light">
          • Available for Collaborations
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug max-w-3xl">
          Let’s build something meaningful together — future-ready, powerful, and beautifully designed.
        </h2>

        <Link href="/contact" className="mt-6 inline-block border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Book a Free Call
          </Link>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-8 text-gray-400">
          <a href="https://www.linkedin.com/company/veltrics/" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:inquiries@veltrics.ca" className="hover:text-white transition"><Mail className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-20 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm border-t border-white/10 pt-8">
        <p className="hover:text-white transition">inquiries@veltrics.ca</p>
        <p className="text-center my-3 md:my-0">
          Designed & Built by{" "}
          <span className="text-white font-medium">Veltrics</span>
        </p>
        <p>© 2025 All rights reserved</p>
      </div>
    </footer>
  )
}
