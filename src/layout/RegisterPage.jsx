import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <section className="min-h-screen flex items-stretch flex-row-reverse">
      <div className="lg:flex w-1/2 hidden bg-teal-400 relative items-center">
        <div className="w-full px-24 z-10 text-white">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-black text-3xl font-bold">
            Daftarkan Akun Kamu
          </h1>
          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm "
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded-sm "
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="text-right hover:font-semibold hover:underline text-black">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button className="uppercase block w-full p-4 text-lg rounded-full bg-teal-400 hover:bg-teal-600 focus:outline-none text-white">
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
