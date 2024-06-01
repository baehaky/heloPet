import { NavLink, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

export default function DoctorSidebar() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [Patient, setPatient] = useState([]);
  const { setAuthUser } = useAuthContext();
  const isSelected = selectedConversation?._id === Patient._id;
  const result = JSON.parse(localStorage.getItem("doctor"));
  const navigate = useNavigate();

  const useLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data) {
        setAuthUser(null);
        localStorage.removeItem("doctor");
        window.location.reload();
      } else {
        toast.error("gagal");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!result) {
      navigate("/login");
    } else {
      fetch(`http://localhost:5000/api/getuser`)
        .then((response) => response.json())
        .then((data) => {
          setPatient(data);
        })
        .catch((error) => {
          console.error("Error fetching doctors:", error);
        });
    }
  }, [result]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main className="flex w-full">
      <Toaster />
      <div className="sticky left-0 top-0 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-screen w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
            Selamat Datang!
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <NavLink
            to="/doctor/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center p-3 bg-opacity-80 rounded-md text-blue-900 outline-none bg-blue-50"
                : "flex items-center p-3"
            }
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Dashboard
          </NavLink>
          <li
            style={{ listStyleType: "none" }}
            className={`${dropdownOpen ? "bg-slate-100 rounded-lg" : ""}`}
          >
            <button
              type="button"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              onClick={toggleDropdown}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                Notifikasi
              </span>
              <svg
                sidebar-toggle-item
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul
              className={
                dropdownOpen ? "pb-2 pl-2 h-72 overflow-y-auto" : "hidden"
              }
            >
              {Patient.map((ptn, index) => (
                <NavLink to={`/doctor/chat/${ptn._id}`} key={index}>
                  <li className="p-2 mt-2 hover:bg-white rounded-lg">
                    <button
                      className="flex items-center"
                      onClick={() => setSelectedConversation(ptn)}
                    >
                      <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                        {ptn.Picture ? (
                          ptn.username[0]
                        ) : (
                          <img
                            className="w-8 h-8"
                            src={ptn.Picture}
                            alt="profile"
                          />
                        )}
                      </div>
                      <div className="ml-2 text-sm font-semibold">
                        {ptn.username}
                      </div>
                    </button>
                  </li>
                </NavLink>
              ))}
            </ul>
          </li>

          <button
            onClick={() => useLogout()}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Log Out
          </button>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}
