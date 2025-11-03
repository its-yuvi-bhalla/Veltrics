import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Process from "./components/Process"
import Services from "./components/Services"
import ClientReviews from "./components/ClientReviews"
import FaqSection from "./components/FaqSection"
import Footer from "./components/Footer"

export const metadata = {
  title: "Veltrics — Digital Solutions for Modern Businesses",
  icons: {
    icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEwnGNyg_b-gA/company-logo_100_100/B4EZoph.cMGUAQ-/0/1761633365412/veltrics_logo?e=1763596800&v=beta&t=oEOvwPFlnjToOHzWqf7hMi_DiNMgmXDwVtxWEHxssAk",   // version breaks cache
    shortcut: "/veltricsFavicon.jpg",
    apple: "/veltricsFavicon.jpg",
  },
}
}




export default function Home() {''
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero/>
      <Projects/>
      <Process/>
      <Services/>
      <ClientReviews/>
      <FaqSection/>
      <Footer/>



    </main>
  )
}
