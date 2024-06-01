import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
export default function PelangganRegis() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    roles: "Patient",
    password: "",
  });

  const signup = async ({
    username,
    email,
    phone,
    gender,
    address,
    roles,
    password,
  }) => {
    const success = handleInputErrors({
      username,
      email,
      phone,
      gender,
      address,
      roles,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      fetch("http://localhost:5000/api/auth/signup", {
        method: "POST", // Change the method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phone,
          gender,
          address,
          roles,
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
          localStorage.setItem("patient", JSON.stringify(data));
          setAuthUser(data);
          toast.success(`Selamat data ${data.username}`);
          setTimeout(() => {
            navigate("/");
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
    email,
    password,
    username,
    phone,
    address,
    gender,
    roles,
  }) {
    if (!username || !password || !gender) {
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
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            placeholder="Username"
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
          <label>Pilih gender anda</label>
          <div className="flex justify-around mt-4">
            <div className="flex items-center">
              <input
                type="radio"
                value={"Male"}
                onChange={(e) =>
                  setInputs({ ...inputs, gender: e.target.value })
                }
                name="disabled-radio"
                className="w-4 h-4 "
              />
              <label className="ms-2 text-sm font-medium ">Pria</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value={"Female"}
                onChange={(e) =>
                  setInputs({ ...inputs, gender: e.target.value })
                }
                name="disabled-radio"
                className="w-4 h-4 "
              />
              <label className="ms-2 text-sm font-medium ">Wanita</label>
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
