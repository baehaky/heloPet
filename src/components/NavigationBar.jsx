import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/10.png";
export default function NavigationBar(props) {
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-slate-100 w-full z-20 top-0 border-b shadow-lg border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <img src={logo} className="w-1/6" />
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile menu */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:hidden w-full flex-col mt-4 `}
          >
            <NavLink
              to="/"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="artikel"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
              }
            >
              Article
            </NavLink>
            <NavLink
              to="shop"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
              }
            >
              Pet Care
            </NavLink>
            {isAuthenticated ? (
              <NavLink
                to="cart"
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                    : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                }
              >
                Keranjang
              </NavLink>
            ) : (
              <NavLink
                to="login"
                className="text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                login
              </NavLink>
            )}
          </div>

          {/* Desktop menu */}
          <div className="items-center justify-center hidden w-full md:flex md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-100">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded font-medium font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="artikel"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded font-medium font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                  }
                >
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded font-medium font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                  }
                >
                  Pet Care
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <NavLink
                      to="cart"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                          : " block py-2 px-3 text-gray-900 rounded font-medium font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                      }
                    >
                      Keranjang {props.size}
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      to="shop"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                          : "block py-2 px-3 text-gray-900 rounded font-medium font-serif hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-400  md:p-0"
                      }
                    >
                      Jadwal Dokter
                    </NavLink>
                  </li> */}
                  <li>
                    <button
                      onClick={() => setisAuthenticated(true)}
                      to="login"
                      type="button"
                      className="block text-white bg-teal-400 hover:bg-teal-500 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to="login"
                    type="button"
                    className="block text-white bg-teal-400 hover:bg-teal-500 font-medium rounded-lg text-sm px-4 py-2 md:p-0"
                  >
                    login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
