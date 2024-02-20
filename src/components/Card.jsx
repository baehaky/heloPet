import { motion } from "framer-motion";
export default function Card(props) {
  return (
    <motion.div
      initial={{ y: 50 }}
      transition={{ duration: props.angka }}
      whileInView={{ y: 0 }}
      className="w-full max-w-xs bg-white border hover:bg-teal-400 hover:border-teal-600 hover:text-white border-black rounded-lg shadow"
    >
      <div className="flex justify-center py-2">
        <img className=" rounded-t-lg" src="" alt="product image" />
      </div>
      <div className="pb-5">
        <div>
          <h5 className="text-xl px-5 text-center  font-semibold tracking-tight">
            {props.text}
          </h5>
        </div>
      </div>
    </motion.div>
  );
}
