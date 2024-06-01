import SellerArticleCard from "./SellerArticleCard";
import SellerCard from "./SellerCard";
import image1 from "../../assets/15.png";
import image2 from "../../assets/16.png";
import image3 from "../../assets/18.png";
import image4 from "../../assets/8.png";
import SellerTableTransaksi from "./SellerTableTransaksi";

export default function SellerDashboard() {
  const options = {
    preferred: [
      { id: 1, name: "Makanan Basah" },
      { id: 2, name: "Makanan Kering" },
      { id: 3, name: "Pasir Kucing" },
      { id: 4, name: "Sabun" },
    ],
    dropdowns: [
      { id: 1, name: "Rekomendasi" },
      { id: 2, name: "Ukuran Barang" },
      { id: 3, name: "Harga" },
    ],
    products: [
      {
        id: 1,
        name: "Felibite Mother and Kitten",
        price: 19000,
        image: image1,
      },
      {
        id: 2,
        name: "Royal Canin",
        price: 36000,
        image: image2,
      },
      {
        id: 3,
        name: "Nature’s Protection ",
        price: 41000,
        image: image3,
      },
      {
        id: 4,
        name: "Wellness CORE Puppy ",
        price: 21000,
        image: image4,
      },
    ],
  };
  return (
    <main className="w-full px-5 py-3">
      <div className="bg-slate-300 px-5 py-5 rounded-md">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Informasi
        </h3>
        <SellerCard />
      </div>
      <br />

      <div className="bg-slate-300 px-5 py-5 rounded-md">
        <div className="flex justify-between">
          <h3 className="text-base py-2 font-semibold leading-6 text-gray-900">
            Produk
          </h3>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Tambah
          </button>
        </div>
        <div className="grid grid-cols-1 md:place-items-start place-items-center gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {options.products.map((products) => (
            <SellerArticleCard key={products.id} products={products} />
          ))}
        </div>
      </div>

          <br/>

      <div className="bg-slate-300 px-5 py-5 rounded-md">
        
        <SellerTableTransaksi />
      </div>
    </main>
  );
}
