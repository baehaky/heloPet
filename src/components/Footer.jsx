import Wave from "react-wavify";
import { Link } from "react-router-dom";
import logo from "../assets/9.png";

export default function Footer() {
  return (
    <>
      <Wave
        fill="rgb(22 189 202)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 60,
          amplitude: 20,
          speed: 0.2,
          points: 4,
        }}
      />
      <footer className="bg-teal-400 -mt-1">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="w-1/12">
              <img src={logo} />
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="Artikel" className="hover:underline me-4 md:me-6">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="AboutUs" className="hover:underline me-4 md:me-6">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="Bantuan" className="hover:underline">
                  Bantuan
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
            © 2023{" "}
            <a href="https://Hellopet.netlify.app/" className="hover:underline">
              HellowPet™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
