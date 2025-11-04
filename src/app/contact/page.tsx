"use client"

import React, { useState } from "react"
import { Mail, MapPin, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      alert("Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    } else {
      alert("Failed to send message.")
    }
  }

  return (
    <section className="relative text-white py-24 px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* === Background Video === */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      {/* === Header === */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 space-y-6">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-light inline-block">
          • Get In Touch
        </span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Let’s Work Together</h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Have a project in mind or just want to connect? Drop us a message — we’d love to hear from you.
        </p>
      </div>

      {/* === Contact Form === */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-3xl mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg space-y-6 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        {/* Centered Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button
            type="submit"
            className="border cursor-pointer border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            Send Message
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="border cursor-pointer border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            ← Back
          </button>
        </div>
      </form>

      {/* === Contact Info === */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 mt-16 text-gray-300">
        <div className="flex items-center gap-3">
          <Mail href="mailto:inquiries@veltrics.ca" className="w-5 h-5" />
          <p>inquiries@veltrics.ca</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/company/veltrics/posts/?feedView=all">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5" />
          <p>Calgary, Alberta</p>
        </div>
      </div>  
    </section>
  )
}
