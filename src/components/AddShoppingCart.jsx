import React, { useState, useEffect } from "react";
import food1 from "../assets/15.png";
import food2 from "../assets/16.png";
import food3 from "../assets/18.png";
import food4 from "../assets/8.png";
import drug1 from "../assets/12.png";
import drug2 from "../assets/11.png";
export default function AddShoppingCart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const calculateTotalPrice = () => {
    let total = 0;
    data.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    setAmount(cart.length);
    cart.map((item) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const data = [
    {
      id: 1,
      name: "Felibite Mother and Kitten",
      price: 50,
      image: food1,
    },
    {
      id: 2,
      name: "Royal Canin",
      price: 100,
      image: food2,
    },
  ];
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n',
        }}
      />
      <div className="h-screen bg-yellow-200 pt-20">
        <h1 className="mb-10 text-center text-3xl font-bold ">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((product, index) => (
              <div
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                key={product.id}
              >
                <img
                  src={product.image}
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-teal-400 hover:text-teal-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        defaultValue={1}
                        min={1}
                      />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-teal-500 hover:text-teal-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">$ {product.price}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${price + 4.99} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-teal-500 py-1.5 font-medium text-teal-50 hover:bg-teal-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
