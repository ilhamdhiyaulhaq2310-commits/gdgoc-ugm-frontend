'use client';

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useHomeData } from "@/hooks/usehomedata";

export default function Home() {
  const {
    faqData, isLoading, error,
    openIndex, toggleFaq,
    tracksData, isTracksLoading, tracksError,
    formatsData, isFormatsLoading, formatsError,
    journeyData, isJourneyLoading, journeyError,
  } = useHomeData();

  return (
    <main className="overflow-x-hidden"> 
      {/* HERO SECTION */}
      <section className="container mx-auto pt-[120px] lg:pt-[176px] px-[19px] mb-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex flex-col gap-[28px]">
            <div className="flex items-center gap-2 text-xs font-medium text-gray tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                GDGOC UGM • 2026/2027
            </div>

            <h1 className="text-[42px] sm:text-[60px] lg:text-[80px] font-bold leading-tight">
              Big ideas. <br /> <span className="text-blue">Build together.</span>
            </h1>
            <p className="text-[18px] sm:text-[21px]">
              A place for curious minds at <span className="text-gray font-bold">Universitas Gadjah Mada </span>  
              to learn, connect, and build technology that matters.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={() => {
                const element = document.getElementById("learning-tracks");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }} className="btn w-full sm:w-auto justify-center">Find your learning track
                <FaArrowRight size={15} />
              </button>
              <Link href="/about" className="btn1 w-full sm:w-auto justify-center">Get to know 
                <FaArrowRight size={15} />
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-6">
                <div className="flex items-center gap-0 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                </div>
                <span className="text-xs text-gray font-medium">
                  Different backgrounds. A shared curiosity.
                </span>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">        
            <div className="relative w-full max-w-[620px] h-[350px] sm:h-[450px] lg:h-[530px]">
              <Image src="/coba.png" alt="GDG illustration" fill sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover rounded-3xl" priority/>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-BANNER INFO */}
      <section className="w-full"> 
        <div className="w-full border-y border-light py-[26px]"> 
          <div className="container mx-auto px-[19px] flex flex-col md:flex-row items-center justify-between gap-4 font-medium text-[16px] sm:text-[18px] text-center md:text-left"> 
            <div className="flex items-center gap-2"> 
              <span className="w-2 h-2 square-sm bg-primary block shrink-0"></span>
              <p>Learn by doing</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 square-sm bg-red block shrink-0"></span>
              <p>Connect across disciplines</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 square-sm bg-green block shrink-0"></span>
              <p>Build with purpose</p>
            </div>
          </div>
        </div> 
      </section>

      {/* ABOUT COMMUNITY SECTION */}
      <section className="container mx-auto my-[64px] lg:my-[88px] px-[19px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="w-full flex flex-col justify-between gap-[20px]">
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                A CAMPUS. A COMMUNITY.
            </div>

            <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-tight">
              Not just learning tech. <br /> Finding your people.
            </h1>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/about" className="btn2 w-full sm:w-auto justify-center"> More about GDGoC UGM
                <FaArrowRight size={15} />
              </Link>
            </div>
          </div>
          
          <div className="w-full flex flex-col justify-between gap-[24px]">
            <p className="text-[19px] sm:text-[21px]">
              Google Developer Group on Campus Universitas Gadjah Mada brings students together around one simple idea: we can go <span className="text-gray font-bold">further </span>  
              when we <span className="text-gray font-bold">learn </span> with each other.
            </p>
            <p className="text-[16px] sm:text-[18px]">
              From your first line of code to your next product idea, there&apos;s room to ask questions, share what you know, and try something new.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="btn3">Student-led</span>
              <span className="btn3">Peer-powered</span>
              <span className="btn3">Curiosity-first</span>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING TRACKS SECTION */}
      <section id="learning-tracks" className="container mx-auto mt-[16px] mb-[64px] lg:mb-[88px] px-[19px]">
        <div className="grid grid-cols-1 flex flex-col gap-8 items-end mb-8">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                FIND YOUR STARTING POINT
            </div>
          
            <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-tight">
              Many interests. One shared journey.
            </h1>
          </div>

          <div className="flex lg:justify-left">
            <p className="text-[16px] sm:text-[18px] text-gray max-w-[500px]">
              Follow what excites you. Explore the track, then connect the dots with others.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] pt-[20px] justify-items-center">
          {isTracksLoading && (
            <p className="col-span-full text-gray py-8">Memuat learning tracks...</p>
          )}

          {tracksError && (
            <p className="col-span-full text-red-500 py-8">{tracksError}</p>
          )}

          {!isTracksLoading && !tracksError && tracksData.length === 0 && (
            <p className="col-span-full text-gray py-8">Belum ada track yang tersedia.</p>
          )}

          {!isTracksLoading && !tracksError && tracksData.map((track) => (
            <div 
              key={track.id} 
              className="bg-white rounded-[24px] border border-light w-full max-w-[450px] flex flex-col justify-between overflow-hidden shadow-sm"
            > 
              <div>
                <div style={{ backgroundColor: track.color }} className="h-[200px] sm:h-[232px] w-full relative p-6 flex flex-col justify-between"> 
                  <span className="text-white text-xs font-semibold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full w-fit">
                    {track.id}
                  </span>
                  <h3 className="text-white text-xl sm:text-2xl font-bold">{track.name}</h3>
                </div>

                <div className="px-[24px] sm:px-[28px] my-[24px]"> 
                  <p className="text-[11px] font-medium text-blue">{track.tagline}</p>
                  <h3 className="text-[20px] sm:text-[24px] font-bold mt-[12px]">{track.name}</h3>
                  <p className="text-[14px] sm:text-[15px] text-gray mt-[12px] line-clamp-3">{track.description}</p>
                </div>
              </div>

              <div className="px-[24px] sm:px-[28px] pb-[28px]"> 
                <p className="text-[13px] text-gray mb-[14px] border-t border-light pt-[14px] line-clamp-2">
                  {track.what_you_do}
                </p>
                <button className="btn2 flex items-center justify-center gap-2 w-full sm:w-auto"> 
                  Explore this track 
                  <FaArrowRight size={15} />
                </button>
              </div>  
            </div>
          ))}
        </div>
      </section>

      {/* MORE THAN A CLASSROOM SECTION */}
      <section className="w-full bg-light-gray mb-[64px] lg:mb-[88px]"> 
        <div className="container mx-auto py-[60px] lg:py-[80px] px-[19px]"> 
          <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              MORE THAN A CLASSROOM
          </div>

          <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] my-[18px] font-bold leading-tight">
            Less watching. More making.
          </h1>
          <p className="text-[16px] sm:text-[18px] text-gray max-w-[700px]">
            Learn in a way that turns a new concept into something you can actually use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] pt-[40px]">
            {isFormatsLoading && (
              <p className="col-span-full text-gray py-8">Memuat format belajar...</p>
            )}

            {formatsError && (
              <p className="col-span-full text-red-500 py-8">{formatsError}</p>
            )}

            {!isFormatsLoading && !formatsError && formatsData.length === 0 && (
              <p className="col-span-full text-gray py-8">Belum ada format belajar yang tersedia.</p>
            )}

            {!isFormatsLoading && !formatsError && formatsData.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-[24px] p-[24px] sm:p-[32px] w-full flex flex-col justify-between shadow-sm"> 
                <div>
                  <h3 className="font-bold text-[24px] sm:text-[28px] mb-[16px]">
                    {item.name}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-gray mb-[20px]">
                    {item.description}
                  </p>
                </div>
                <p className="font-medium text-[13px] text-blue border-t border-light pt-[20px] uppercase tracking-wide">
                  Aksi: {item.cta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="container mx-auto mb-[64px] lg:mb-[88px] px-[19px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex items-center justify-center order-2 lg:order-1">        
            <div className="relative w-full max-w-[592px] h-[320px] sm:h-[400px] lg:h-[444px]">
              <Image src="/gambar.png" alt="GDG illustration1" fill sizes="(max-width: 768px) 100vw, 592px"
              className="object-cover rounded-[32px]" priority/>
            </div>
          </div>
          
          <div className="w-full flex flex-col order-1 lg:order-2">
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                BUILD SOMETHING THAT MATTERS
            </div>

            <h3 className="text-[36px] sm:text-[42px] lg:text-[48px] my-[20px] font-bold leading-tight">
              Your next project could start on campus.
            </h3>
            <p className="text-[16px] sm:text-[18px] text-gray">
              What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
            </p>
            <p className="text-[15px] sm:text-[16px] my-[20px] text-gray">
              Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/overview" className="btn2 w-full sm:w-auto justify-center">Explore project-based learning
                <FaArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAKE YOUR FIRST MOVE / JOURNEY SECTION */}
      <section className="container mx-auto px-[19px] mb-[64px] lg:mb-[88px]">    
        <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            MAKE YOUR FIRST MOVE
        </div>

        <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] mt-[18px] mb-[32px] max-w-[800px] font-bold leading-tight">
          You don&apos;t need to have it all figured out.
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] pt-[20px]">
          {isJourneyLoading && (
            <p className="col-span-full text-gray py-8">Memuat langkah journey...</p>
          )}

          {journeyError && (
            <p className="col-span-full text-red-500 py-8">{journeyError}</p>
          )}

          {!isJourneyLoading && !journeyError && journeyData.length === 0 && (
            <p className="col-span-full text-gray py-8">Belum ada data journey yang tersedia.</p>
          )}

          {!isJourneyLoading && !journeyError && journeyData.map((item) => (
            <div key={item.id} className="rounded-[24px] p-6 flex flex-col justify-between border border-light/50 bg-white shadow-sm"> 
              <div>
                <div className="text-blue font-bold text-[32px] sm:text-[36px] mb-[16px] border-b border-light pb-[12px]"> 
                  0{item.step}
                </div>
                <h3 className="font-bold text-[20px] sm:text-[22px] mb-[12px]">
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

      {/* QUOTE BANNER SECTION */}
      <section className="w-full bg-light-green mb-[64px] lg:mb-[88px]"> 
        <div className="container mx-auto py-[48px] lg:py-[64px] px-[19px]">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center text-center md:text-left">
            <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] shrink-0">
              <Image src="/bintang.png" alt="bintang" fill sizes="100px" className="object-contain"/>
            </div>

            <div className="max-w-[900px] flex flex-col"> 
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight"> 
                Different majors. Different starting points. <br className="hidden sm:block" /> A place for all of them.
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray mt-[16px]">
                You don&apos;t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
              </p>
            </div>
          </div> 
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container mx-auto px-[19px] py-[40px] lg:py-[64px] mb-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"> 
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                A FEW GOOD QUESTIONS
            </div>

            <h1 className="font-bold text-[36px] sm:text-[42px] lg:text-[48px] my-[20px] leading-tight">
              Wondering where <br/> to begin?
            </h1>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn2 w-full sm:w-auto justify-center">
                Ask us a question
                <FaArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col divide-y divide-light-gray w-full">
            {isLoading && (
              <p className="text-gray py-4">Memuat pertanyaan...</p>
            )}

            {error && (
              <p className="text-red-500 py-4">{error}</p>
            )}

            {!isLoading && !error && faqData.length === 0 && (
              <p className="text-gray py-4">Belum ada FAQ yang tersedia.</p>
            )}

            {!isLoading && !error && faqData.map((faq, index) => (
              <div key={faq.id} className="py-[16px]">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full text-left font-semibold text-[18px] sm:text-[20px] gap-4 py-2"
                >
                  <span>{faq.question}</span>
                  <IoIosArrowDown 
                    className={`text-blue transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`} size={24} 
                  />
                </button>

                {openIndex === index && (
                  <p className="text-[15px] sm:text-[16px] text-gray my-[14px] leading-relaxed pr-[19px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}