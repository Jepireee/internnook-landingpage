import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500"] });

const testimonials = [
    {
      name: "Marie Fe",
      role: "Marketing Intern",
      image: "/images/Avatar.jpg",
      text: "Internnook makes finding internships so much easier. It connects students with the right companies. The platform is simple to use and does a great job of bridging the gap between interns and companies.",
    },
    {
      name: "Jeffrey",
      role: "Programmer Intern",
      image: "/images/Avatar 2.jpg",
      text: "What I love about Internnook is how easy it makes the internship search process. It’s a one-stop platform where students can quickly find opportunities with trusted companies, saving time and effort. ",
    },
    {
      name: "Dian Kristine",
      role: "Marketing Intern",
      image: "/images/Avatar 3.jpg",
      text: "Thanks to Internnook, I found an internship that perfectly matched my field of study. The process was smooth. I highly recommend Internnook to students looking for internships.",
    },
];
export default function Feeback() {
    return (
        <>
            <section id="feedbackPage" className="py-16 text-center bg-[#FFFFFF]">
                <span className={`${poppins.className} text-[#8E8E8E] text-sm mt-2 py-2`}>
                    Feedback
                </span>
                <h2 className={`${poppins.className} text-2xl md:text-3xl font-bold text-gray-900 mt-2`}>
                    We've built trust with <br className="hidden sm:inline" />  reviews from real users
                </h2>
                <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6005 35.5967C14.3765 35.7031 14.1292 35.7511 13.8816 35.7363C13.634 35.7215 13.3942 35.6444 13.1844 35.5121C12.9747 35.3797 12.8019 35.1965 12.6821 34.9795C12.5624 34.7625 12.4995 34.5187 12.4994 34.2709V29.2635C10.256 28.8898 8.23488 27.6878 6.83665 25.8955C5.43841 24.1033 4.76504 21.8516 4.94998 19.5867C5.13491 17.3218 6.16466 15.2089 7.83516 13.6668C9.50566 12.1247 11.695 11.2659 13.9694 11.2605C16.3742 11.261 18.6805 12.2159 20.3808 13.9152C22.0811 15.6144 23.0363 17.9189 23.0363 20.3217C23.0363 25.8932 20.9803 29.7139 18.8811 32.1383C18.0329 33.1245 17.065 34.0014 15.9999 34.7487C15.5942 35.0364 15.1707 35.298 14.7318 35.5321L14.6436 35.5771L14.6162 35.5889L14.6044 35.5947L14.6005 35.5967ZM7.84044 20.3217C7.84044 23.7018 10.5844 26.4435 13.9694 26.4435C14.3592 26.4435 14.7331 26.5982 15.0088 26.8736C15.2845 27.1491 15.4394 27.5227 15.4394 27.9122V31.4509C15.8274 31.1062 16.243 30.695 16.6546 30.2172C18.3539 28.2569 20.0963 25.102 20.0963 20.3217C20.0676 18.7168 19.4093 17.1874 18.2633 16.0626C17.1172 14.9377 15.5749 14.3075 13.9684 14.3075C12.3619 14.3075 10.8196 14.9377 9.6735 16.0626C8.52742 17.1874 7.86917 18.7168 7.84044 20.3217ZM35.6705 35.5967C35.4465 35.7031 35.1992 35.7511 34.9516 35.7363C34.704 35.7215 34.4642 35.6444 34.2544 35.5121C34.0447 35.3797 33.8719 35.1965 33.7521 34.9795C33.6324 34.7625 33.5695 34.5187 33.5694 34.2709V29.2635C31.326 28.8898 29.3049 27.6878 27.9066 25.8955C26.5084 24.1033 25.835 21.8516 26.02 19.5867C26.2049 17.3218 27.2347 15.2089 28.9052 13.6668C30.5757 12.1247 32.765 11.2659 35.0394 11.2605C37.4443 11.261 39.7505 12.2159 41.4508 13.9152C43.1511 15.6144 44.1063 17.9189 44.1063 20.3217C44.1063 25.8932 42.0503 29.7139 39.9511 32.1383C39.1029 33.1245 38.135 34.0014 37.0699 34.7487C36.637 35.0544 36.1838 35.3306 35.7136 35.5752L35.6862 35.5908L35.6744 35.5947L35.6705 35.5967ZM28.9104 20.3217C28.9104 23.7018 31.6544 26.4435 35.0394 26.4435C35.4292 26.4435 35.8031 26.5982 36.0788 26.8736C36.3545 27.1491 36.5094 27.5227 36.5094 27.9122V31.4509C36.8974 31.1062 37.313 30.695 37.7246 30.2172C39.4239 28.2569 41.1663 25.102 41.1663 20.3217C41.1376 18.7168 40.4793 17.1874 39.3333 16.0626C38.1872 14.9377 36.6449 14.3075 35.0384 14.3075C33.4319 14.3075 31.8896 14.9377 30.7435 16.0626C29.5974 17.1874 28.9392 18.7168 28.9104 20.3217Z" fill="black"/>
                            </svg>
                            <p className={`${poppins.className} text-gray-700`}>{`"${testimonial.text}"`}</p>
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={50}
                                height={50}
                                quality={100}
                                className="rounded-full"
                            />
                            <p className={`${poppins.className} font-semibold text-gray-900`}>{`${testimonial.name}`}</p>
                            <p className={`${poppins.className} text-gray-500 text-sm`}>{`${testimonial.role}`}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}