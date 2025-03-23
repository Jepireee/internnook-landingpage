"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section
        id="aboutPage"
        className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-[#F8F8F8] relative"
      >
        <div className="absolute -top-8 left-10 w-60 h-60 bg-orange-200 
          rounded-full hidden md:block z-0">
        </div>
        <div className="absolute -bottom-0 left-85 w-60 h-60 bg-orange-200 
          rounded-full hidden md:block z-0">
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 ">
          <div className="col-span-1 row-span-2">
            <Image
              src="/images/IMG_9.JPG"
              alt="Person with Laptop"
              width={400}
              height={500}
              quality={100}
              className="rounded-xl object-cover w-full h-full relative z-10"
            />
          </div>
          <Image
            src="/images/IMG_8.JPG"
            alt="Tablet Screen"
            width={200}
            height={200}
            quality={100}
            className="rounded-xl object-cover w-full h-full relative z-10"
          />
          <Image
            src="/images/IMG_6.JPG"
            alt="Team Discussion"
            width={200}
            height={200}
            quality={100}
            className="rounded-xl object-cover w-full h-full relative z-10"
          />
        </div>

        <div className="bg-[#7AAADD]/[0.11] shadow-lg rounded-lg p-6 lg:p-10 max-w-md">
          <span className="text-[#8E8E8E] text-sm mt-2 py-2">About</span>
          <h2 className="italic text-2xl font-bold text-gray-900 mt-2">
            A Smart Internship Hub
          </h2>
          <p className="text-gray-700 mt-2">
            that connects academic institutions, companies, and students
            seamlessly.
          </p>
        </div>
      </section>
    </>
  );
}
