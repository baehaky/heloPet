export default function BlogCard({ image, title, description }) {
  return (
    <article className="max-w-xs">
      <a href="#">
        <img src={image} className="mb-5 rounded-lg" alt="Image 1" />
      </a>
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
      >
        Read in 2 minutes
      </a>
    </article>
  );
}
