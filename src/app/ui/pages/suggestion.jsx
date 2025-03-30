"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500"] });

export default function SuggestionPage() {
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
  return (
    <section
      id="suggestionPage"
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-[#FFFFFF] relative"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-center mb-4">
            <img
              src="/images/Logo_blue_eyeglasses.png"
              alt="Logo"
              className="w-18 h-9"
            />
          </div>
          <h2 className={`${poppins.className} text-[#135C9F] text-2xl sm:text-3xl font-bold`}>
            Want us to be at your nook?
          </h2>
          <p className={`${poppins.className} text-[#135C9F] font-semibold text-sm sm:text-base mt-1 `}>
            Suggest your school and bring internships closer to you!
          </p>
          <form
            className="text-gray-900 mt-15 space-y-4"
            action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfc416xulDfDbpESKWjqyR-v9WdM3IcD9fgCpmF-CmooCIXZQ/formResponse"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              name="entry.1595104939"
              type="text"
              placeholder="Institution"
              className= {`${poppins.className} w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#135C9F]`}
              required
            />
            <button
              type="submit"
              className={`${poppins.className} mt-8 bg-[#135C9F] text-white px-6 py-3 rounded-md 
                text-sm font-medium shadow-md hover:bg-blue-700 cursor-pointer`}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/IMG_5.JPG"
            alt="Students Working"
            width={500}
            height={350}
            quality={100}
            className="rounded-2xl shadow-md w-full max-w-lg"
          />
        </div>
      </div>
      {/* Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-center relative">
            <h3 className={`${poppins.className} text-lg font-semibold text-green-600`}>Success!</h3>
            <p className={`${poppins.className} mt-2 text-gray-700 `}>
              Your suggestion has been successfully submitted.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={`${poppins.className} mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
