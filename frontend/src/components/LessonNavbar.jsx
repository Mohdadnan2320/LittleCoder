import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const LessonNavbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const chapters = [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/lesson",
        title: "Lesson",
      },
        {
          path: "/progress",
          title: "Progress",
        },
        {
          path: "/quiz",
          title: "Quiz",
        }
    ]

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
                to="/"
              >
                LittleCoder
              </Link>
            </div>

            {/* <div className="hidden lg:flex lg:w-1/2 lg:justify-around ">
              {chapters.map((item, i) => {
              return (
                <ul key={i}>
                  <Link className="cursor-pointer" to=''>
                  {item.title}
                  </Link>                      
                </ul>
              );
            })}
            </div> */}

            <HiOutlineMenuAlt1
            size={20}
              onClick={() => setShowSidebar(!showSidebar)}
              className="flex items-center cursor-pointer "
            />
          </div>
        )}

        <div
          className={`top-0 right-0 w-[75vw] bg-gray-800  p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          } lg:w-[45vw] lg:text-center`}
        >
          <div className="mt-20 text-4xl w-full text-nowrap font-semibold text-white">
            {chapters.map((item, i) => {
            return (
              <ul key={i}>
                 <Link className="cursor-pointer" to={item.path}>
                  {item.title}
                  </Link>  
              </ul>
            );
          })}
          </div>
        </div>
      </>
    </div>
  );
}

export default LessonNavbar;


