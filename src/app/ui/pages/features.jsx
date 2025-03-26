"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Cards from "../components/Cards";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function FeaturesPage() {
  const cardData = [
    {
      id: 1,
      title: "TalentMatch AI",
      description: "Provides the ideal intern to the position required.",
      img: "talentMatch.png",
    },
    {
      id: 2,
      title: "SmartCon",
      description: "Creates digital contracts that connect all parties.",
      img: "smartCon.png",
    },
    {
      id: 3,
      title: "CV Builder",
      description: "Builds ATS-ready Curriculum Vitae for students.",
      img: "cvBuilder.png",
    },
    {
      id: 4,
      title: "ModRadar",
      description:
        "Allows institutions to actively track performance of deployed interns",
      img: "modRadar.png",
    },
  ];

  return (
    <section
      id="featuresPage"
      className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center gap-7 px-4 py-15 relative overflow-hidden"
    >
      <div className="flex flex-col items-center gap-3 text-[#2F2F2F] relative z-10">
        <span className={`${poppins.className} text-[#8E8E8E] text-sm mt-2 py-2`}>
          Features
        </span>
        <h2 className={`${poppins.className} text-2xl md:text-3xl font-bold text-gray-900 mt-2`}>
          Internnook Feature's
        </h2>
        <div className="text-wrap max-w-2xl text-center">
          <p className={`${poppins.className} font-light text-xl`}>
            Internnook connects students, companies, and schools through
            innovative features designed to simplify and enhance the
            internship experience.
          </p>
        </div>
      </div>

      {/* Animated Cards */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-5xl mx-auto place-items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
        }}
      >
        {cardData.map((data) => (
          <motion.div 
            key={data.id} 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <Cards 
              title={data.title} 
              description={data.description} 
              img={data.img} 
              className={`${poppins.className}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
