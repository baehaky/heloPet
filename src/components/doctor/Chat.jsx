
import React, { useState, useEffect, useRef } from "react";

import useGetMessages from "../../hooks/useGetMessage";
import useListenMessages from "../../hooks/useListenMessage";
import { useAuthContext } from "../../context/AuthContext";
import useSendMessage from "../../hooks/useSendMessage";
import MessagesClient from "./MessagesClient";

export default function Chat() {
  useListenMessages();
  const { sendMessage } = useSendMessage();
  const { messages, loading } = useGetMessages();
  const [message, setMessage] = useState("");
  const { authUser } = useAuthContext();

  const send = async () => {
    console.log(authUser._id);
    if (!message) return;
    await sendMessage(message, authUser._id);
    setMessage("");
  };

  return (
    <>
      <div className="flex h-screen antialiased text-gray-800 w-full">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-yellow-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <>
                    {messages.length > 0 &&
                      messages.map((msg) => (
                        <MessagesClient key={msg._id} msg={msg} />
                      ))}
                  </>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={send}
                  className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Kirim</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
