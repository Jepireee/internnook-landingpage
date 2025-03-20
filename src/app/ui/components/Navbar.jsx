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
      <header className="fixed top-0 left-0 w-full h-16 bg-[#F8F8F8] z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/">
            <a className="text-2xl font-bold text-blue-900">
              <img
                src="/images/LOGO_blue_png.png"
                alt="Logo"
                className="w-55 h-8"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-700">
            {navData.map((data) => (
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
            ))}
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4">
          <button onClick={toggleSidebar} className="focus:outline-none mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 text-gray-700">
            {navData.map((data) => (
              <p
                key={data.id}
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => {
                  document.getElementById(`${data.address}`)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setSidebarOpen(false);
                }}
              >
                {data.title}
              </p>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
