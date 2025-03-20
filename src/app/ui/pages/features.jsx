"use client";
import Image from "next/image";
import Cards from "../components/Cards";
export default function FeaturesPage() {
  const cardData = [
    {
      id: 1,
      title: "TalentMatch AI",
      description: "Provides the ideal intern to the position required.",
      img: "talentMatch.png",
    },
    {
      id: 2,
      title: "SmartCon",
      description: "Creates digital contracts that connect all parties.",
      img: "smartCon.png",
    },
    {
      id: 3,
      title: "CV Builder",
      description: "Builds ATS-ready Curriculum Vitae for students.",
      img: "cvBuilder.png",
    },
    {
      id: 4,
      title: "ModRadar",
      description:
        "Allows institutions to actively track performance of deployed interns",
      img: "modRadar.png",
    },
  ];
  return (
    <>
      <section
        id="featuresPage"
        className="w-full min-h-screen bg-[#F8F8F8] flex flex-col items-center gap-7 px-4 py-10"
      >
        <div className="flex flex-col items-center gap-3 text-[#2F2F2F]">
          <span className="text-[#8E8E8E] text-sm mt-2 py-2">Features</span>
          <h1 className="font-bold text-3xl">Internnook's Key Features</h1>
          <div className="text-wrap max-w-2xl text-center">
            <p className="font-light text-xl">
              Internnook connects students, companies, and schools through
              innovative features designed to simplify and enhance the
              internship experience.
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full max-w-5xl mx-auto place-items-center">
          {cardData.map((data) => (
            <Cards 
              key={data.id} 
              title={data.title} 
              description={data.description} 
              img={data.img} 
            />
          ))}
        </div>

      </section>
    </>
  );
}
