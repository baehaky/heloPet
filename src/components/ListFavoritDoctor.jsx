import { Link } from "react-router-dom";
import doctor from "../assets/doctor.png";
export default function ListFavoritDoctor() {
  const data = [{ id: "id1", name: "HelloPet dokter", image: doctor }];
  return (
    <div class="py-10">
      <h1 className="text-center font-semibold text-2xl">
        Dokter Favorit Kamu!
      </h1>
      <div class="max-w-sm mx-auto my-10">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <ul class="divide-y divide-gray-200">
            {data.map((data, i) => (
              <Link to={`/chat/${data.id}`} key={i}>
                <li className="p-3 flex justify-between hover:bg-slate-100 items-center user-card">
                  <div class="flex items-center">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={data.image}
                      alt={data.name}
                    />
                    <span class="ml-3 font-medium">{data.name}</span>
                  </div>
                  <div>
                    <button class="text-gray-500 hover:text-gray-700">
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 1024 1024"
                        class="icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 983.384 381.465 c 0 -147.456 -119.467 -266.923 -266.923 -266.923 c -81.4649 0 -154.283 36.4089 -203.207 93.8662 c -48.9245 -57.4578 -121.856 -93.8662 -203.207 -93.8662 c -147.456 0 -266.923 119.467 -266.923 266.923 c 0 77.3689 35.6125 142.109 85.5609 195.811 L 514.275 947.964 l 378.994 -366.592 c 48.0142 -50.0622 90.112 -120.377 90.112 -199.907 Z"
                          fill="#d1525c"
                        />
                        <path
                          d="M 514.275 947.964 L 128.569 577.276 C 78.507 523.574 43.008 458.835 43.008 381.465 c 0 -147.456 119.467 -266.923 266.923 -266.923 c 81.4649 0 154.283 36.4089 203.207 93.8662 l 1.13778 739.555 Z"
                          fill="#db6574"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
