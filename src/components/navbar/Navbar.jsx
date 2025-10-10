import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { RiCodeAiLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-10">
      <div className="navbar-start w-2/2 md:w-1/2 lg:w-1/2">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow space-y-5 p-3"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-bold border-b-2 border-orange-600 transition"
                  : "text-gray-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-bold border-b-2 border-orange-600 transition"
                  : "text-gray-600"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-bold border-b-2 border-orange-600 transition"
                  : "text-gray-600"
              }
            >
              installation
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold flex flex-col justify-center md:flex-row lg:flex-row items-center w-full md:w-auto lg:w-auto"
        >
          <RiCodeAiLine className="mr-2 text-orange-600 text-3xl" />
          <div className="text-md md:text-2xl lg:text-2xl">
            <span className="text-orange-600">C</span>ode
            <span className="text-orange-600">M</span>art.
            <span className="text-orange-600">io</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-1 text-[1rem] gap-5 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600 transition"
                : "text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600 transition"
                : "text-gray-600"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-bold border-b-2 border-orange-600 transition"
                : "text-gray-600"
            }
          >
            installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Im-TanjilHassan"
          className="btn text-[1rem] bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
