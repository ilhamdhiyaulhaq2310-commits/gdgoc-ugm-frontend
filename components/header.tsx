'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen); 

  const handleScrollToTracks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Jika user sedang berada di halaman Home ("/")
    if (pathname === "/") {
      e.preventDefault(); // Mencegah reload/pindah halaman
      const element = document.getElementById("learning-tracks");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Jika sedang di halaman lain, biarkan Link bekerja secara normal menuju /#learning-tracks
  };

  return (
  <header className="fixed inset-x-0 top-0 bg-white h-[104px] px-[19px] md:px-[64px] flex items-center 
  justify-between z-50 border-b border-light">

    {/*LOGO*/}
    <div className="flex items-center gap-2">
      <div className="relative w-[50px] sm:w-[69px] h-[38px]">
        <Image src="/google logo.png" alt="Logo" fill sizes="(max-width: 768px) 100vw, 69px" className="object-contain"/>
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[15px] xs:text-[16px] sm:text-xl font-bold break-words leading-tight">
          Google Developer Groups</span>
        <span className="text-[11px] sm:text-xs leading-tight">
          <span className="text-primary">
            On Campus</span> Universitas Gadjah Mada
        </span>
      </div>
    </div>

    {/*NAVIGATION*/}  
    <nav className=" relative hidden lg:block">
      <ul className="flex items-center gap-2 text-sm text-black">
        <li><Link 
          href="/" className={`px-[20px] py-[14px] rounded-full transition-all block 
          ${pathname === "/" ? "bg-cyan text-blue font-bold" : "hover:text-black hover:bg-light-gray"
          }`}
          >
            Home
        </Link></li>
        <li><Link 
          href="/about" className={`px-[20px] py-[14px] rounded-full transition-all block 
          ${pathname === "/about" ? "bg-cyan text-blue font-bold" : "hover:text-black hover:bg-light-gray"
          }`}
          >
            About
        </Link></li>
        <li><Link 
          href="/overview" className={`px-[20px] py-[14px] rounded-full transition-all block 
          ${pathname === "/overview" ? "bg-cyan text-blue font-bold" : "hover:text-black hover:bg-light-gray"
          }`}
          >
            Overview
        </Link></li>
        <li><Link 
          href="/contact" className={`px-[20px] py-[14px] rounded-full transition-all block 
          ${pathname === "/contact" ? "bg-cyan text-blue font-bold" : "hover:text-black hover:bg-light-gray"
          }`}
          >
            Contact
        </Link></li>
      </ul>
    </nav>

    {/* RIGHT ACTION BUTTON */}
    <div className="flex items-center gap-3">
      {/* Button dihilangkan di HP */}
      <div className="hidden lg:flex">
        <Link href="/#learning-tracks" onClick={handleScrollToTracks} className="btn flex items-center gap-2">
          Find your track
          <FaArrowRight size={15} />
        </Link>
      </div>

      {/* Tombol Garis Tiga khusus HP */}
      <button 
        onClick={toggleMenu} 
        className="lg:hidden flex-shrink-0 p-2 text-gray-700 hover:text-black focus:outline-none"
        aria-label="Toggle Menu"
        >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
    </div>

    {/* MOBILE MENU DROPDOWN */}
    {isOpen && (
      <div className="absolute top-full inset-x-0 bg-white border-b border-light 
      shadow-lg py-6 px-6 md:hidden flex flex-col gap-4 transition-all z-50">
        <Link 
          href="/" onClick={() => setIsOpen(false)}
          className={`px-4 py-3 rounded-xl transition-all 
          ${pathname === "/" ? "bg-cyan text-blue font-bold" : "hover:bg-light-gray"
          }`}
          >
            Home
        </Link>
        <Link 
          href="/about" 
          onClick={() => setIsOpen(false)}
          className={`px-4 py-3 rounded-xl transition-all 
          ${pathname === "/about" ? "bg-cyan text-blue font-bold" : "hover:bg-light-gray"
          }`}
          >
            About
        </Link>
        <Link 
          href="/overview" 
          onClick={() => setIsOpen(false)}
          className={`px-4 py-3 rounded-xl transition-all 
          ${pathname === "/overview" ? "bg-cyan text-blue font-bold" : "hover:bg-light-gray"
          }`}
          >
            Overview
        </Link>
        <Link 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          className={`px-4 py-3 rounded-xl transition-all 
          ${pathname === "/contact" ? "bg-cyan text-blue font-bold" : "hover:bg-light-gray"
          }`}
          >
            Contact
        </Link>

        <button className="btn w-full justify-center mt-2">
          Find your track
          <FaArrowRight size={15} />
        </button>
      </div>
    )}
  </header>
)}