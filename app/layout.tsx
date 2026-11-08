import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Action from "@/components/action";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "GDGoC UGM",
  description: "Google Developer Groups on Campus UGM",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} bg-white text-black min-h-full flex flex-col`}>
        
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Action />
        <Footer />

      </body>
    </html>
  );
}