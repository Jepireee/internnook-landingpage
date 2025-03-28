import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500"] });;

export default function Footer() {
  return (
    <>
      <footer id="contactPage" className="bg-[#FFFFFF] py-30 text-gray-700">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          <div className="md:w-1/3">
            <img
              src="/images/LOGO_blue_png.png"
              alt="Internnook Logo"
              className="h-8 mb-2 mx-auto md:mx-0"
            />
            <p className={`${poppins.className} text-sm`}>
              Internship made easy, <br /> right at your nook.
            </p>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold text-[#135C9F]">Office</h4>
            <p className={`${poppins.className} text-sm`}>
            NCF Tigre-TBI 3F Admin Bldg. Naga College Foundation Inc., MT.  
            Villanueva, Liboton Naga City, Philippines.
            </p>
          </div>
          <div className="md:w-1/3">
            <h4 className={`${poppins.className} font-semibold text-[#135C9F]`}> Contact</h4>
            <p className={`${poppins.className} text-sm`}>hello@internnook.com</p>
          </div>
          <div className="md:w-1/3">
            <h4 className={`${poppins.className} font-semibold text-[#135C9F]`}>Follow us</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="https://www.facebook.com/ncftigretbi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.2 2.875C12.9734 2.875 11.797 3.36228 10.9296 4.22963C10.0623 5.09699 9.575 6.27337 9.575 7.5V10.075H7.1C6.976 10.075 6.875 10.175 6.875 10.3V13.7C6.875 13.824 6.975 13.925 7.1 13.925H9.575V20.9C9.575 21.024 9.675 21.125 9.8 21.125H13.2C13.324 21.125 13.425 21.025 13.425 20.9V13.925H15.922C16.025 13.925 16.115 13.855 16.14 13.755L16.99 10.355C16.9984 10.3218 16.9991 10.2872 16.992 10.2537C16.985 10.2202 16.9704 10.1888 16.9494 10.1618C16.9283 10.1348 16.9014 10.1129 16.8707 10.0979C16.84 10.0829 16.8062 10.075 16.772 10.075H13.425V7.5C13.425 7.39823 13.445 7.29745 13.484 7.20342C13.5229 7.10939 13.58 7.02396 13.652 6.95199C13.724 6.88003 13.8094 6.82294 13.9034 6.78399C13.9974 6.74505 14.0982 6.725 14.2 6.725H16.8C16.924 6.725 17.025 6.625 17.025 6.5V3.1C17.025 2.976 16.925 2.875 16.8 2.875H14.2Z"
                    fill="#135C9F"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ncftigretbi"
                className="text-gray-500 hover:text-blue-600"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6002 5.82C15.9167 5.03953 15.5401 4.0374 15.5402 3H12.4502V15.4C12.4268 16.0712 12.1437 16.7071 11.6605 17.1735C11.1773 17.6399 10.5318 17.9004 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z" fill="#135C9F"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className= {`${poppins.className} text-center text-sm text-gray-500 mt-15`}>
            © 2025, Internnook. All rights reserved.
          </div>
      </footer>
    </>
  );
}
