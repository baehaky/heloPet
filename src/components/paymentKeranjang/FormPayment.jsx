import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { useToaster } from "react-hot-toast";

export default function FormPayment() {
  const [Payment, setPayment] = useState({
    Alamat: "",
    KodePos: "",
    Pembayaran: "",
  });
  const [klik, setKlik] = useState(0);

  // const { id } = useParams();
  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/chatdoctor?_id=${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPayment((prevPayment) => ({
  //         ...prevPayment,
  //         DoctorName: data.username,
  //         Prices: data.price,
  //       }));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching doctors:", error);
  //     });
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (klik === 0) {
      toast.success("Pembayaran Telah Selesai", { duration: 3000 });
      setKlik(1);
      setTimeout(() => {
        window.location.href = "http://localhost:5173/";
      }, 3000); // Menunggu 3 detik sebelum menavigasi
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="mb-4 flex ">
        <label className="block text-white mb-1">
          To 
        </label>
      </div>

      <div className="mb-4 flex">
        <label className="block text-white mb-1">
          Biaya Jasa Dokter: {Payment.Prices}
        </label>
      </div> */}

      <div className="flex mb-3">
        <label className="block w-1/2 text-white mb-1 pt-2 pr-2">Alamat</label>
        <input
          type="text"
          name="Alamat"
          value={Payment.Alamat}
          required
          onChange={handleChange}
          placeholder="001"
          className="w-11/12 p-2 mb-1 bg-gray-800 border border-gray-700 rounded text-white"
        />
      </div>

      <div className="flex mb-3">
        <label className="block w-1/2 text-white mb-1 pt-2 pr-2">KodePos</label>
        <input
          type="text"
          name="KodePos"
          value={Payment.KodePos}
          required
          onChange={handleChange}
          placeholder="001"
          className="w-11/12 p-2 mb-1 bg-gray-800 border border-gray-700 rounded text-white"
        />
      </div>

      <div className="flex mb-3">
        <label className="block w-1/2 text-white mb-1 pt-2 pr-2">Pembayaran</label>
        <input
          type="text"
          name="Pembayaran"
          value={Payment.Pembayaran}
          required
          onChange={handleChange}
          placeholder="001"
          className="w-11/12 p-2 mb-1 bg-gray-800 border border-gray-700 rounded text-white"
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
