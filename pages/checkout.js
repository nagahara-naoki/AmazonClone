import { CheckOutProduct } from "@/checkoutProduct";
import { Header } from "@/components/Header";
import { selectItems, selectTotal } from "@/redux/slice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="md:grid grid-cols-4 ">
        {/* 左 */}
        <div className="col-span-3 m-5 shadow-ms md::w-8/12">
          <Image
            className="m-auto"
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="amazonCheckOutPage"
          />
          <div className="p-5 space-y-10  bg-white">
            <h1 className="text-1xl font-bold border-b pb-2">
              {items.length === 0 ? "現在気になるリストは何もありません" : "欲しいもの一覧"}
            </h1>

            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                image={item.image}
                category={item.category}
                hasPrice={item.hasPrice}
              />
            ))}
          </div>
        </div>

        {/* 右 */}
        <div className="">
          {items.length > 0 && (
            <div className="bg-white shadow-md  mx-5 mt-5 p-10">
              <div className="flex items-end space-x-3">
                <h1 className="font-bold">合計金額</h1>
                <p className="text-4xl underline">{`${total}$`}</p>
              </div>

              <p className="">{`商品数(${items.length})`}</p>
              <button disabled={!session} className={`button mt-2 w-60 ${!session && "gray-200"}`}>
                {!session ? "ログインする" : "購入する"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
