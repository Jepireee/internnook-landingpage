"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function AboutPage() {
  return (
    <>
      <section
        id="aboutPage"
        className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-25 bg-[#F8F8F8] relative"
      >
        {/* <div className="grid grid-cols-1 gap-4 w-full md:w-1/2 ">
          <div className="col-span-1 row-span-2">
            <Image
              src="/images/image 0.png"
              alt="Person with Laptop"
              width={400}
              height={500}
              quality={100}
              className="rounded-xl object-cover w-full h-full relative z-10"
            />
          </div>
          <Image
            src="/images/IMG_12.JPG"
            alt="Tablet Screen"
            width={200}
            height={200}
            quality={100}
            className="rounded-xl object-cover w-full h-full relative z-10"
          />
          <Image
            src="/images/image 01.png"
            alt="Team Discussion"
            width={200}
            height={200}
            quality={100}
            className="rounded-xl object-cover w-full h-full relative z-10"
          />
        </div> */}
        <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
        <div className="col-span-1 row-span-2">
          <Image
            src="/images/IMG_12.JPG"
            alt="Tablet Screen"
            width={400}
            height={500}
            quality={100}
            className="rounded-xl object-cover w-full h-full relative z-10"
          />
        </div>
      </div>


        <div className="p-6 lg:p-10 max-w-md">
          <span className={`${poppins.className} text-gray-700 text-sm mt-2 py-2`}>About</span>
          <h2 className="italic text-4xl font-extrabold text-[#135C9F] mt-2">
            A Smart Internship
          </h2>
          <p className={`${poppins.className} text-gray-700 mt-2`}>
            that connects academic institutions, companies, and students
            seamlessly.
          </p>
        </div>
      </section>
    </>
  );
}
