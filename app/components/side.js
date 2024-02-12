"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { appContext } from "@/context";

import { IoCloseSharp } from "react-icons/io5";

export default function Side() {
  const { sideBar, sideBarOff } = useContext(appContext);

  return (
    <div className="absolute sm:hidden flex flex-col top-0 left-0 bottom-0 bg-veryDarkBlue w-full opacity-95 p-8 scroll space-y-8 max-h-screen">
      <div className="flex items-center justify-between">
        <img src="/logo-bookmark.svg" alt="" className="bg-white" />
        <button onClick={sideBarOff} className="text-4xl font-bold">
          <IoCloseSharp />
        </button>
      </div>

      <div className="flex flex-col text-2xl">
        <button className="border-t border-gray-600 py-6">
          <Link href="" className="uppercase">
            features
          </Link>
        </button>
        <button className="border-t border-gray-600 py-6">
          <Link href="" className="uppercase">
            pricing
          </Link>
        </button>
        <button className="border-t border-gray-600 py-6">
          <Link href="" className="uppercase">
            contact
          </Link>
        </button>
        <button className="border-t border-gray-600 py-6">
          <Link href="" className="uppercase">
            log in
          </Link>
        </button>
      </div>

      <div className="flex justify-center items-end h-full gap-x-12  text-4xl">
        <button className="">
          <FaSquareFacebook />
        </button>

        <button className="">
          <FaSquareTwitter />
        </button>
      </div>
    </div>
  );
}
