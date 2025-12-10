import { Link, useNavigate } from "react-router-dom";
export default function nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar shadow-sm px-4 dark:text-white text-gray-400">
        <div className="navbar-start md:pl-50 pl-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="../contact">تواصل معنا</Link>
              </li>
              <li>
                <Link to="../about">معلومات عنا</Link>
              </li>
              <li>
                <Link to="../moto">الدراجات</Link>
              </li>
              <li>
                <Link to="/">الصفحة الرئيسية</Link>
              </li>
            </ul>
          </div>
          <div className=" flex items-center">
            <div className="shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M7 3.5a.5.5 0 0 1 .5-.5h1.112a1.5 1.5 0 0 1 1.36.868l.335.722c.274-.359.707-.59 1.193-.59h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1q-.038 0-.075-.002l.497 1.07Q12.2 8 12.5 8a2.5 2.5 0 1 1-1.485.489l-.16-.345A1.5 1.5 0 0 1 9.5 9h-.191L9 9.618A2.5 2.5 0 0 1 6.764 11H5.95A2.5 2.5 0 1 1 3.5 8h1.691l.34-.68A2.39 2.39 0 0 1 7.667 6H9.5q.199 0 .382.05l-.817-1.76A.5.5 0 0 0 8.612 4H7.5a.5.5 0 0 1-.5-.5m5.047 7.21l-.596-1.282a1.5 1.5 0 1 0 .907-.421l.595 1.282a.5.5 0 0 1-.906.422M9.01 8h.49a.5.5 0 0 0 0-1H7.667c-.526 0-1.007.297-1.242.768L6.31 8h2.702m-.82 1h-2.69c.218.29.374.63.449 1h.814a1.5 1.5 0 0 0 1.342-.83zM3.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M11 5.5a.5.5 0 0 0 .5.5h.5V5h-.5a.5.5 0 0 0-.5.5"
                />
              </svg>
            </div>
            <a className="btn btn-ghost text-lg">RideShare</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="../contact">تواصل معنا</Link>
            </li>
            <li>
              <Link to="../about">معلومات عنا</Link>
            </li>
            <li>
              <Link to="../moto">الدراجات</Link>
            </li>
            <li>
              <Link to="/">الصفحة الرئيسية</Link>
            </li>
          </ul>
          <a
            onClick={() => navigate("/contact")}
            className="btn py-1.5 px-5 cursor-pointer text-gray-500 dark:text-gray-300 bg-white dark:bg-black rounded-lg"
          >
            احجز الأن
          </a>
        </div>
      </div>
    </>
  );
}
