import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { useToaster } from "react-hot-toast";

export default function FormPayment() {
  const [Payment, setPayment] = useState({
    DoctorName: "",
    Prices: 0,
    Pembayaran: "",
  });
  
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/chatdoctor?_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPayment((prevPayment) => ({
          ...prevPayment,
          DoctorName: data.username,
          Prices: data.price,
        }));
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  function generateRandomId(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        total: Payment.Prices,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.snap.pay(data.token)
        // toast.success("Payment transaction created successfully!");
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
        // Tampilkan pesan kesalahan
        toast.error("Failed to create payment transaction");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex ">
        <label className="block text-white mb-1">
          Nama Dokter: {Payment.DoctorName}
        </label>
      </div>

      <div className="mb-4 flex">
        <label className="block text-white mb-1">
          Biaya Jasa Dokter: {Payment.Prices}
        </label>
      </div>

      <div className="flex mb-3">
        <label className="block text-white mb-1 pt-2 pr-2">Pembayaran</label>
        <input
          type="text"
          name="Pembayaran"
          value={Payment.Pembayaran}
          onChange={handleChange}
          placeholder="001"
          className="w-full p-2 mb-1 bg-gray-800 border border-gray-700 rounded text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}
