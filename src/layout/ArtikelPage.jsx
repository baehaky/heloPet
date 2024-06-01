import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import Blog from "../components/doctor/Blog";
export default function ArtikelPage() {
  const { authUser } = useAuthContext();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/artikel`, {
      method: "GET",
    }).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <section
      aria-label="Related articles"
      className="py-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className=" text-2xl font-bold text-gray-900 dark:text-white">
            Berita Terkini
          </h2>
          <SearchBar />
        </div>
        <div className="grid place-items-center sm:place-items-start gap-12 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <Blog key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
