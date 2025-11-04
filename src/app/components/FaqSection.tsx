"use client"

import React, { useState } from "react"
import { Plus, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We offer end-to-end digital solutions — from web and mobile app development to AI integrations, automation, and UI/UX design. Every product we build is crafted for performance, scalability, and long-term business growth.",
    },
    {
      question: "How do we start working together?",
      answer:
        "You can start by booking a free discovery call through our website. We’ll discuss your goals, define the project scope, and create a custom roadmap with clear milestones, deliverables, and timelines before development begins.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Our core stack includes React, Next.js, Node.js, TypeScript, and Python. For AI integrations, we leverage OpenAI, TensorFlow, and modern automation frameworks to deliver secure, scalable, and high-performance solutions.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes — we offer long-term support and maintenance. From updates and analytics tracking to new feature rollouts, we ensure your platform stays optimized and future-ready at every stage of growth.",
    },
    {
      question: "Can you integrate AI into my business?",
      answer:
        "Absolutely. We specialize in building AI-driven chatbots, predictive analytics tools, and smart automations that enhance workflows, cut costs, and improve decision-making across industries.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "We love working with startups. From MVP to full-scale product launches, we provide strategic, technical, and creative support to help you grow fast and stand out in a competitive market.",
    },
  ]

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-24 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/lemon.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="flex-1 w-full space-y-6">
          <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-light inline-block">
            • FAQ’s
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">Answers</h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-md">
            Find answers to common questions about our process, technologies, and long-term support approach.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Web Development", "Automation", "AI Integration"].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded-full text-sm hover:bg-white/20 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href="/contact" className="mt-6 inline-block border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Book a Free Call
          </Link>
        </div>

        {/* RIGHT SIDE - ACCORDION */}
        <div className="flex-1 w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-base md:text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <X className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Answer with smooth expand animation but fixed height to avoid layout jump */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] mt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
