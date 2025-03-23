"use client";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <section
        id="homePage"
        className="relative min-h-screen flex items-center justify-center bg-[#F8F8F8] px-6 pt-20 lg:px-16 overflow-hidden"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
          <div className="absolute w-full h-full"></div>
          <div className="text-center lg:text-left z-30">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Internship made easy,
              <br className="hidden sm:inline" /> right at your nook.
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
              <button
                onClick={() => {
                  document
                    .getElementById("registerPage")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#135C9F] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 cursor-pointer"
              >
                Pre-Register Now
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("worksPage")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[#AFAFAF] px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-gray-200 text-slate-900 cursor-pointer"
              >
                How it works?
              </button>
              {/* circle */}
              <div className="absolute top-25 -left-80 w-96 h-96 bg-orange-200 rounded-full hidden md:block -z-50"></div>
            </div>
          </div>

          <div className="absolute -top-1 -right-20 w-140 h-140 bg-orange-200 rounded-full hidden md:block z-0"></div>
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/CBM_HERO.png"
              alt="Internship Team"
              width={500}
              height={500}
              quality={100}
              className="object-contain w-500 max-w-3xl h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] ml-10 md:-mt-16 lg:-mt-2 "
            />
          </div>
        </div>
      </section>
    </>
  );
}
