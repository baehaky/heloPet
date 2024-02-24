import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
export default function ArtikelPage() {
  const blogCard_ = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1629552482148-02c75df963b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "5 Hal kesukaan kucing",
      description: "Kucing adalah makhluk yang lucu gemas nan gemoy",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1628672620794-dde68cdefad9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5qaW5nfGVufDB8fDB8fHww",
      title: "10 Fakta Menarik Tentang Anjing 'Si Hewan Setia",
      description:
        "Anjing adalah hewan yang cerdas dan bisa mengerti perintah manusia. 8. Pelari yang Cepat. Rata-rata anjing bisa berlari dengan kecepatan 45 mil ...",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1480554840075-72cbdabbf689?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFiYml0fGVufDB8fDB8fHww",
      title: "5 Fakta Unik Kelinci yang Belum Banyak Diketahui",
      description:
        "Pertama, fakta unik kelinci adalaha tidak bisa hidup tanpa wortel. Banyak serial kartun yang menunjukkan bahwa kelinci sangat menyukai wortel.",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Jenis Penyakit Kucing, Gejala dan Perawatannya",
      description:
        "Beberapa penyakit kucing yang paling umum adalah leukemia (yang mengakibatkan beberapa risiko kesehatan yang akhirnya menyerang sistem kekebalan tubuh dan ...",
    },
  ];
  return (
    <section
      aria-label="Related articles"
      className="py-8  bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className=" text-2xl font-bold text-gray-900 dark:text-white">
            Berita Terkini
          </h2>
          <SearchBar />
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {blogCard_.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
