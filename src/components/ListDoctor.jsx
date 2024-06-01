import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useConversation from "../zustand/useConversation";

function DoctorItem(props) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === props.conversation._id;
  return (
    <Link to={`/chat/${props.conversation._id}`}>
      <li className="border p-5 mb-5 hover:bg-slate-300 border-zinc-950 rounded-lg">
        <button
          className="w-full"
          onClick={() => setSelectedConversation(props.conversation)}
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={props.conversation.Picture}
                alt={`Profile picture of ${props.conversation.username}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {props.conversation.username}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {props.conversation.workExperience}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              Rp{props.conversation.price}
            </div>
          </div>
        </button>
      </li>
    </Link>
  );
}
export default function ListDoctor() {
  const [state, setState] = useState({
    currentTime: new Date(),
    doctors: [],
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        currentTime: new Date(),
      }));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctor")
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          doctors: data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const { currentTime, doctors } = state;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = currentTime.getDay();
  const dayName = daysOfWeek[day];

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Doctor Schedule
          </h2>

          <div className="mt-4">
            <p className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              {dayName} {hours} : {minutes} : {seconds}
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <ul className="flex flex-col">
          {doctors.map((doctor, index) => (
            <DoctorItem
              key={doctor._id}
              conversation={doctor}
              lastIdx={index === doctors.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
