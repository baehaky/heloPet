import Wave from "react-wavify";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Wave
        fill="rgb(28 100 242)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 60,
          amplitude: 20,
          speed: 0.2,
          points: 4,
        }}
      />
      <footer class="bg-blue-600 -mt-1">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </h1>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <Link to="/" class="hover:underline me-4 md:me-6">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="Artikel" class="hover:underline me-4 md:me-6">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="AboutUs" class="hover:underline me-4 md:me-6">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="Bantuan" class="hover:underline">
                  Bantuan
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-white sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}