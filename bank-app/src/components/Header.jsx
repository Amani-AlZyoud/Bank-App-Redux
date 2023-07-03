import React from "react";
import { Link } from "react-router-dom";
import { getData } from "../actions/actions";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();

  const handleGetData = (customer) => dispatch(getData(customer));

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="text-xl">
          BANK
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <Link to="/accounts" className="md:p-4 py-3 px-0 block">
                Accounts
              </Link>
            </li>
            <li>
              <Link to="/" className="md:p-4 py-3 px-0 block">
                Add Account
              </Link>
            </li>
            <li>
              <Link to="/coins" onClick={() => handleGetData()} className="md:p-4 py-3 px-0 block">
              Cryptocurrencies
              </Link>
            </li>
            <li>
              <Link to="/" className="md:p-4 py-3 px-0 block">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
