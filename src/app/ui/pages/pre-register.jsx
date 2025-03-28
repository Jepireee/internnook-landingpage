"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500"] });;

export default function PreRegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset();
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  };


  const iconData = [
    {
      id: 1,
      img: "work",
      description: "Access to Fresh Talents"
    },
    {
      id: 2,
      img: "computer",
      description: "Cost-Effective Workforce"
    },
    {
      id: 3,
      img: "ai",
      description: "Future Talent Pipeline"
    },
  ];

  return (
    <section
      id="registerPage"
      className="bg-[#FEFEFE] w-full grid gap-10 py-5 px-7 md:grid-cols-2 md:px-16 md:py-14"
    >
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-[360px] h-[500px] flex justify-center items-center flex-shrink-0">
          <Image 
            src="/images/img_10.png" 
            width={360} 
            height={500} 
            alt="latina" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-9 lg:gap-20 flex-grow">
          {iconData.map((data) => (
            <div
              key={data.id}
              className={`flex justify-start items-center ${
                data.id === 1 ? "-ml-4.5" : data.id === 3 ? "ml-2" : ""
              }`}
            >
              <div className="bg-[#135C9F] w-14 h-14 md:w-16 md:h-16 flex justify-center items-center rounded-full z-20">
                <img
                  src={`/svg/${data.img}.svg`}
                  alt=""
                  className="w-7 h-7 md:w-12 md:h-12"
                />
              </div>
              <div className="bg-white h-14 -ml-2 flex justify-start items-center w-50 rounded-r-lg">
                <p className={`${poppins.className} font-semibold text-[#135C9F] text-slate-700 ml-5`}>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 rounded-lg">
        <div className="rounded-2xl w-full h-full p-7 md:px-14 md:py-14">
          <h2 className={`${poppins.className} font-bold text-2xl text-slate-400 py-3 `}>Pre-register</h2>
          <Image src="/images/LOGO_blue_png.png" 
            width={281} 
            height={53} 
            alt="logo" 
          />
          <div className="relative">
            <select onChange={(e) => setUserType(e.target.value)} 
              className={`${poppins.className} w-full p-4 border border-gray-300 border rounded-md mt-8 bg-white 
              text-gray-700 focus:outline-none focus:border-[#135C9F] appearance-none`}>
                
              <option className="rounded-md" value="">Select Role</option>
              <option className="border rounded-md" value="company">Company</option>
              <option className="border rounded-md" value="student">Student</option>
            </select>
          
            <div className="absolute inset-y-16 right-5 flex items-center pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1191_324)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.2981 8.62129L5.64114 2.96429L7.05514 1.55029L12.0051 6.50029L16.9551 1.55029L18.3691 2.96429L12.7121 8.62129C12.5246 8.80876 12.2703 8.91408 12.0051 8.91408C11.74 8.91408 11.4857 8.80876 11.2981 8.62129Z" fill="#5E5E5E"/>
                </g>
              </svg>
            </div>
          </div>

          {userType === "company" && (
            <form
              action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfDi7cmdoYhuU5S1r2KNHgSmBTH6-TBxSYBjt_pXbZw362aFA/formResponse"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                name="entry.1361204234"
                type="text"
                placeholder="Company Name"
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 mt-5`}
                required
              />
              
              <input
                name="entry.659408088"
                type="email"
                placeholder="Company Email"
                className= {`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required
              />
              <input
                name="entry.1318067195"
                type="text"
                placeholder="Company Address"
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required
              />
              <input
                name="entry.1869060843"
                type="text"
                placeholder="Company Person"
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required
              />
              <input
                name="entry.1688736167"
                type="text"
                placeholder="Company Number"
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required
              />

              <button className={`${poppins.className} mt-14 bg-[#135C9F] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 cursor-pointer`}>
                Pre-register Now
              </button>
            </form>
          )}

          {userType === "student" && (
            <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfDi7cmdoYhuU5S1r2KNHgSmBTH6-TBxSYBjt_pXbZw362aFA/formResponse" method="POST" onSubmit={handleSubmit}>
              <div className="relative">
                <select 
                  name="entry.1576066936"
                  id="options"
                  className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                    px-4 text-slate-900 text-gray-700 focus:outline-none focus:border-[#135C9F] mb-3 mt-5 appearance-none`} 
                  required
                  >
                  <option className="text-gray-500" value="">Select School</option>
                  <option value="Naga College Foundation, Inc.">Naga College Foundation, Inc.</option>
                </select>
                <div className="absolute inset-y-11 right-5 flex items-center pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1191_324)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.2981 8.62129L5.64114 2.96429L7.05514 1.55029L12.0051 6.50029L16.9551 1.55029L18.3691 2.96429L12.7121 8.62129C12.5246 8.80876 12.2703 8.91408 12.0051 8.91408C11.74 8.91408 11.4857 8.80876 11.2981 8.62129Z" fill="#5E5E5E"/>
                    </g>
                  </svg>
                </div>
              </div>
              <input 
                name="entry.2003147842"
                type="text" 
                placeholder="Student Name" 
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required 
              />
              <input 
                name="entry.54877911"
                type="text" 
                placeholder="Course" 
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required 
              />
              <div className="relative">
                <select 
                  name="entry.1412037672"
                  id="options"
                  className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                    px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 appearance-none`}
                  required
                  >
                  <option value="">Year Level</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
                <div className="absolute -inset-y-1 right-5 flex items-center pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1191_324)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.2981 8.62129L5.64114 2.96429L7.05514 1.55029L12.0051 6.50029L16.9551 1.55029L18.3691 2.96429L12.7121 8.62129C12.5246 8.80876 12.2703 8.91408 12.0051 8.91408C11.74 8.91408 11.4857 8.80876 11.2981 8.62129Z" fill="#5E5E5E"/>
                    </g>
                  </svg>
                </div>
              </div>
              <input 
                name="entry.49334285"
                type="email" 
                placeholder="School Email" 
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required 
              />
              <input 
                name="entry.620285242"
                type="text" 
                placeholder="Current Town" 
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
              />
              <input 
                name="entry.1789346050"
                type="text" 
                placeholder="Contact Number" 
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
              />
              <input 
                name="entry.541873416"
                type="text" 
                placeholder="Target Industry" 
                className={`${poppins.className} w-full h-12 border border-gray-300 bg-white rounded-md 
                  px-4 text-slate-900 focus:outline-none focus:border-[#135C9F] mb-3 `}
                required 
              />

              <button className={`${poppins.className} mt-5 bg-[#135C9F] text-white px-6 py-3 rounded-md`}>
                Pre-register Now
              </button>
            </form>
          )}
          {/* Modal */}
           {isSubmitted && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
              <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-center relative">
                <h3 className={`${poppins.className} text-lg font-semibold text-green-600`}>Success!</h3>
                <p className={`${poppins.className} mt-2 text-gray-700 `}>Your registration has been successfully submitted.</p>
                <button onClick={() => setIsSubmitted(false)} className={`${poppins.className} mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg`}>Close</button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}