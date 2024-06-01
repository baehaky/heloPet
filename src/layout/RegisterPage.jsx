import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import PelangganRegis from "../components/registrasi/PelangganRegis";
import PengusahaRegis from "../components/registrasi/PengusahaRegis";
export default function RegisterPage() {
  const navigate = useNavigate();

  const [choose, setChoose] = useState("Pelanggan");

  return (
    <section className="min-h-screen flex items-stretch flex-row-reverse">
      <Toaster />
      <div className="lg:flex w-1/2 hidden bg-teal-400 relative items-center">
        <div className="w-full px-24 z-10 text-white">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Daftarkan segera akun kamu
          </h1>
          <Link to="/">
            <button className="group relative mt-5 h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-teal-600 group-hover:text-white">
                Kembali
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-2/3 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-black text-3xl font-bold">
            Daftarkan Akun Kamu{" "}
          </h1>
          <div>
            <PelangganRegis />
          </div>
        </div>
      </div>
    </section>
  );
}
