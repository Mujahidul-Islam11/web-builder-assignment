/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex py-2 w-full justify-center text-[#c6cbcf] bg-[#212731]">
      <div className="flex gap-3 md:gap-16 items-center">
      <div className="flex md:hidden ">
      <IoIosSearch className="text-xl bg-white rounded-full shadow-xl shadow-white"/>
      </div>
        <label className="input input-bordered hidden md:flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <NavLink>
          <h2 className="text-sm">Categories</h2>
        </NavLink>
        <NavLink>
          <h2 className="text-sm">Website Builder</h2>
        </NavLink>
        <NavLink>
          <h2 className="text-sm">Today's deals</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
