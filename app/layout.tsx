import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = "https://aakankshatayadeportfolio.vercel.app"
const siteTitle = "Aakanksha Tayade | Workplace Interior Designer"
const siteDescription =
  "Associate Workplace Designer with 16+ years of experience in commercial interiors, space planning, and people-centric design. Specializing in transforming business spaces."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Aakanksha Tayade",
  },
  description: siteDescription,
  keywords: [
    "workplace interior designer",
    "commercial interior design",
    "office space planning",
    "corporate interiors India",
    "Aakanksha Tayade",
  ],
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Aakanksha Tayade",
    images: [
      {
        url: "/projects/fractal/img-05.jpg",
        alt: "Fractal Tech Campus, Bangalore — workplace interior by Aakanksha Tayade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/projects/fractal/img-05.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
