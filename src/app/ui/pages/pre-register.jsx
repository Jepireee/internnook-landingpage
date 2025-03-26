"use client";
import Image from "next/image";
import { useState } from "react";
export default function PreRegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    <>
      <section
        id="registerPage"
<<<<
        className="bg-[#FFFFFF] w-full grid gap-10 py-5 px-7
====
         md:grid-cols-2 md:px-16 md:py-14"
      >
        <div className="grid grid-cols-2 items-center">
          
          <Image
            src="/images/img_10.png"
            width={360}
            height={920}
            alt="latina"
          />
          <div className="grid grid-cols-1 gap-9 lg:gap-20">
            {iconData.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`flex justify-start items-center ${
                    data.id === 1 ? "-ml-4.5" : data.id === 3 ? "ml-2" : ""
                  }`}
                >
                  <div className="bg-[#135C9F] w-16 h-16 flex justify-center items-center rounded-full z-40">
                    <img
                      src={`/svg/${data.img}.svg`}
                      alt=""
                      className="w-12 h-12"
                    />
                  </div>
``
                  <div className="bg-white h-14 -ml-2 flex justify-start items-center w-50 rounded-r-lg">
                    <p className="text-slate-700 font-semibold ml-5">
                    {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-8 rounded-lg">
          <div className="bg-[#F3F3F3] rounded-2xl w-full h-full p-7 py-3 md:px-14 md:py-14">
            <h1 className="font-bold text-2xl text-slate-400 py-3">Pre-register</h1>

        
            <Image
              src="/images/LOGO_blue_png.png"
              width={281}
              height={53}
              alt="logo"
            />

            <form
              action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfDi7cmdoYhuU5S1r2KNHgSmBTH6-TBxSYBjt_pXbZw362aFA/formResponse"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                name="entry.1361204234"
                type="text"
                placeholder="Company Name"
                className="w-full h-12 bg-white rounded-md px-4 text-slate-900 focus:outline-slate-600 mb-3 mt-5"
                required
              />
              <input
                name="entry.659408088"
                type="text"
                placeholder="Company Email"
                className="w-full h-12 bg-white rounded-md px-4 text-slate-900 focus:outline-slate-600 mb-3"
                required
              />
              <input
                name="entry.1318067195"
                type="text"
                placeholder="Company Address"
                className="w-full h-12 bg-white rounded-md px-4 text-slate-900 focus:outline-slate-600 mb-3"
                required
              />
              <input
                name="entry.1869060843"
                type="text"
                placeholder="Company Person"
                className="w-full h-12 bg-white rounded-md px-4 text-slate-900 focus:outline-slate-600 mb-3"
                required
              />
              <input
                name="entry.1688736167"
                type="text"
                placeholder="Company Number"
                className="w-full h-12 bg-white rounded-md px-4 text-slate-900 focus:outline-slate-600 mb-3"
                required
              />

              <button className=" mt-14 bg-[#135C9F] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 cursor-pointer">
                Pre-register Now
              </button>
            </form>
          </div>
        </div>
        {/* Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-center relative">
              <h3 className="text-lg font-semibold text-green-600">Success!</h3>
              <p className="mt-2 text-gray-700">
                Your registration has been successfully submitted.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
