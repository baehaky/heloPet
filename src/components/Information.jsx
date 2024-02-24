import CardInformation from "./CardInformation";
export default function Information() {
  return (
    <section className="py-16">
      <div className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl md:text-5xl text-white font-medium">
          Lindungi Hewan Anda
        </h1>
        <div className="py-20">
          <CardInformation />
        </div>
      </div>
    </section>
  );
}
