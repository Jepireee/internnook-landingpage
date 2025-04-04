"use client";

import { Anton, Poppins } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Test() {
  return (
    <>
      {/* Section 1 */}
      <section
        id="tagline"
        className="bg-white flex flex-col lg:flex-row h-screen gap-2 pb-2 pt-2"
      >
        <motion.div
          className="bg-[#FF7B29] text-white py-8 px-10 w-full lg:w-[45.83%] flex flex-col justify-between"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1
            className={`${anton.className} text-8xl font-bold leading-tight text-right`}
          >
            WHERE DREAM JOB TAKES ROOTS
          </h1>
          <p className={`${poppins.className} mt-8 text-lg text-justify`}>
            Internnook simplifies the search for top student talent, making
            recruitment and internship management more efficient through
            AI-driven matching and smart contracts.
          </p>
        </motion.div>

        <div className="w-full lg:w-[54.17%] grid grid-rows-2 grid-cols-2 gap-2">
          <div className="row-span-2">
            <img
              alt="Group of professionals smiling in an office setting"
              className="w-full h-full object-cover"
              src="/images/IMG_15.JPG"
              width="600"
              height="800"
            />
          </div>
          <div>
            <img
              alt="Top view of a group of people working on laptops and tablets around a table"
              className="w-full h-full object-cover"
              src="/images/IMG_17.JPG"
              width="600"
              height="400"
            />
          </div>
          <div>
            <img
              alt="Smiling woman in a professional setting"
              className="w-full h-full object-cover"
              src="/images/IMG_5.JPG"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="newSection"
        className="bg-white flex flex-col lg:flex-row h-screen gap-2 pb-2"
      >
        <div className="w-full lg:w-[54.17%] grid grid-rows-2 grid-cols-2 gap-2">
          <div className="row-span-2">
            <img
              alt="Diverse group of professionals collaborating"
              className="w-full h-full object-cover"
              src="/images/IMG_14.JPG"
              width="600"
              height="800"
            />
          </div>
          <div>
            <img
              alt="Close-up of hands typing on a laptop"
              className="w-full h-full object-cover"
              src="/images/IMG_10.JPG"
              width="600"
              height="400"
            />
          </div>
          <div>
            <img
              alt="Team brainstorming with sticky notes"
              className="w-full h-full object-cover"
              src="/images/IMG_3.JPG"
              width="600"
              height="400"
            />
          </div>
        </div>

        <motion.div
          className="bg-[#1F319D] text-white py-8 px-10 w-full lg:w-[45.83%] flex flex-col justify-between"
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1
            className={`${anton.className} text-8xl font-bold leading-tight text-left`}
          >
            THE SMART WAY TO LOOK
          </h1>
          <p className={`${poppins.className} mt-8 text-lg text-justify`}>
            Internnook simplifies the search for top student talent, making
            recruitment and internship management more efficient through
            AI-driven matching and smart contracts.
          </p>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section
        id="newSection2"
        className="bg-white flex flex-col lg:flex-row h-screen gap-2 pb-2"
      >
        <motion.div
          className="bg-[#FF7B29] text-white py-8 px-10 w-full lg:w-[45.83%] flex flex-col justify-between"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1
            className={`${anton.className} text-8xl font-bold leading-tight text-right`}
          >
            WHERE STUDENTS FIND THEIR NOOK
          </h1>
          <p className={`${poppins.className} mt-8 text-lg text-justify`}>
            Internnook provides a seamless platform for schools to connect
            students with the best internship opportunities, ensuring they find
            the right fit for their career development.
          </p>
        </motion.div>

        <div className="w-full lg:w-[54.17%] grid grid-rows-2 grid-cols-2 gap-2">
          <div className="row-span-2">
            <img
              alt="Group of professionals smiling in an office setting"
              className="w-full h-full object-cover"
              src="/images/IMG_9.JPG"
              width="600"
              height="800"
            />
          </div>
          <div>
            <img
              alt="Top view of a group of people working on laptops and tablets around a table"
              className="w-full h-full object-cover"
              src="/images/IMG_11.JPG"
              width="600"
              height="400"
            />
          </div>
          <div>
            <img
              alt="Smiling woman in a professional setting"
              className="w-full h-full object-cover"
              src="/images/IMG_16.JPG"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>
    </>
  );
}
