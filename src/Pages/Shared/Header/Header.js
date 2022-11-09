import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signUp">SignUp</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-yellow-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl text-center px-2 ">
          <div className="">
            <Link to="/" className="flex flex-row">
              {" "}
              <img style={{ width: "30%" }} src={logo} alt="" />
              <p>
                HOMEF<small className="text-3xl   text-red-500 text-center ">oo</small>D
              </p>
            </Link>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn p-2">Try For Free</Link>
      </div>
    </div>
  );
};

export default Header;
