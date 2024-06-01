import { Toaster } from "react-hot-toast";
import FormPayment from "./FormPayment";
import SelectPayment from "./SelectPayment";
import React from "react";
import { useParams } from "react-router-dom";

export default function PaymentLayout({ closeModal }) {
  const { id } = useParams();
  return (
    <div className="bg-gray-800/80 items-center h-screen flex justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <Toaster />
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold text-white">
            Pilih Metode Pembayaran!
          </h1>
          <button onClick={closeModal} className="font-medium text-slate-500 hover:text-red-600">x</button>
        </div>

        <hr className="mt-6 mb-3" />

        <SelectPayment />

        <hr className="mb-6" />
        <FormPayment />
      </div>
    </div>
  );
}
