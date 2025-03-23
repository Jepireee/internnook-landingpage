"use client";
import Image from "next/image";
export default function TaglinPages() {
  return (
    <>
      {/* Student Tagline */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-6 sm:px-12 md:px-20 py-12 bg-[#F8F8F8] relative"> 
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <div className="col-span-1 row-span-2">
            <Image
              src="/images/IMG_9.JPG"
              alt="Person with Laptop"
              width={400}
              height={500}
              quality={100}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <Image
            src="/images/IMG_8.JPG"
            alt="Tablet Screen"
            width={200}
            height={200}
            quality={100}
            className="rounded-xl object-cover w-full"
          />
          <Image
            src="/images/IMG_5.JPG"
            alt="Team Discussion"
            width={200}
            height={200}
            quality={100}
            className="rounded-xl object-cover w-full"
          />
        </div>
        <div className="bg-[#7AAADD]/[0.11] p-6 lg:p-10 rounded-lg shadow-md max-w-md">
          <span className="text-gray-500 text-sm">Students</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2 italic">
            “where dream jobs take root!”
          </h2>
          <p className="text-gray-700 mt-4">
            Internook helps students build a strong foundation for their
            future careers by connecting them with the right internship
            opportunities to grow and succeed.
          </p>
        </div>
      </section>

      {/* Companies */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-[#F8F8F8] relative">
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 ">
        <div className="col-span-1 row-span-2">
          <Image
            src="/images/IMG_9.JPG"
            alt="Person with Laptop"
            width={400}
            height={500}
            quality={100}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <Image
          src="/images/IMG_10.JPG"
          alt="Tablet Screen"
          width={200}
          height={200}
          quality={100}
          className="rounded-xl object-cover w-full"
        />
        <Image
          src="/images/IMG_6.JPG"
          alt="Team Discussion"
          width={200}
          height={200}
          quality={100}
          className="rounded-xl object-cover w-full"
        />
      </div>
      
      <div className="absolute bottom-40 right-0 w-70 h-70 bg-orange-200 rounded-full hidden md:block z-0"></div> 
      <div className="bg-[#7AAADD]/[0.11] shadow-lg rounded-lg p-6 lg:p-10 max-w-md relative z-10" >
        <span className="text-[#8E8E8E] text-sm mt-2 py-2">Companies</span>
          <h2 className="italic text-2xl font-bold text-gray-900 mt-2">
            “the smart way to look!”
          </h2>
          <p className="text-gray-700 mt-2">
            Internnook simplifies the search for top student talent, making
            recruitment and internship management more efficient through
            AI-driven matching and smart contracts.
          </p>
        </div>
      </section>

      {/* School and Universities Tagline */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-6 sm:px-12 md:px-20 py-12 bg-[#F8F8F8] relative"> 
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
            src="/images/IMG_3.JPG"
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
        <div className="bg-[#7AAADD]/[0.11] p-6 lg:p-10 rounded-lg shadow-md max-w-md">
          <span className="text-gray-500 text-sm">School and Universities</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2 italic">
          “where students find their nook!”{" "}
          </h2>
          <p className="text-gray-700 mt-4">
            Internnook provides a seamless platform for schools to connect
            students with the best internship opportunities, ensuring they
            find the right fit for their career development.
          </p>
        </div>
      </section>
    </>
  );
}
