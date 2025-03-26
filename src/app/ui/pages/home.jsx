"use client";
import Image from "next/image";
import { Anton } from "next/font/google";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  return (
    <>
      <section
        id="homePage"
        className="relative min-h-screen flex items-center justify-center bg-[#FEFEFE] px-6 pt-20 lg:px-16 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center h-screen w-full"
        >
          <div className="relative max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${anton.className} font-extrabold text-[#135C9F] uppercase leading-none text-3xl sm:text-5xl md:text-9xl space-y-4 text-center`}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
              >
                <h1>INTERNSHIP</h1>
                <div className="w-[4.3em] h-[1em] bg-[url('/images/Hero.png')] bg-cover bg-center shadow-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
              >
                <div className="w-[4em] h-[1em] bg-[url('/images/Hero1.png')] bg-cover bg-center shadow-2xl"></div>
                <h1>
                  MADE <span className="text-[#FE7E00]">EASY,</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
              >
                <h1>RIGHT AT YOUR NOOK</h1>
                <div className="w-[1em] h-[1em] bg-[url('/images/Hero2.png')] bg-cover bg-center shadow-2xl"></div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 flex flex-col items-center sm:items-center text-center sm:text-center"
            >
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <p className={`${poppins.className} text-[#135C9F] text-base sm:text-lg max-w-lg text-left sm:mr-[4em] md:mr-[8em]`}>
                  Bridges the gap between students, companies, and schools to create successful internship experiences.
                </p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  onClick={() =>
                    document.getElementById("worksPage")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`${poppins.className} border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:bg-orange-500 hover:text-white transition`}
                >
                  How it Works?
                </motion.button>


                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  onClick={() =>
                    document.getElementById("registerPage")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={` ${poppins.className} bg-[#135C9F] text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-xl flex items-center justify-center gap-2 hover:bg-blue-800 transition`}
                >
                  Pre-Register Now
                  <span className="text-xl">→</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
