export default function SellerArticleCard({ products }) {
  const { id, name, price, image } = products;
  return (
    <div
      className="bg-white shadow-md rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700"
      key={id}
    >
      <img className="rounded-t-lg p-8" src={image} alt="product image" />
      <div className="px-5 pb-5">
        <h3 className="text-gray-900 text-center font-semibold text-sm tracking-tight dark:text-white">
          {name}
        </h3>
        <div className="flex items-center flex-col gap-y-5 mt-5">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Rp{price}
          </span>
          <div className="flex gap-x-3">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
