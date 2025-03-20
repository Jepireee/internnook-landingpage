"use client";
import Image from "next/image";
export default function TaglinPages() {
  return (
    <>
      {/* Student Tagline */}
      <section className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="bg-[#E9F2FA] p-6 lg:p-10 rounded-lg shadow-md max-w-md">
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
      </section>

      {/* Companies Tagline */}
      <section
        id="aboutPage"
        className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute -z-10 w-64 h-64 bg-orange-200 rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-56 h-56 bg-orange-300 rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
            <div className="grid grid-cols-2 gap-3 items-start relative">
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
        </div>
      </section>

      {/* School and Universities Tagline */}
      <section className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="bg-[#E9F2FA] p-6 lg:p-10 rounded-lg shadow-md max-w-md">
            <span className="text-gray-500 text-sm">
              School and Universities
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 italic">
              {" "}
              “where students find their nook!”{" "}
            </h2>
            <p className="text-gray-700 mt-4">
              Internnook provides a seamless platform for schools to connect
              students with the best internship opportunities, ensuring they
              find the right fit for their career development.
            </p>
          </div>
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
      </section>
    </>
  );
}
