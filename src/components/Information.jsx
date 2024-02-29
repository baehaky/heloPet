import CardInformation from "./CardInformation";
export default function Information() {
  return (
    <section className="py-16 -mt-14">
      <div className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl md:text-5xl text-white font-medium">
          <span className="text-yellow-200">Lindungi</span> Hewan Anda
        </h1>
        <div className="">
          <CardInformation />
        </div>
      </div>
    </section>
  );
}
