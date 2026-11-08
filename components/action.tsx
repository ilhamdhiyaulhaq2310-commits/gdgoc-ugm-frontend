import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Action() {
  return (
    <section className="container mx-auto px-[19px] py-[64px]">
        <div className="bg-cyan rounded-[32px] p-[48px] md:p-16 flex flex-col lg:flex-row items-start 
        lg:items-center justify-between gap-8">
            
            <div className="max-w-[600px] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[12px] font-medium text-gray tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                YOUR NEXT CHAPTER
              </div>
              <h2 className="text-[44px] md:text-[48px] font-bold leading-tight">
                Bring your curiosity. <br /> We&apos;ll build from there.
              </h2>
              <p className="text-[18px] text-gray">
                Find a learning track, meet a collaborator, or start a conversation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <Link href="/overview" className="btn">
                Explore the overview <FaArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn2">
                Talk to the community <FaArrowRight size={15} />
              </Link>
            </div>
          </div>
    </section>
)}