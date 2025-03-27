import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });

export default function Cards({ img, title, description }) {
  return (
    <div
      className={`w-56 bg-[#7AAADD]/[0.11] backdrop-blur-lg rounded-md flex flex-col items-center justify-center text-center px-6 py-8 gap-5 text-[#2F2F2F] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${poppins.className}`}
    >
      <img src={`/images/${img}`} alt="" />
      <div className="flex flex-col items-center">
        <p className="text-white font-bold text-lg pb-2.5">{title}</p>
        <p className="text-white font-light text-lg">{description}</p>
      </div>
    </div>
  );
}
