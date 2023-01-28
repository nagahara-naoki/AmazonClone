import React from "react";
import Image from "next/image";
import { BsSearch, BsList } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/redux/slice";

export const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* トップナビゲーション */}
      <div className="flex items-center  bg-amazon_blue p-1 flex-grow py-3 px-4 ">
        <div className="mt-2 flex items-center flex-grow">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="cursor-pointer"
            alt="amazonLogo"
          />
        </div>

        {/* 検索 */}
        <div className="bg-yellow-400 ml-3 hidden sm:flex items-center rounded-md flex-grow cursor-pointer ">
          <input type="text" className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none" />
          <BsSearch className=" h-9 text-xl p-1 hover:bg-yellow-500 rounded-r-md  " />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div onClick={signIn} className="link">
            <p>{session ? `おかえりなさい！${session.user.name}さん` : "サインイン"}</p>
            <p className="font-extrabold md:text-sm ">アカウント＆リスト</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm ">注文履歴</p>
          </div>
          <div onClick={() => router.push("/checkout")} className=" relative flex items-center link ">
            <span className="absolute top-0 right-14 md:right-14 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold ">
              {items.length}
            </span>
            <AiOutlineShoppingCart className="text-5xl" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-3 underline ">買物リスト</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <BsList className="h-6 mr-1 text-xl" />
          すべて
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today Deals</p>
        <p className="link hidden lg:inline-flex ">Electronics</p>
        <p className="link hidden lg:inline-flex ">Food & Grocery</p>
        <p className="link hidden lg:inline-flex ">Buy Again</p>
        <p className="link hidden lg:inline-flex ">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex ">Health</p>
      </div>
    </header>
  );
};
