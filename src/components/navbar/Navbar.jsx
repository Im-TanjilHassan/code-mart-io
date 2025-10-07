import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="font-bold text-2xl">
          <span className="text-orange-600">C</span>ode<span className="text-orange-600">M</span>art.<span className="text-orange-600">io</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
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
        <a className="btn text-[1rem] bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold">
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
