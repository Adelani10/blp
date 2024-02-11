"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { appContext } from "@/context";
import { Context } from "@/context";

export default function Hero() {
  const [navs, setNavs] = useState([
    { name: "features", href: "/", styled: false },
    { name: "pricing", href: "/", styled: false },
    { name: "contact", href: "/", styled: false },
    { name: "login", href: "/", styled: true },
  ]);

  const {sideBar} = useContext(appContext)

  return (
    <div className="flex flex-col space-y-8 sm:space-y-12 p-6">
      <nav className="flex justify-between items-center">
        <img src="/logo-bookmark.svg" alt="" className="" />
        <div className=" sm:space-x-3 md:space-x-8 hidden sm:inline-block ">
          {navs.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  item.styled
                    ? "hover:border border-softRed hover:bg-white hover:text-softRed bg-softRed rounded-sm text-white"
                    : "border-none"
                } text-veryDarkBlue text-sm px-2 py-1 uppercase`}
              >
                <Link href={item.href}>{item.name}</Link>
              </button>
            );
          })}
        </div>

        <button className="text-softBlue text-4xl sm:hidden">
          <IoMenu />
        </button>
      </nav>

      <section className="flex sm:space-x-6 sm:justify-between  flex-col sm:flex-row">
        <article className="flex flex-col sm:space-y-3 space-y-2 sm:max-w-[50%]">
          <h1 className="capitalize text-2xl font-semibold text-center sm:text-left text-veryDarkBlue">
            a simple bookmark manager
          </h1>
          <p className="text-grayishBlue sm:text-lg text-center sm:text-left sm:max-w-full mx-auto tracking-wide sm:tracking-wide">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex gap-x-4 text-softBlue text-xs ">
            <button className="border w-1/2 hover:bg-softBlue hover:text-white sm:w-auto border-softBlue p-2 py-3 rounded-md">
              Get it on Chrome
            </button>

            <button className="border w-1/2 hover:bg-softBlue hover:text-white sm:w-auto border-softBlue p-2 py-3 rounded-md">
              Get it on Firefox
            </button>
          </div>
        </article>

        <div className="order-first sm:order-last sm:w-[400px] border">
          <img src="/illustration-hero.svg" className="w-full " alt="" />
        </div>
      </section>
    </div>
  );
}
