import dog from "../assets/1.png";
import cat from "../assets/2.png";
import React from "react";
export default function CardInformation() {
  return (
    <React.Fragment>
      <div className="container flex flex-col px-6 py-4 mx-auto justify-center space-y-6 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            <button className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-300"></button>
          </div>

          <div className="max-w-xl md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-white dark:text-white md:text-4xl">
              Penyakit Yang di Derita Oleh Anjing
            </h1>
            <p className="mt-4 text-gray-300 font-medium tracking-wide">
              Percaya atau tidak, ada sejumlah penyakit yang rentan dialami
              anjing yang cukup umum dan dapat diobati dengan mudah. Sebagian
              besar penyakit ini tidak serius, namun, jika tidak terdeteksi dan
              karena itu tidak diobati, beberapa berpotensi menimbulkan masalah
              kesehatan yang serius pada anjing. berikut ini beberapa penyakit
              paling umum diderita anjing. <br />
              <span className="font-semibold text-yellow-300">
                1. Infeksi Gigi{" "}
              </span>{" "}
              <br />
              <span className="font-semibold text-yellow-300">
                2. Infeksi Telinga{" "}
              </span>
              <br />
              <span className="font-semibold text-yellow-300">
                3. Infeksi Kulit{" "}
              </span>{" "}
              <br />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-200/40 shadow-lg rounded-md bg-opacity-50 backdrop-blur-md w-full h-96 md:w-3/6">
          <img
            className="object-cover w-full h-full max-w-sm rounded-md"
            src={dog}
            alt="apple watch photo"
          />
        </div>
      </div>
      <div className="container flex flex-col px-6 py-4 mx-auto justify-center space-y-6 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-yellow-300"></button>
            <button className="w-3 h-3 mx-2 bg-yellow-300 rounded-full md:mx-0 focus:outline-none"></button>
          </div>

          <div className="max-w-xl md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-white dark:text-white md:text-4xl">
              Penyakit Yang di Derita Oleh Kucing
            </h1>
            <p className="mt-4 text-gray-300 font-medium tracking-wide">
              Memelihara kucing memang tidak mudah. Selain memperhatikan
              makanannya, Anda juga perlu mengetahui perawatan yang tepat ketika
              kucing sakit. Ada beberapa penyakit yang umum menyerang kucing.
              Anda bisa menyimak informasi berikut untuk mengetahui jenis
              penyakit, gejala, serta pengobatan yang tepat. berikut ini
              beberapa penyakit paling umum diderita kucing. <br />
              <span className="font-semibold text-yellow-300">
                1. Kutu Kucing{" "}
              </span>{" "}
              <br />
              <span className="font-semibold text-yellow-300">
                2. Cacingan{" "}
              </span>
              <br />
              <span className="font-semibold text-yellow-300">
                3. Feline panleukopenia virus (FPV){" "}
              </span>{" "}
              <br />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-200/40 shadow-lg rounded-md bg-opacity-50 backdrop-blur-md w-full h-96 md:w-3/6">
          <img
            className="object-cover w-full h-full max-w-sm rounded-md"
            src={cat}
            alt="apple watch photo"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
