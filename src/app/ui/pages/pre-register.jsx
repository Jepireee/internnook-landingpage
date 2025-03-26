import Image from "next/image";
import { useState } from "react";

export default function PreRegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [role, setRole] = useState(""); // Dropdown state

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setRole(""); // Reset dropdown selection
  };

  const iconData = [
    { id: 1, img: "work", description: "Access to Fresh Talents" },
    { id: 2, img: "computer", description: "Cost-Effective Workforce" },
    { id: 3, img: "ai", description: "Future Talent Pipeline" },
  ];

  return (

    <>
      <section
        id="registerPage"

        className="bg-[#FFFFFF] w-full grid gap-10 py-5 px-7
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
      </div>

      {/* FORM */}
      <div className="px-8 rounded-lg">
        <div className="bg-[#F3F3F3] rounded-2xl w-full h-full p-7 py-3 md:px-14 md:py-14">
          <h1 className="font-bold text-2xl text-slate-400 py-3">Pre-register</h1>
          <Image src="/images/LOGO_blue_png.png" width={281} height={53} alt="logo" />

          {/* Dropdown with White Background */}
          <select
            id="role"
            className="w-full p-3 border rounded-md mt-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="intern">Intern</option>
            <option value="coordinator">Coordinator</option>
            <option value="company">Company</option>
          </select>

          {/* Company Form - Only Shows When 'Company' is Selected */}
          {role === "company" && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
              />
              <input
                type="email"
                placeholder="Company Email"
                className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
              />
              <input
                type="text"
                placeholder="Company Address"
                className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
              />
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
              />
              <input
                type="number"
                placeholder="Contact Number"
                className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="mt-6 bg-[#135C9F] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 cursor-pointer w-full"
          >
            Pre-register Now
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-blue bg-opacity-50">
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-center relative">
            <h3 className="text-lg font-semibold text-green-600">Success!</h3>
            <p className="mt-2 text-gray-700">Your registration has been successfully submitted.</p>
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
  );
}