"use client";
import Link from "next/link";
// import { useState } from "react";

export default function Main() {
  return (
    <section className="text-black space-y-10">
      <div className="space-y-2">
        <h3 className="capitalize text-2xl font-semibold text-center text-veryDarkBlue">features</h3>
        <p className="text-grayishBlue lg:max-w-[60%] mx-auto sm:text-lg text-center sm:tracking-wide">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div className="flex flex-col items-center justify-center sm:flex-row border-t">
          <button className="text-veryDarkBlue capitalize hover:border-softRed hover:border-b-2 w-full sm:w-auto p-2 py-3 border-b">
            simple bookmarking
          </button>
          <button className="text-veryDarkBlue capitalize hover:border-softRed hover:border-b-2 w-full sm:w-auto p-2  py-3 border-b">
            speedy searching
          </button>
          <button className="text-veryDarkBlue capitalize hover:border-softRed hover:border-b-2 w-full sm:w-auto p-2 py-3 border-b">
            easy sharing
          </button>
        </div>
      </div>

      <div className="flex sm:space-x-6 sm:justify-between space-y-4 sm:space-y-0 flex-col sm:flex-row items-center ">
        <div className="p-4 border">
          <img src="/illustration-features-tab-1.svg" className=" " alt="" />
        </div>

        <article className="flex flex-col sm:space-y-3 space-y-2 sm:max-w-[50%]">
          <h1 className="text-2xl font-semibold text-center sm:text-left text-veryDarkBlue">
            Bookmark in one click
          </h1>
          <p className="text-grayishBlue text-center sm:text-left max-w-[78%] sm:max-w-full mx-auto  sm:tracking-wide">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favorite sites.
          </p>

          <button className="border hover:bg-softBlue hover:text-white capitalize border-softBlue p-2 py-3 hidden sm:inline-block rounded-md">
            more info
          </button>
        </article>
      </div>

      <div className="">
        <h3 className=" text-2xl text-veryDarkBlue font-semibold space-y-3 text-center">
          Download the extention
        </h3>
        <p className="text-grayishBlue sm:text-lg text-center sm:tracking-wide max-w-[78%] mx-auto pb-6">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritize
        </p>

        <div className="flex flex-col items-center justify-center sm:flex-row border-t"></div>
      </div>
    </section>
  );
}
