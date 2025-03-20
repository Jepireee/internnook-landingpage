import Image from "next/image";

export default function PreRegistration() {
  return (
    <>
        <div className="bg-[#F8F8F8] overflow-hidden items-center justify-center flex flex-col h-150">
            <div className="flex flex-row items-center">

            <div className="flex items-center justify-center m-5 p-5 bg-gray-500 rounded-lg h-130 w-150">
                <Image src="/images/image 1.png" alt="latina" width={100} height={100}></Image>
            </div>

            <div className="justify-center m-5 pt-10 pl-20 pr-20 pb-10 bg-gray-100 rounded-lg shadow-lg h-130 w-150">
                <span className="text-xl font-bold text-gray-800">Pre Register</span>
                
                <div className="mt-1">
                    <span className="block mt-1 text-gray-800 font-semibold">Company Name</span>
                    <input className="pl-5 pr-5 h-10 w-110 bg-white text-black rounded-lg shadow-md" type="text" placeholder="Enter Company Name"></input>
                </div>
                
                <div className="mt-1">
                    <span className="block mt-1 text-gray-800 font-semibold">Company Email</span>
                    <input className="pl-5 pr-5 h-10 w-110 bg-white text-black rounded-lg shadow-md" type="text" placeholder="Enter Company Email"></input>
                </div>

                <div className="mt-1">
                    <span className="block mt-1 text-gray-800 font-semibold">Company Number</span>
                    <input className="pl-5 pr-5 h-10 w-110 bg-white text-black rounded-lg shadow-md" type="text" placeholder="Enter Company Number"></input>
                </div>

                <div className="mt-1">
                    <span className="block mt-1 text-gray-800 font-semibold">Contact Person</span>
                    <input className="pl-5 pr-5 h-10 w-110 bg-white text-black rounded-lg shadow-md" type="text" placeholder="Enter Contact Person"></input>
                </div>

                <div className="mt-1">
                    <span className="block mt-1 text-gray-800 font-semibold">Contact Number</span>
                    <input className="pl-5 pr-5 h-10 w-110 bg-white text-black rounded-lg shadow-md" type="text" placeholder="Enter Contact Number"></input>
                </div>

                <button type="button" className="h-10 w-50 mt-5 bg-[#135C9F] text-white font-semibold rounded-lg shadow-lg">
                Pre-Register Now
                </button>
            </div>

            </div>
        </div>
    </>
);

}