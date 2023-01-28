import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addBasket, removeFromBasket } from "./redux/slice";

export function CheckOutProduct({ id, title, price, category, description, image, hasPrice, rating }) {
  const dispatch = useDispatch();
  const addToItemBasket = () => {
    const product = {
      id,
      title,
      price,
      category,
      description,
      image,
      hasPrice,
      rating,
    };
    dispatch(addBasket(product));
  };
  const removeItemBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <div className="flex space-y2" width={300}>
        <Image src={image} width={150} height={150} className=" object-contain" />
        <div className="m-5  space-y-1">
          <p className="font-bold">{title}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((i) => (
                <StarIcon key={i} className="h-5 text-yellow-400" />
              ))}
          </div>
          <p className="whitespace-normal">{description}</p>
          <p className="font-bold text-xl ">{`${price}$`}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <div>
          <button onClick={addToItemBasket} className="button">
            カートに追加
          </button>
        </div>
        <div>
          <button onClick={removeItemBasket} className="button">
            キャンセル
          </button>
        </div>
      </div>
    </>
  );
}
