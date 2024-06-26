import React, { useState, useEffect } from "react";
import CardShopping from "./CardShopping";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import food1 from "../assets/15.png";
import food2 from "../assets/16.png";
import food3 from "../assets/18.png";
import food4 from "../assets/8.png";
import drug1 from "../assets/12.png";
import drug2 from "../assets/11.png";
export default function ShoppingPage({ handleClick }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setItem(data);
  }

  const arrowStyle = {
    border: 0,
    color: "#000000",
    fontSize: "30px",
  };
  const CustomRight = ({ onClick }) => (
    <button
      className="absolute top-[50%] right-7 bg-slate-200 px-2 rounded-full "
      onClick={onClick}
      style={arrowStyle}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button
      className="absolute top-[50%] left-7 bg-slate-200 px-2 rounded-full"
      onClick={onClick}
      style={arrowStyle}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 525, min: 0 },
      items: 1,
    },
  };
  const data = [
    {
      id: 1,
      name: "Felibite Mother and Kitten",
      price: 19000,
      image: food1,
    },
    {
      id: 2,
      name: "Royal Canin",
      price: 36000,
      image: food2,
    },
    {
      id: 3,
      name: "Nature’s Protection ",
      price: 41000,
      image: food3,
    },
    {
      id: 4,
      name: "Wellness CORE Puppy ",
      price: 21000,
      image: food4,
    },
    {
      id: 5,
      name: "Vitamin B",
      price: 45000,
      image: drug1,
    },
    {
      id: 6,
      name: "Vitamin C",
      price: 45000,
      image: drug2,
    },
  ];
  return (
    <section
      aria-label="Related articles"
      className="py-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="text-5xl font-bold mb-5 text-center text-teal-400 dark:text-white">
          Penuhi kebutuhan mereka dengan baik!
        </h2>
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
        >
          {item.map((products, index) => (
            <div className="m-5" key={index}>
              <CardShopping products={products} handleClick={handleClick} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
