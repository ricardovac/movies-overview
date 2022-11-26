import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsLightbulbFill } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import SearchInput from "../components/SearchInput";

const Layout = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/login");
    }
  }

  return (
    <>
      <div className={`${darkToggle && "dark"}`}>
        <nav
          className={`px-2 bg-slate-900 dark:bg-gray-50 border-gray-200  md:dark:bg-gray-50 dark:border-gray-700 `}
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <img
                src={Logo}
                className="h-6 mr-3 sm:h-10"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black text-white">
                SatFlix
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-multi-level"
            >
              <ul className="flex flex-col justify-center items-center p-4 mt-4 border border-gray-100 rounded-lg bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-900 dark:bg-gray-50 md:dark:bg-gray-50 dark:border-gray-700">
                <button
                  id="theme-toggle"
                  type="button"
                  className="text-gray-400 dark:text-gray-500 hover:bg-gray-700 dark:hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-200 rounded-lg text-sm p-2.5"
                  onClick={() => {
                    setDarkToggle(!darkToggle);
                    setOpen(false);
                  }}
                >
                  <BsLightbulbFill className="m-0 p-0 text-xl" />
                </button>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="dropdown">
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                      onClick={handleDropDown}
                    >
                      Account
                      <svg
                        className="ml-2 w-4 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <div
                      id="dropdown"
                      className={`z-10 bg-white rounded divide-y divide-gray-100 shadow ${
                        isOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul className="absolute z-10 bg-white rounded divide-y divide-gray-100 shadow ">
                        <li>
                          <Link
                            to="/login"
                            className="block py-2 px-6 hover:bg-gray-100 bg-white rounded-sm"
                          >
                            Sign In
                          </Link>
                          <Link
                            to="/earnings"
                            className="block py-2 px-6 hover:bg-gray-100 bg-white rounded-sm"
                          >
                            Earnings
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to="friends"
                    className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-700 md:dark:hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Friends
                  </Link>
                </li>
                <li>
                  <Link
                    to="movies"
                    className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-700 md:dark:hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-700 md:dark:hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
