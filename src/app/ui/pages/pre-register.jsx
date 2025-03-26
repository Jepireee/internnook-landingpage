import Image from "next/image";
import { useState } from "react";

export default function PreRegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [role, setRole] = useState(""); // Dropdown state
  const [scchool_id, setschool_id] = useState(""); // Dropdown state
  const [Year_lvl, setYear_lvl] = useState("");

  const iconData = [
    { id: 1, img: "work", description: "Access to Fresh Talents" },
    { id: 2, img: "computer", description: "Cost-Effective Workforce" },
    { id: 3, img: "ai", description: "Future Talent Pipeline" },
  ];

  return (
    <section
      id="registerPage"
      className="bg-[#FFFFFF] w-full grid gap-10 py-5 px-7 md:grid-cols-2 md:px-16 md:py-14"
    >
      <div className="grid grid-cols-2 items-center">
        <Image src="/images/img_10.png" width={360} height={920} alt="latina" />
        <div className="grid grid-cols-1 gap-9 lg:gap-20">
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
                  className="w-7 h-7 md:w-12 md:h-12 "
                />
              </div>
              <div className="bg-white h-14 -ml-2 flex justify-start items-center w-50 rounded-r-lg">
                <p className="text-slate-700 font-semibold ml-5">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className=" rounded-lg">
        <div className="bg-[#F3F3F3] rounded-2xl w-full h-full p-4 py-3 md:px-14 md:py-14">
          <h1 className="font-bold text-2xl text-slate-400 py-3">
            Pre-register
          </h1>
          <Image
            src="/images/LOGO_blue_png.png"
            width={281}
            height={53}
            alt="logo"
          />

          {/* Dropdown with White Background */}
          <select
            id="role"
            className="w-full p-3 border rounded-md mt-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="company">Company</option>
          </select>

          {/* FORM STARTS HERE */}
          <form
            action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfDi7cmdoYhuU5S1r2KNHgSmBTH6-TBxSYBjt_pXbZw362aFA/formResponse"
            method="POST"
            target="_blank"
            onSubmit={() => setIsSubmitted(true)}
          >
            {/* Company Form - Only Shows When 'Company' is Selected */}
            {role === "company" && (
              <div className="mt-4">
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.659408088"
                  type="email"
                  placeholder="Company Email"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1318067195"
                  type="text"
                  placeholder="Company Address"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1869060843"
                  type="text"
                  placeholder="Contact Person"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1688736167"
                  type="text"
                  placeholder="Contact Number"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
              </div>
            )}

            {/* Student Form */}
            {role === "student" && (
              <div className="mt-5">
                <select
                  id="school_id"
                  className="w-full p-3 border rounded-md mt-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
                  value={scchool_id}
                  onChange={(e) => setschool_id(e.target.value)}
                >
                  <option value="">Select School</option>
                  <option value="NCF">NCF</option>
                </select>
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="Course"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <select
                  id="Year_lvl"
                  className="w-full p-3 border rounded-md mt-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
                  value={Year_lvl}
                  onChange={(e) => setYear_lvl(e.target.value)}
                >
                  <option value="">Year Level</option>
                  <option value="1styr">1st Year</option>
                  <option value="2ndyr">2nd Year</option>
                  <option value="3rdyr">3rd Year</option>
                  <option value="4thyr">4th Year</option>
                </select>
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="School Email"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="Current Town"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="Contact Number"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
                <input
                  name="entry.1361204234"
                  type="text"
                  placeholder="Target Industry"
                  className="w-full p-3 border rounded-md mt-2 bg-white text-gray-700"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-[#135C9F] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 cursor-pointer w-full"
            >
              Pre-register Now
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-blue bg-opacity-50">
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
  );
}
