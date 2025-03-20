"use client";
import Image from "next/image";
import Cards from "../components/Cards";
export default function FeaturesPage() {
  const cardData = [
    {
      id: 1,
      title: "TalentMatch AI",
      description: "Provides the ideal intern to the position required.",
      img: "asset.png",
    },
    {
      id: 2,
      title: "SmartCon",
      description: "Creates digital contracts that connect all parties.",
      img: "asset.png",
    },
    {
      id: 3,
      title: "CV Builder",
      description: "Builds ATS-ready Curriculum Vitae for students.",
      img: "asset.png",
    },
    {
      id: 4,
      title: "ModRadar",
      description:
        "Allows institutions to actively track performance of deployed interns",
      img: "asset.png",
    },
  ];
  return (
    <>
      <section
        id="featuresPage"
        className="w-full h-screen bg-[#F8F8F8] flex flex-col justify-start items-center gap-7"
      >
        <div className="flex flex-col items-center gap-3 text-[#2F2F2F]">
          <p className="font-medium text-[#2F2F2F]">Features</p>
          <h1 className="font-medium text-3xl">Internnook's Key Features</h1>
          <div className="text-wrap max-w-2xl text-center">
            <p className="font-light text-xl">
              Internnook connects students, companies, and schools through
              innovative features designed to simplify and enhance the
              internship experience.
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="flex gap-4">
          {cardData.map((data) => {
            return (
              <Cards
                key={data.id}
                title={data.title}
                description={data.description}
                img={data.img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
