import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { PHProvider } from "@/lib/posthog"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Watkins Automations | Automated Systems for Auto Shops",
  description:
    "We build automated lead generation, customer communication, and reputation systems for auto body and tire shops. Fewer phone calls, faster follow-ups, happier customers.",
}

export const viewport: Viewport = {
  themeColor: "#F97316",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">
        <PHProvider>{children}</PHProvider>
      </body>
    </html>
  )
}
