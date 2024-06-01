export default function BlogCard({ image, title, description }) {
  return (
    <article className="md:max-w-xs md:hover:scale-105 transition duration-150 ease-in-out">
      <img src={image} className="mb-5 rounded-lg" alt="Image 1" />

      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">{description}</p>
      <p className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
        Baca dengan 2 menit
      </p>
    </article>
  );
}
