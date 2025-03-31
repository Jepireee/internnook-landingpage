"use client";
import { Poppins } from "next/font/google";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function AboutPage() {
  return (
    <>
      <section
        id="aboutPage"
        className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-25 bg-[url('/images/Gradient.png')] bg-cover bg-center relative"
      >
        {/* Image Placeholder with Pop-in Effect */}
        <motion.div
          className="grid grid-cols-1 gap-4 w-full md:w-1/2 bg-[url('/images/IMG_12.JPG')] bg-cover bg-center w-[90] h-[70vh]  items-center justify-center rounded-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Animated Text Content */}
        <motion.div
          className="p-6 lg:p-10 max-w-md"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className={`${anton.className} text-8xl font-extrabold text-[#FBEFB3] mt-2 text-left`}
          >
            A Smart Internship Hub
          </h2>
          <p className={`${poppins.className} text-[#FBEFB3] mt-2 text-left`}>
            that connects academic institutions, companies, and students
            seamlessly.
          </p>
        </motion.div>
      </section>
    </>
  );
}
