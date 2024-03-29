import { Link } from "react-router-dom";

function ErrorPage() {
  //   const error = useRouteError();
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col bg-teal-400">
        <h1 className="text-9xl flex text-white font-mono font-extrabold drop-shadow-xl">
          4
          <span>
            <svg
              className="drop-shadow-xl"
              fill="#ffffff"
              height="140px"
              width="100px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 436.98 436.98"
              xmlSpace="preserve"
              stroke="#000000"
              strokeWidth="0.00436979"
              transform="rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M218.49,0c-63.224,0-114.66,51.437-114.66,114.66v207.659c0,63.224,51.437,114.66,114.66,114.66 s114.66-51.437,114.66-114.66V114.66C333.15,51.437,281.713,0,218.49,0z M218.49,20c52.195,0,94.66,42.464,94.66,94.66v93.83 H123.83v-93.83C123.83,62.464,166.294,20,218.49,20z M218.49,416.979c-52.195,0-94.66-42.464-94.66-94.66v-93.83h189.32v93.83 C313.15,374.515,270.685,416.979,218.49,416.979z"></path>{" "}
                  <path d="M148.165,287.05c5.522,0,10-4.477,10-10v-23.259c0-5.523-4.478-10-10-10s-10,4.477-10,10v23.259 C138.165,282.573,142.642,287.05,148.165,287.05z"></path>{" "}
                  <path d="M218.49,382.645c-33.264,0-60.325-27.062-60.325-60.326v-12.044c0-5.523-4.478-10-10-10s-10,4.477-10,10v12.044 c0,44.292,36.034,80.326,80.325,80.326c5.522,0,10-4.477,10-10S224.012,382.645,218.49,382.645z"></path>{" "}
                  <path d="M255.887,67.362c14.571,11.549,22.928,28.789,22.928,47.298v76.003c0,5.523,4.478,10,10,10s10-4.477,10-10V114.66 c0-24.653-11.118-47.605-30.504-62.972c-4.329-3.431-10.62-2.702-14.049,1.625C250.832,57.642,251.559,63.932,255.887,67.362z"></path>{" "}
                  <path d="M218.49,54.335c5.154,0,10.272,0.653,15.212,1.941c0.846,0.22,1.693,0.326,2.529,0.326c4.441,0,8.497-2.981,9.67-7.479 c1.394-5.344-1.81-10.806-7.154-12.199c-6.585-1.717-13.4-2.588-20.257-2.588c-5.522,0-10,4.477-10,10 S212.967,54.335,218.49,54.335z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
          4
        </h1>
        <p className="text-white font-serif font-bold">
          Sorry, something went wrong.
        </p>
        <Link
          className="border  py-1.5 px-5 mt-5 rounded-sm hover:bg-white hover:text-black ease-in-out delay-100 hover:rounded-full text-white font-mono font-bold uppercase"
          to="/"
        >
          {" "}
          go home{" "}
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
