import Link from "next/link";
export default function Navbar() {
  const navData = [
    {
      id: 1,
      title: "Home",
      address: "homePage",
    },
    {
      id: 2,
      title: "About",
      address: "aboutPage",
    },
    {
      id: 3,
      title: "Features",
      address: "featuresPage",
    },
    {
      id: 5,
      title: "Contact",
      address: "ContactPage",
    },
    {
      id: 4,
      title: "Pre-Register",
      address: "registerPage",
    },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-[#F8F8F8]  z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            <img src="/images/LOGO_blue_png.png" alt="" className="w-55 h-8" />
          </Link>

          <nav className="flex space-x-8 text-gray-700">
            {navData.map((data) => {
              return (
                <p
                  key={data.id}
                  className="hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    document.getElementById(`${data.address}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {data.title}
                </p>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
