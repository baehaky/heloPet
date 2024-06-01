import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterSeller() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    setLoading(true);
    if (email.trim() === "" || password.trim() === "") {
      toast.error("Harap jangan ada field yang kosong!");
      return;
    } else {
      try {
        fetch(
          `http://localhost:5000/api/auth/seller/login?email=${email}&password=${password}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            localStorage.setItem("seller", JSON.stringify(data));
            toast.success(`Selamat datang ${data.businessname}`);
            setTimeout(() => {
              navigate("/seller/dashboard");
            }, 3000);
          })
          .catch((error) => {
            toast.dismiss("Error", error.message);
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      } catch (error) {}
    }
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-svh px-10 relative">
        <Toaster />
      <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Masuk ke akun</h2>
        </div>
        <div className="flex flex-col max-w-md space-y-5">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-teal-400 rounded-lg font-medium placeholder:font-normal"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-teal-400 rounded-lg font-medium placeholder:font-normal"
          />
          <button
            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium hover:border-black active:bg-teal-700 bg-teal-400 text-white"
            disabled={loading}
            onClick={loginHandler}
          >
            Konfirmasi
          </button>
          <div className="flex justify-center items-center ">
            <span className="w-[100px] border border-black"></span>
            <span className="hidden md:block px-5">Selamat Datang</span>
            <span className="px-4 block md:hidden">Atau</span>
            <span className="w-[100px] border border-black"></span>
          </div>
          <Link to="/login">
            <div className="flex justify-center items-center underline text-xs">
              <span className="hidden md:block px-5">
                Klik di sini jika anda perusahaan
              </span>
              <span className="px-4 block md:hidden">Atau</span>
            </div>
          </Link>
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
  );
}
