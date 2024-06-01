import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function PengusahaRegis() {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    businessname: "",
    phone: "",
    type: "",
    address: "",
    email: "",
    password: "",
  });

  const signup = async ({
    businessname,
    email,
    phone,
    type,
    address,
    password,
  }) => {
    const success = handleInputErrors({
      businessname,
      phone,
      type,
      address,
      email,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      fetch("http://localhost:5000/api/auth/seller/signup", {
        method: "POST", // Change the method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessname,
          phone,
          type,
          address,
          email,
          password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("seller", JSON.stringify(data));
          toast.success(`Selamat datang ${data.businessname}`);
          setTimeout(() => {
            navigate("/seller");
          }, 3000); // Delay of 5 seconds
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    return { loading, signup };
  };

  function handleInputErrors({
    businessname,
    email,
    phone,
    type,
    address,
    password,
  }) {
    if (!businessname || !password || !type) {
      toast.error("Jangan sampai ada field yang kosong!");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password minimal harus 6 huruf");
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto flex flex-wrap"
      >
        <div className="pb-2 pt-4 w-full md:w-1/2">
          <input
            type="text"
            value={inputs.businessname}
            onChange={(e) =>
              setInputs({ ...inputs, businessname: e.target.value })
            }
            placeholder="businessname"
            className="block w-full p-4 text-lg rounded-sm"
          />
        </div>
        <div className="pb-2 pt-4 w-full md:w-1/2">
          <input
            type="text"
            value={inputs.phone}
            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            placeholder="Nomor Handphone"
            className="block w-full p-4 text-lg rounded-sm"
          />
        </div>
        <div className="pb-2 pt-4 w-full">
          <input
            type="text"
            value={inputs.address}
            onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
            placeholder="Alamat"
            className="block w-full p-4 text-lg rounded-sm"
          />
        </div>
        <div className="pb-2 pt-3 w-full ">
          <label>Pilih tipe business anda</label>
          <div className="flex justify-around mt-4">
            <div className="flex items-center">
              <input
                type="radio"
                value={"Petshop"}
                onChange={(e) => setInputs({ ...inputs, type: e.target.value })}
                name="disabled-radio"
                className="w-4 h-4 "
              />
              <label className="ms-2 text-sm font-medium ">Petshop</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value={"Apoteker"}
                onChange={(e) => setInputs({ ...inputs, type: e.target.value })}
                name="disabled-radio"
                className="w-4 h-4 "
              />
              <label className="ms-2 text-sm font-medium ">Apoteker</label>
            </div>
          </div>
        </div>

        <div className="pb-2 pt-4 w-full">
          <input
            className="block w-full p-4 text-lg rounded-sm"
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="Email"
          />
        </div>
        <div className="pb-2 pt-4 w-full">
          <input
            className="block w-full p-4 text-lg rounded-sm"
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            placeholder="Password"
          />
        </div>

        <div className="px-4 pb-2 pt-4 w-full">
          <button className="uppercase block w-full p-4 text-lg rounded-full bg-teal-400 hover:bg-teal-600 focus:outline-none text-white">
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
}
