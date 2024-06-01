import Card from "./Card";
import { motion } from "framer-motion";
import message from "../assets/7.png";
import shop from "../assets/6.png";
import doctor from "../assets/5.png";
import bg_ from "../assets/22.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function OurService() {
  const result = JSON.parse(localStorage.getItem("patient"));
  const navigate = useNavigate();
  const chat = () => {
    if (result) {
      navigate("/favoritDoctor");
    } else {
      toast((t) => (
        <span>
          Kamu belum login, apakah kamu ingin login <br /> <br />
          <div className="flex gap-2">
            <button
              className="bg-slate-200 p-2 rounded-md"
              onClick={() => toast.dismiss(t.id)}
            >
              Tidak
            </button>
            <button
              className="bg-slate-200 p-2 rounded-md"
              onClick={() => toast.dismiss(navigate("/login"))}
            >
              Ya
            </button>
          </div>
        </span>
      ));
    }
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${bg_})`,
  };
  return (
    <>
      <section
        className="flex flex-col px-24 gap-y-5 py-11 pb-5"
        style={backgroundImageStyle}
      >
        <Toaster />
        <div>
          <h1 className="text-4xl text-center font-semibold">Layanan Kami</h1>
        </div>
        <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
          <button onClick={chat}>
            <Card
              angka={1}
              text={"Konsultasi dengan dokter hewan"}
              img={message}
            />
          </button>
          <Link to="shop">
            <Card angka={2} text={"Belanja kebutuhan pet anda"} img={shop} />
          </Link>
          <Link to="favoritDoctor">
            <Card
              angka={3}
              text={"Bertemu dengan dokter favorit anda"}
              img={doctor}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
