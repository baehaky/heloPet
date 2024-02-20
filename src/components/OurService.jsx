import Card from "./Card";
import { motion } from "framer-motion";

export default function OurService() {
  return (
    <>
      <section className="py-11 flex flex-col px-24 gap-y-5">
        <hr />
        <div>
          <h1 className="text-3xl text-center">Layanan Kami</h1>
        </div>
        <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
          <Card angka={1} text={"Chat dengan dokter"} />
          <Card angka={2} text={"Belanja kebutuhan pet anda"} />
          <Card angka={3} text={"Bertemu dengan dokter favorit anda"} />
        </div>
        <hr />
      </section>
    </>
  );
}
