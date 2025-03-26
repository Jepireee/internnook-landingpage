"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="homePage" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20 lg:px-16 sm:py-16 bg-[#FFFFFF]">
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="font-extrabold text-[#135C9F] uppercase leading-none text-3xl sm:text-5xl md:text-7xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <h1>INTERNSHIP</h1>
            <Image
              src="/images/Hero.png"
              alt="Eye"
              width={140}
              height={80}
              quality={100}
              className="w-[80px] sm:w-[130px] md:w-[160px] h-auto rounded-md shadow-md"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Image
              src="/images/Hero1.png"
              alt="Students"
              width={160}
              height={100}
              quality={100}
              className="w-[100px] sm:w-[150px] md:w-[180px] h-auto rounded-md shadow-md"
            />
            <h1>MADE <span className="text-[#FE7E00]">EASY,</span></h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <h1>RIGHT AT YOUR NOOK</h1>
            <Image
              src="/images/Hero2.png"
              alt="Office"
              width={100}
              height={60}
              className="w-[70px] sm:w-[90px] md:w-[110px] h-auto rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <p className="text-[#135C9F] text-base sm:text-lg max-w-lg">
            Bridges the gap between students, companies, and schools to create successful internship experiences.
          </p>
            <button 
            onClick={() => {
              document
                .getElementById("worksPage")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-sm hover:bg-orange-500 hover:text-white transition">
              How it Works?
            </button>
            <button 
            onClick={() => {
              document
                .getElementById("registerPage")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#135C9F] item-center text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md flex items-center gap-2 hover:bg-blue-800 transition">
              Pre-Register Now
              <span className="text-xl">→</span>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
