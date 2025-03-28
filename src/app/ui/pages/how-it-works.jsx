"use client";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function HowItWorksPage() {
  return (
    <>
    <section
      id="worksPage"
      className="relative flex items-center justify-center bg-[#FEFEFE] px-6 lg:px-16 py-25 overflow-hidden"
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
              src="/images/IMG_18.JPG"
              alt="User Working"
              width={800}
              height={700}
              quality={100}
              className="object-contain relative z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
