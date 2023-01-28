import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { addBasket } from "@/redux/slice";
import { useDispatch } from "react-redux";

const MAX_RATING = 5;
const MIN_RATING = 1;

export const Product = ({ id, title, price, category, description, image }) => {
  const dispatch = useDispatch();
  const [hasPrice] = useState(1);
  const [rating, setRanting] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);

  const addItemBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      description,
      image,
    };
    dispatch(addBasket(product));
  };

  return (
    <div className="relative flex flex-col justify-between space-y-2 m-5 bg-white z-30 p-10 ">
      <div>
        <div className="pb-3">
          <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
          <Image width={200} height={200} src={image} alt="productImage" className="mx-auto aspect-auto" />
        </div>
        <h4>{title}</h4>
        <div className="flex">
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <StarIcon className="h-5 text-yellow-400 " />
              </div>
            ))} */}
        </div>
        <p>{`${price}$`}</p>
        <div className="p-2 pt-6  h-50 ">
          <h2 className="font-medium">商品説明</h2>
          <div className="pt-1">
            <p className="text-sm text-gray-400 line-clamp-4">{description}</p>
          </div>
        </div>
      </div>
      <div className="">
        <button className="button" onClick={addItemBasket}>
          カートに追加
        </button>
      </div>
    </div>
  );
};
