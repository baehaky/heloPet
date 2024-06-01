import Blog from "./Blog";
import DoctorCard from "./DoctorCard";
import DoctorTableTransaksi from "./DoctorTableTransaction";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export default function DoctorDashboard() {
  const { authUser } = useAuthContext();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/blog?author=${authUser._id}`, {
      method: "GET",
      
    }).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <main className="w-full px-5 py-3">
      <div className="bg-slate-300 px-5 py-5 rounded-md">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Informasi
        </h3>
        <DoctorCard />
      </div>
      <br />

      <div className="bg-slate-300 px-5 py-5 rounded-md">
        <div className="flex justify-between">
          <h3 className="text-base py-2 font-semibold leading-6 text-gray-900">
            Berita
          </h3>
          <Link to="/doctor/create">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Tambah
            </button>
          </Link>
        </div>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:place-items-start place-items-center gap-5 w-full mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll h-96" key={1}>
            {posts.map((post) => (
              <Blog key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center p-5 bg-gray-100 rounded-md mt-5">
            <h1 className="font-bold text-red-700 underline underline-offset-2">
              Anda belum membuat Berita!
            </h1>
          </div>
        )}
      </div>

      <br />

      <div className="bg-slate-300 px-5 py-5 rounded-md">
        <DoctorTableTransaksi />
      </div>
    </main>
  );
}
