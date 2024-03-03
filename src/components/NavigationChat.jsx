import { Outlet, NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function NavigationChat() {
  return (
    <>
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-teal-400 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">Chat</div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <Link to="/">
                <button>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span className="hover:underline hover:underline-offset-2">
                    Kembali
                  </span>
                </button>
              </Link>
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                1
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-3/4 ">
              <NavLink
                to="id1"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-row items-center hover:bg-gray-400 bg-gray-300 mr-5 rounded-xl p-2"
                    : "flex flex-row items-center hover:bg-gray-400 rounded-xl p-2 mr-5 border border-gray-900"
                }
              >
                <button className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div className="ml-2 text-sm font-semibold">
                    Dokter HelloPet
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
