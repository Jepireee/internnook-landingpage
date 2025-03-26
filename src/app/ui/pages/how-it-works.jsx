"use client";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function HowItWorksPage() {
  return (
    <>
    <section
      id="worksPage"
      className="relative flex items-center justify-center bg-[#FFFFFF] px-6 lg:px-16 py-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className={`${poppins.className} text-gray-500 text-sm`}>How it works</span>
          <h2 className={`${poppins.className} text-4xl font-extrabold text-gray-900 mt-4`}>
            Let's Get Started
          </h2>
          <div className="mt-6 space-y-4">
            {[ 
              { number: "01", title: "Create Your Profile", text: "Sign up and set up your profile." },
              { number: "02", title: "Get Matched", text: "Our AI pairs you with the best opportunities or candidates." },
              { number: "03", title: "Start Your Journey", text: "Sign agreements digitally and begin your internship." },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-6">
                    <span className={`${poppins.className} text-blue-600 font-extrabold text-lg`}>
                      {step.number}
                    </span>
                    <p className={`${poppins.className} text-gray-700 font-bold text-lg`}>
                      {step.title}
                    </p>
                  </div>
                  <p className={`${poppins.className} text-gray-700 mt-2 ml-12`}>{step.text}</p>
                </div>
                <hr className="my-6 border-[#C7C7C7]/[0.47] w-3/4" />
              </motion.div>
            ))}
          </div>
        </motion.div>

          <div className="relative flex justify-center">
            <img
              src="/images/image 5.png"
              alt="User Working"
              width={500}
              height={500}
              quality={100}
              className="object-contain relative z-10"
            />
            {/* check */}
            <div className="absolute top-[-40px] right-[-1px] bg-[#7AAADD]/[0.11] p-5 rounded-lg shadow-md flex flex-col items-center gap-5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27 47.25C29.6593 47.25 32.2925 46.7262 34.7493 45.7086C37.2062 44.6909 39.4385 43.1993 41.3189 41.3189C43.1993 39.4385 44.6909 37.2062 45.7086 34.7493C46.7262 32.2925 47.25 29.6593 47.25 27C47.25 24.3407 46.7262 21.7075 45.7086 19.2507C44.6909 16.7938 43.1993 14.5615 41.3189 12.6811C39.4385 10.8007 37.2062 9.3091 34.7493 8.29144C32.2925 7.27378 29.6593 6.75 27 6.75C21.6294 6.75 16.4787 8.88348 12.6811 12.6811C8.88348 16.4787 6.75 21.6294 6.75 27C6.75 32.3706 8.88348 37.5213 12.6811 41.3189C16.4787 45.1165 21.6294 47.25 27 47.25ZM26.478 35.19L37.728 21.69L34.272 18.81L24.597 30.4177L19.5907 25.4093L16.4093 28.5907L23.1593 35.3407L24.9008 37.0823L26.478 35.19Z"
                  fill="#135C9F"
                />
              </svg>

              <p className={`${poppins.className} font-bold text-[#2F2F2F]`}>
                Quick, Easy and Hassle Free
              </p>
            </div>
            <div className="absolute bottom-[90px] left-[-20px] bg-[#7AAADD]/[0.11] p-5 rounded-lg shadow-md flex flex-col items-center gap-5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27 47.25C29.6593 47.25 32.2925 46.7262 34.7493 45.7086C37.2062 44.6909 39.4385 43.1993 41.3189 41.3189C43.1993 39.4385 44.6909 37.2062 45.7086 34.7493C46.7262 32.2925 47.25 29.6593 47.25 27C47.25 24.3407 46.7262 21.7075 45.7086 19.2507C44.6909 16.7938 43.1993 14.5615 41.3189 12.6811C39.4385 10.8007 37.2062 9.3091 34.7493 8.29144C32.2925 7.27378 29.6593 6.75 27 6.75C21.6294 6.75 16.4787 8.88348 12.6811 12.6811C8.88348 16.4787 6.75 21.6294 6.75 27C6.75 32.3706 8.88348 37.5213 12.6811 41.3189C16.4787 45.1165 21.6294 47.25 27 47.25ZM26.478 35.19L37.728 21.69L34.272 18.81L24.597 30.4177L19.5907 25.4093L16.4093 28.5907L23.1593 35.3407L24.9008 37.0823L26.478 35.19Z"
                  fill="#135C9F"
                />
              </svg>
              <p className={`${poppins.className} font-bold text-[#2F2F2F]`}>Simple and Seamless</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
