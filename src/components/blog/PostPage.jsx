import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  return (
    <main className="mt-10 px-20">
      <Link to="/">
        <h1 className="font-medium underline underline-offset-3 hover:underline-offset-1 transition-all">
          kembali
        </h1>
      </Link>
      <>
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {postInfo.title}
            </h2>
            <h4 className="text-lg font-semibold text-gray-700 mt-1 leading-tight">
              {/* Author: {usernames} */}
            </h4>
            <p className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
              {postInfo.createdAt}
            </p>
          </div>

          <img
            src={"http://localhost:5000/api/" + postInfo.cover}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full ">
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
          </div>
        </div>
      </>
    </main>
  );
}
