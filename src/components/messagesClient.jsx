import React from "react";
import { useAuthContext } from "../context/AuthContext";

export default function MessagesClient(props) {
  const { authUser } = useAuthContext();
  const username = authUser.username;

  const firstLetter = username[0];
  const fromMe = props.msg.senderId === authUser._id;

  return (
    <div
      className={
        fromMe
          ? "col-start-6 col-end-13 p-3 rounded-lg"
          : "col-start-1 col-end-8 p-3 rounded-lg"
      }
    >
      {fromMe ? (
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-400 flex-shrink-0">
            {firstLetter}
          </div>
          <div className="relative mr-3 text-sm bg-pink-300 py-2 px-4 shadow rounded-xl">
            <div>{props.msg.message}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-400 flex-shrink-0">
            <img src={props.doctor.Picture} />
          </div>
          <div className="relative ml-3 text-sm bg-green-300 py-2 px-4 shadow rounded-xl">
            <div>{props.msg.message}</div>
          </div>
        </div>
      )}
    </div>
  );
}
