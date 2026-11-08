'use client';

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useAboutData } from "@/hooks/useaboutdata";

export default function AboutPage() {
  const { valuesData, isValuesLoading, valuesError, rolesData, isRolesLoading,
    rolesError} = useAboutData();

  return (
    <main className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="container mx-auto pt-[120px] lg:pt-[176px] px-[19px] mb-[64px] lg:mb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex flex-col gap-[20px] lg:gap-[26px]">
            <div className="flex items-center gap-2 text-xs font-medium text-gray tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                ABOUT GDGoC UGM
            </div>

            <h1 className="text-[38px] sm:text-[56px] lg:text-[72px] font-bold leading-tight">
              Built by students. <span className="text-blue"> For what&apos;s next.</span>
            </h1>
            <p className="text-[18px] sm:text-[22px] text-gray w-full max-w-[750px]">
              We&apos;re a community of learners and makers at Universitas Gadjah Mada, 
              connected by curiosity and the belief that technology can do good.
            </p>

            <span className="text-[12px] sm:text-[13px] text-gray font-medium">
              UNIVERSITAS GADJAH MADA • 2026/2027
            </span>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end">        
            <div className="relative w-full max-w-[464px] h-[320px] sm:h-[400px]">
              <Image src="/coba1.png" alt="GDG illustration" fill sizes="(max-width: 768px) 100vw, 464px"
              className="object-cover rounded-3xl" priority/>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE COME TOGETHER SECTION */}
      <section className="w-full bg-light-gray mb-[64px] lg:mb-[88px]"> 
        <div className="container mx-auto py-[60px] lg:py-[80px] px-[19px]"> 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-3 flex flex-col">
              <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                  WHY WE COME TOGETHER
              </div>

              <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] mt-[16px] lg:mt-[20px] font-bold leading-tight">
                A bridge from <span className="text-blue">“I wonder”</span> to 
                <span className="bg-gradient-to-b from-blue to-[#6FACFF] bg-clip-text text-transparent"> “I made this.”</span>
              </h1>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">  
                <h3 className="text-[20px] sm:text-[24px] font-medium leading-relaxed"> 
                    Learning feels different when there&apos;s someone to exchange ideas with, 
                    a problem you care about, and the space to give it a try.
                </h3>
                <p className="text-[16px] sm:text-[18px] text-gray my-[20px] leading-relaxed"> 
                    That&apos;s the spirit of Google Developer Groups on Campus at UGM. 
                    We create room for students to explore technology, develop practical skills, and learn from one another.
                </p>
                <p className="text-[16px] sm:text-[18px] text-gray leading-relaxed">
                    Our campus is the starting point. The questions we ask and the things we build can reach beyond it.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GUIDES US SECTION (/api/values) */}
      <section className="container mx-auto px-[19px] mb-[64px] lg:mb-[88px]"> 
          <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              WHAT GUIDES US
          </div>

          <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] mt-[16px] lg:mt-[18px] w-full max-w-[800px] font-bold leading-tight">
            Good technology starts with good company.
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] pt-[32px] lg:pt-[40px]">
            {isValuesLoading && <p className="col-span-full text-gray py-8">Memuat nilai komunitas...</p>}
            {valuesError && <p className="col-span-full text-red-500 py-8">{valuesError}</p>}
            {!isValuesLoading && !valuesError && valuesData.length === 0 && (
              <p className="col-span-full text-gray py-8">Belum ada nilai yang tersedia.</p>
            )}

            {!isValuesLoading && !valuesError && valuesData.map((item) => (
              <div key={item.id} className="border border-light rounded-[24px] p-[24px] sm:p-[26px] flex flex-col justify-between bg-white shadow-sm"> 
                <div>
                  <div style={{ backgroundColor: item.color }} className="w-[36px] h-1 rounded-full mb-6"></div>
                  <h3 className="font-bold text-[22px] sm:text-[24px] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* PEOPLE, NOT LABELS SECTION */}
      <section className="container mx-auto px-[19px] mb-[64px] lg:mb-[88px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              PEOPLE, NOT LABELS
            </div>  

            <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] my-[16px] lg:my-[22px] font-bold leading-tight">
              There&apos;s more than one way to contribute.
            </h1> 
            <p className="text-gray text-[16px] sm:text-[18px] leading-relaxed">
              You can be learning one day and helping someone else the next. A community grows through both.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 flex flex-col divide-y divide-light-gray w-full"> 
            {isRolesLoading && <p className="text-gray py-8">Memuat peran kontribusi...</p>}
            {rolesError && <p className="text-red-500 py-8">{rolesError}</p>}
            {!isRolesLoading && !rolesError && rolesData.length === 0 && (
              <p className="text-gray py-8">Belum ada data peran yang tersedia.</p>
            )}

            {!isRolesLoading && !rolesError && rolesData.map((role) => (
              <div key={role.id} className="py-[20px] sm:py-[24px] first:pt-0">
                <h3 className="text-[24px] sm:text-[28px] font-bold"> 
                    {role.title}
                </h3>
                <p className="text-[15px] sm:text-[17px] text-gray my-[12px] sm:my-[14px] leading-relaxed"> 
                    {role.description}
                </p>
              </div> 
            ))}

            <div className="flex flex-wrap items-center gap-4 pt-4 mt-[20px]">
              <Link href="/contact" className="btn2 w-full sm:w-auto justify-center">
                  Let&apos;s talk about getting involved
                  <FaArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="w-full bg-light-yellow mb-[40px]">
        <div className="container mx-auto py-[48px] lg:py-[64px] px-[19px]">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-[64px] justify-center text-center sm:text-left">
            <div className="relative w-[72px] h-[72px] shrink-0">
              <Image src="/bintangkuning.png" alt="bintang" fill sizes="72px" className="object-contain"/>
            </div>

            <div className="max-w-[1000px] flex flex-col"> 
              <h2 className="text-[24px] sm:text-[32px] font-bold leading-tight"> 
                A space to learn. A responsibility to care.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray mt-[12px] sm:mt-[14px]">
                We want every conversation and learning experience to be respectful, inclusive, 
                and constructive. Be kind, give credit, and make room for people who are just getting started.
              </p>
            </div>
          </div> 
        </div>
      </section>
    </main>
  );
}