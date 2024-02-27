import CardShopping from "./CardShopping";

export default function PetCarePage() {
  const options = {
    preferred: [
      { id: 1, name: "Wet Food" },
      { id: 2, name: "Dry Food" },
      { id: 3, name: "Cat Sand" },
      { id: 4, name: "Soaps" },
    ],
    dropdowns: [
      { id: 1, name: "Recommended" },
      { id: 2, name: "Size" },
      { id: 3, name: "Price" },
    ],
    products: [
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
    ],
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="lg:flex lg:-mx-2">
          <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            {options.preferred.map((item) => (
              <button
                key={item.id}
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-3/4 ">
            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
              <p className="text-gray-500 dark:text-gray-300">6 Items</p>
              <div className="flex items-center gap-x-5">
                <p className="text-gray-500 dark:text-gray-300">Sort</p>
                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                  {options.dropdowns.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:place-items-start place-items-center gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {options.products.map((products) => (
                <CardShopping key={products.id} products={products} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
