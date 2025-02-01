import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const data = [
    {
      path: "home",
      name: "Home",
    },
    {
      path: "features",
      name: "Features",
    },
    {
      path: "testimonials",
      name: "Testimonials",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-5 sticky top-0 z-30 bg-white border-b-[1px] border-gray-400">
      <>
        {showSidebar ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <div className="w-full  flex justify-between items-center lg:justify-between">
            <div className=" ">
              <Link
                className="cursor-pointer font-medium"
                to="home"
                smooth={true}
                duration={500}
              >
                LittleCoder
              </Link>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-around ">
              {data.map((item, i) => {
                return (
                  <ul key={i}>
                    <Link
                      className="cursor-pointer"
                      to={item.path}
                      smooth={true}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </ul>
                );
              })}
            </div>

            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="flex items-center cursor-pointer lg:hidden "
              fill="#000000"
              viewBox="0 0 100 80"
              width="30"
              height="30"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </div>
        )}

        <div
          className={`top-0 right-0 w-[75vw] bg-gray-800  p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="mt-20 text-4xl w-full text-nowrap font-semibold text-white">
            {data.map((item, i) => {
              return (
                <ul key={i}>
                  <Link
                    className="cursor-pointer"
                    to={item.path}
                    smooth={true}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
