import { motion } from "framer-motion";
export default function Card(props) {
  return (
    <motion.div
      initial={{ y: 50 }}
      transition={{ duration: props.angka }}
      whileInView={{ y: 0 }}
      className="max-w-xs bg-white border hover:bg-teal-400 hover:border-teal-600 hover:text-white border-black rounded-lg shadow"
    >
      <div className="flex justify-center py-5">
        <img
          className=" rounded-t-lg  w-2/5"
          src={props.img}
          alt="product image"
        />
      </div>
      <div className="pb-5">
        <div>
          <h5 className="text-xl lg:text-2xl px-5 text-center  font-semibold tracking-tight">
            {props.text}
          </h5>
        </div>
      </div>
    </motion.div>
  );
}
