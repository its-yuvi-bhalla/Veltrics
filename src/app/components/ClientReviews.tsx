import React from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ClientReviews() {
  return (
    <section id="reviews" className="bg-black text-white py-24 px-6 md:px-16 lg:px-28 space-y-20">
      {/* ========== TOP SECTION ========== */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="flex-1 w-full">
          <Image
            src="/review-hero.jpg"
            alt="Team discussion"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-[450px] grayscale"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full space-y-6">
          <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-light inline-block">
            • Reviews
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">Client Reviews</h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Real feedback from clients who trusted my design expertise to elevate their brands successfully.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href='/contact' className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition inline-block" >
              Book a Free Call
            </Link>
            <Link href='#services' className="border border-white/30 text-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition">
              See Services
            </Link>
          </div>
        </div>
      </div>

      {/* ========== TESTIMONIAL CARDS ========== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg space-y-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://shawneephysiotherapy.ca/wp-content/uploads/2024/08/image-4-570x696.jpg"
              alt="Richards Johnson"
              width={60}
              height={60}
              className="rounded-4xl grayscale"
            />
            <div>
              <h3 className="text-lg font-semibold">Vinci Gomez</h3>
              <p className="text-gray-400 text-sm">Anderson Physiotherapy</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Working with Veltrics was an incredible experience — the website looks absolutely amazing and was completed faster than expected. The collaboration was effortless, communication was clear, and the entire project stayed within budget. Highly recommend for anyone looking for both quality and reliability!
          </p>
          <div className="flex items-center gap-2 text-yellow-400">
            <span className="text-white text-sm">4.9</span>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
