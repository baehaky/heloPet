import CardShopping from "./CardShopping";

export default function ShoppingPage() {
  const data = [
    {
      id: 1,
      name: "Felibite Mother and Kitten",
      price: 50,
    },
    {
      id: 2,
      name: "Royal Canin",
      price: 100,
    },
    {
      id: 3,
      name: "Nature’s Protection ",
      price: 120,
    },
    {
      id: 4,
      name: "Wellness CORE Puppy ",
      price: 150,
    },
  ];
  return (
    <section
      aria-label="Related articles"
      className="py-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="text-5xl font-bold mb-5 text-center text-teal-500 dark:text-white">
          Let’s get to finding their food.
        </h2>
        <div className="grid place-items-center gap-12 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((products, index) => (
            <CardShopping key={index} products={products} />
          ))}
        </div>
      </div>
    </section>
  );
}
