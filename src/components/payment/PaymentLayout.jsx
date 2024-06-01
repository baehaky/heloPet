import { Toaster } from "react-hot-toast";
import FormPayment from "./FormPayment";
import SelectPayment from "./SelectPayment";
import React from "react";
import { useParams } from "react-router-dom";

export default function PaymentLayout() {
  const { id } = useParams();
  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen">
      <Toaster />
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-semibold text-white">
          Pilih Metode Pembayaran!
        </h1>

        <hr className="mt-6 mb-3" />

        <SelectPayment />

        <hr className="mb-6" />
        <FormPayment />
      </div>
    </div>
  );
}
