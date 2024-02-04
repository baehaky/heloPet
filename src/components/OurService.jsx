import Card from "./Card";
import {motion} from "framer-motion"

export default function OurService() {
  return (
    <>
      <section className="py-10 flex flex-col px-32 gap-y-5">
        <hr />
        <div>
          <h1 className="text-3xl text-center">Layanan Kami</h1>
        </div>
        <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
          <Card angka={0.5} />
          <Card angka={1} />
          <Card angka={1.5} />
        </div>
      </section>
    </>
  );
}
