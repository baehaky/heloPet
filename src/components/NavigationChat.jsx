import React, { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import doctor from "../assets/doctor.png";
import useConversation from "../zustand/useConversation";
import Chat from "./Chat";
export default function NavigationChat() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [Doctor, setDoctor] = useState([]);
  const { id } = useParams();
  const isSelected = selectedConversation?._id === Doctor._id;
  useEffect(() => {
    fetch(`http://localhost:5000/api/chatdoctor?_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctor(data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  function paymentGateWay() {
    fetch("http://localhost:5000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        total: Doctor.price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.snap.pay(data.token);
        // toast.success("Payment transaction created successfully!");
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
        // Tampilkan pesan kesalahan
        toast.error("Failed to create payment transaction");
      });
  }

  return (
    <>
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-teal-400 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">Konsultasi</div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <button onClick={paymentGateWay}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="hover:underline hover:underline-offset-2">
                  Selesai
                </span>
              </button>
              <span className="font-bold">Aktif</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                1
              </span>
            </div>
            <button onClick={() => setSelectedConversation(Doctor)}>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-3/4 ">
                <div className="flex flex-row items-center hover:bg-gray-400 rounded-xl p-2 mr-5 border border-gray-900">
                  <button className="flex items-center">
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      <img src={Doctor.Picture} />
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      {Doctor.username}
                    </div>
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
        {isSelected ? <Chat Doctor={Doctor} /> : ""}
      </div>
    </>
  );
}
