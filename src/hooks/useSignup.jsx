import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  // Your implementation {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    email,
    password,
    username,
    phone,
    address,
    gender,
    roles,
  }) => {
    const success = handleInputErrors({
      email,
      password,
      username,
      phone,
      address,
      gender,
      roles,
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
          email,
          password,
          username,
          phone,
          address,
          gender,
          roles,
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
}

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
