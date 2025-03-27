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
