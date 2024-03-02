import { Link } from "react-router-dom";
import logo from "../assets/9.png";
export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh]">
      <div className="flex flex-row w-full">
        <div className="relative overflow-hidden md:flex w-1/2 flex-col bg-teal-400 justify-center hidden">
          <div className="px-10 relative -top-24">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:underline text-gray-100 rounded transition duration-150"
            >
              <span className="bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          <div className="py-10 -mt-10 px-10 rounded-lg backdrop-blur-lg">
            <div className="flex flex-col items-center">
              <img src={logo} className="w-1/3" />
              <p className="text-white mt-1">
                Silahkan register jika anda belum memiliki akun
              </p>
              <Link
                to="/register"
                className="block text-center w-1/2 bg-white hover:bg-slate-400 hover:text-white text-black mt-4 rounded-lg font-medium mb-2 px-3 py-2 md:px-4 md:py-3"
              >
                Registrasi
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Sign in to account
              </h2>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <input
                type="text"
                placeholder="Username"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-teal-400 rounded-lg font-medium placeholder:font-normal"
              />
              <input
                type="password"
                placeholder="Password"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-teal-400 rounded-lg font-medium placeholder:font-normal"
              />
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium hover:border-black active:bg-teal-700 bg-teal-400 text-white">
                Konfirmasi
              </button>
              <div className="flex justify-center items-center ">
                <span className="w-[100px] border border-black"></span>
                <span className="hidden md:block px-5">Selamat Datang</span>
                <span className="px-4 block md:hidden">Atau</span>
                <span className="w-[100px] border border-black"></span>
              </div>
              <Link
                to="register"
                className="text-center md:hidden justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
              >
                Registrasi
              </Link>
              <Link
                to="/"
                className="flex items-center text-center md:hidden justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-gradient-to-tr from-sky-800 to-blue-900 text-white"
              >
                <span className="bg-white rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>{" "}
                Kembali ke beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
