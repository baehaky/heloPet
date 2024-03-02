import Card from "./Card";
import { motion } from "framer-motion";
import message from "../assets/7.png";
import shop from "../assets/6.png";
import doctor from "../assets/5.png";
import bg_ from "../assets/22.png";

export default function OurService() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg_})`,
  };
  return (
    <>
      <section
        className="flex flex-col px-24 gap-y-5 py-11 pb-5"
        style={backgroundImageStyle}
      >
        <div>
          <h1 className="text-4xl text-center font-semibold">Layanan Kami</h1>
        </div>
        <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
          <Card angka={1} text={"Chat dengan dokter"} img={message} />
          <Card angka={2} text={"Belanja kebutuhan pet anda"} img={shop} />
          <Card
            angka={3}
            text={"Bertemu dengan dokter favorit anda"}
            img={doctor}
          />
        </div>
      </section>
    </>
  );
}
