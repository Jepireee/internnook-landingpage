"use client";
import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <section
        id="aboutPage"
        className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute -z-10 w-64 h-64 bg-orange-200 rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-56 h-56 bg-orange-300 rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
            <div className="grid grid-cols-2 gap-4 items-start">
              <Image
                src="/images/IMG_9.JPG"
                alt="Group Meeting"
                width={360}
                height={820}
                className="rounded-lg shadow-md object-cover"
              />
              <div className="flex flex-col gap-3">
                <Image
                  src="/images/IMG_8.JPG"
                  alt="Team Collaboration"
                  width={500}
                  height={900}
                  className="rounded-lg shadow-md object-cover"
                />
                <Image
                  src="/images/IMG_6.JPG"
                  alt="Workspace Collaboration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
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
        </div>
      </section>
    </>
  );
}
