import type { Metadata } from "next";
import { Almendra_SC, Roboto_Condensed, Zain } from "next/font/google";
import "./globals.css";
import Nav from '@/components/Navbar'
import Footer from "./components/Footer";

const vintageText = Almendra_SC({
  variable: "--font-almendra-sc",
  subsets: ["latin"],
  weight: "400",
});

const sectionText = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: "400"
})

const headText = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bagan",
  description: "Bagan Myanmar",
  openGraph: {
    title: "Bagan",
    description: "A content-driven website dedicated to Bagan, the ancient city in the Mandalay Region of Myanmar. Features include an interactive timeline, an image gallery, and a dynamic temple map.",
    url: "https://bagan-website.vercel.app",
    siteName: "Bagan",
    images: [
      {
        url: "https://bagan-website.vercel.app/2.png",
        width: 1200,
        height: 630,
        alt: "Bagan Myanmar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({children, }: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${headText.variable} ${vintageText.variable} ${sectionText.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
