import Money from "./svg/money";
export default function DoctorCard() {
  return (
    <dl className="mt-5 grid  grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div className="absolute rounded-md bg-blue-500 p-3">
            <Money />
          </div>
          <p className="ml-16 truncate text-sm font-medium text-gray-300">Pendapatan</p>
        </dt>
        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-100">24.57%</p>
        </dd>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div className="absolute rounded-md bg-blue-500 p-3">
            <Money />
          </div>
          <p className="ml-16 truncate text-sm font-medium text-gray-300">Pendapatan</p>
        </dt>
        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-100">24.57%</p>
        </dd>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div className="absolute rounded-md bg-blue-500 p-3">
            <Money />
          </div>
          <p className="ml-16 truncate text-sm font-medium text-gray-300">Pendapatan</p>
        </dt>
        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-100">24.57%</p>
        </dd>
      </div>
    </dl>
  );
}
