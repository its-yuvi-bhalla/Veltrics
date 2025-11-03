import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veltrics — Digital Solutions for Modern Businesses",
  description: "We build beautiful, scalable web and mobile experiences.",
  icons: {
    icon: "/veltricsFavicon.png?v=3",   // version breaks cache
    shortcut: "/veltricsFavicon.png?v=3",
    apple: "/veltricsFavicon.png?v=3",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/veltricsFavicon.png?v=8"
          type="image/png"
        />
        <title>Veltrics — Digital Solutions for Modern Businesses</title>
        <meta
          name="description"
          content="We build beautiful, scalable web and mobile experiences."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
