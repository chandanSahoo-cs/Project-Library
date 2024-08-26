import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex align-center bg-[#212224] py-5 justify-between">
      <div className="flex align-center">
        <img
          src="https://www.indonez.com/html-demo/liquid/img/user/header-logo-6ohuZh.svg"
          alt="Logo"
          className="mx-5 w-32"
        />
      </div>
      <div className="flex">
        <Link to="/create-account">
          <button className="px-5 py-2 text-sm bg-[#fc5b3f] rounded-md font-bold text-white hidden md:block">
            CREATE ACCOUNT
          </button>
        </Link>
        <img
          src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png"
          alt="nav-logo"
          className="hidden h-10 w-10 rounded-full mx-3 md:inline"
        />
        <div>
          <span className="material-symbols-outlined w-5 mr-5 text-white md:invisible md:w-0">
            Menu
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
