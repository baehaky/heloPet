import CardInformation from "./CardInformation";
export default function Information() {
  return (
    <section className="py-16">
      <div className="px-12 px-24 bg-[#070F2B] py-5">
        <h1 className="text-center text-4xl md:text-5xl text-white font-medium">
          Lindungi Hewan Anda
        </h1>
        <div className="flex flex-wrap justify-center mt-20 gap-x-10 gap-y-10 ">
          <CardInformation />
        </div>
      </div>
    </section>
  );
}
