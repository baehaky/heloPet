import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../../Editor";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

export default function CreateBlog() {
  const { authUser } = useAuthContext();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();
  async function createNewPost(ev) {
    console.log(authUser._id);
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("category", category);
    data.set("file", files[0]);
    data.set("author", authUser._id);
    ev.preventDefault();
    try {
      await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          toast.success("Blog berhasil di simpan");
          setTimeout(() => {
            navigate("/doctor/dashboard");
          }, 3000);
        });
    } catch (err) {}
  }

  return (
    <div className="flex justify-center w-full bg-slate-100 py-10">
      <form
        className="mt-10 flex flex-col w-2/3 gap-y-5 bg-white p-8 rounded-lg shadow-lg"
        onSubmit={createNewPost}
      >
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
        <input
          type="text"
          placeholder="Kesimpulan"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
        <input
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
        <input
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
          className=" border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
        <Editor
          value={content}
          onChange={setContent}
          className="p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="mt-5 bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-700"
        >
          Membuat artikel
        </button>
      </form>
    </div>
  );
}
