import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="w-full bg-light-gray pt-[56px] pb-[28px]">       
        <div className="container mx-auto px-[19px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-[40px] border-b border-light">
              
              <div className="md:col-span-6 flex flex-col gap-4">
                {/*LOGO*/}
                <div className="flex items-center gap-3">
                  <div className="relative w-[76px] h-[42px]">
                    <Image src="/google logo.png" alt="Google Logo" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[26px] leading-tight">
                        Google Developer Groups</span>
                    <span className="text-[16px]">
                      <span className="text-primary font-medium">
                        On Campus</span> Universitas Gadjah Mada
                    </span>
                  </div>
                </div>

                <p className="text-[16px] text-gray max-w-[500px] leading-relaxed">
                  A student community for curious minds, shared learning, and technology with purpose.
                </p>
              </div>

              {/*NAVIGATION*/}
              <div className="md:col-span-3 flex flex-col gap-3">
                <h4 className="font-bold text-black text-[16px]">Explore</h4>
                <ul className="flex flex-col gap-[14px] text-sm text-gray">
                  <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
                  <li><Link href="/overview" className="hover:text-black transition-colors">Overview</Link></li>
                  <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/*SOSMED*/}
              <div className="md:col-span-3 flex flex-col gap-[16px]">
                <h4 className="font-bold text-black text-[16px]">Keep in the loop</h4>
                <a href="https://www.instagram.com/gdgocindonesia" target="_blank" rel="noreferrer" className="text-blue text-[18px] hover:underline">
                  @gdgoc.ugm
                </a>
                <div className="flex items-center gap-3 text-gray">
                  <FaInstagram size={24} />
                  <SlSocialYoutube size={24} />
                </div>
                <p className="text-[14px] text-gray">
                  Learn together. Build together.
                </p>
              </div>

            </div>

            {/*COPYRIGHT*/}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-[40px]">
              <p className="text-[12px] text-gray">
                © GDGOC Universitas Gadjah Mada • 2026/2027
              </p>
              <p className="text-[12px] text-gray">
                Made for the campus. Open to possibilities.
              </p>
            </div>

            {/*COLOR LINE*/}
            <div className="w-[160px] flex h-1 overflow-hidden mt-[40px]">
              <div className="w-1/4 bg-primary"></div>
              <div className="w-1/4 bg-red"></div>
              <div className="w-1/4 bg-yellow"></div>
              <div className="w-1/4 bg-green"></div>
            </div>
        </div>
    </footer>
)}