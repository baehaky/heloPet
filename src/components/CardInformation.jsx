import cat from "../assets/cat/cat_1.png";
import dog from "../assets/dog/dog_1.png";
import React from "react";
export default function CardInformation() {
  return (
    <React.Fragment>
      <section className="flex flex-col w-full gap-y-20">
        <div className="flex justify-center">
          <div className="w-full hidden lg:block">
            <img
              src={cat}
              className="w-[300px] ml-5 drop-shadow-[25px_30px_20px_rgba(255,255,255,0.1)]"
              alt="Cat"
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl md:text-4xl text-white font-semibold">
              Penyakit yang biasa di derita oleh kucing
            </h1>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              1. Kutu kucing
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              2. Cacingan
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              3. Ringworm
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              4. Feline panleukopenia virus (FPV)
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              5. Infeksi saluran pernapasan atas
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:ml-20 flex-row-reverse">
          <div className="w-full hidden lg:block">
            <img
              src={dog}
              className="w-[300px] ml-5 drop-shadow-[25px_30px_20px_rgba(255,255,255,0.1)]"
              alt="Cat"
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl md:text-4xl text-white font-semibold">
              Penyakit yang biasa di derita oleh anjing
            </h1>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              1. Infeksi Telinga
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              2. Infeksi Cacing
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              3. Diare
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              4. Distemper
            </p>
            <p className="text-sm sm:text-xl text-white underline-offset-2 underline">
              5. Kanker atau Tumor Kulit
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}