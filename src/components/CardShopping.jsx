import food from "../assets/8.png";
export default function CardShopping({ products }) {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg p-8" src={food} alt="product image" />
      <div className="px-5 pb-5">
        <h3 className="text-gray-900 text-center font-semibold text-lg tracking-tight dark:text-white">
          {products.name}
        </h3>
        <div className="flex items-center flex-col gap-y-5 mt-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${products.price}
          </span>
          <button className="text-white bg-teal-400 hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
