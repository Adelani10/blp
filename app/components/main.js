"use client";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

{
  /* <IoMdArrowDropup /> */
}

export default function Main() {
  const [browser, setBrowser] = useState([
    {
      img: "/logo-chrome.svg",
      text: "Chrome",
      version: 62,
      margin1: false,
      margin2: false,
    },
    {
      img: "/logo-firefox.svg",
      text: "Firefox",
      version: 55,
      margin1: true,
      margin2: false,
    },
    {
      img: "/logo-opera.svg",
      text: "Opera",
      version: 46,
      margin1: true,
      margin2: true,
    },
  ]);
  const [faq, setFaq] = useState([
    {
      id: "1",
      question: "What is Bookmark",
      answer:
        "sdgfyuef daiguhsa dwcguioiq  cuhas hce n xhowqu cqipj icjpie jebapowd0 cqeilhiih gsd uhqohucp jbiph JCEBIP EIEHII jei jfhipe ioqpj jwdcipjo ygqi hijwd",
    },
    {
      id: "2",
      question: "How can i request a new browser?",
      answer:
        "sdgfyuef daiguhsa dwcguioiq  cuhas hce n xhowqu cqipj icjpie jebapowd0 cqeilhiih gsd uhqohucp jbiph JCEBIP EIEHII jei jfhipe ioqpj jwdcipjo ygqi hijwd",
    },
    {
      id: "3",
      question: "Is there a mobile app?",
      answer:
        "sdgfyuef daiguhsa dwcguioiq  cuhas hce n xhowqu cqipj icjpie jebapowd0 cqeilhiih gsd uhqohucp jbiph JCEBIP EIEHII jei jfhipe ioqpj jwdcipjo ygqi hijwd",
    },
    {
      id: "4",
      question: "What about other Chromium browsers",
      answer:
        "sdgfyuef daiguhsa dwcguioiq  cuhas hce n xhowqu cqipj icjpie jebapowd0 cqeilhiih gsd uhqohucp jbiph JCEBIP EIEHII jei jfhipe ioqpj jwdcipjo ygqi hijwd",
    },
  ]);

  return (
    <section className="text-black space-y-10">
      <div className="space-y-2">
        <h3 className="capitalize text-2xl font-semibold text-center text-veryDarkBlue">
          features
        </h3>
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
          <p className="text-grayishBlue text-center sm:text-left mx-auto sm:mx-0 sm:tracking-wide">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favorite sites.
          </p>

          <button className="border hover:bg-softBlue hover:text-white capitalize border-softBlue p-2 py-3 hidden sm:inline-block rounded-md">
            more info
          </button>
        </article>
      </div>

      <div className="space-y-2">
        <h3 className=" text-2xl text-veryDarkBlue font-semibold text-center">
          Download the extention
        </h3>
        <p className="text-grayishBlue sm:text-lg text-center sm:tracking-wide lg:max-w-[60%] mx-auto pb-6">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritize.
        </p>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-x-4 ">
          {browser.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col shadow p-5 ${
                  item.margin1 && item.margin2
                    ? "sm:mt-24"
                    : item.margin1
                    ? "sm:mt-12"
                    : "sm:mt-0"
                } sm:max-w-[33.3%] max-w-[80%] gap-y-8`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <img src={item.img} alt="" className="w-24" />
                  <div className="space-y-1">
                    <h4 className="font-semibold text-veryDarkBlue">
                      Add to {item.text}
                    </h4>
                    <p className="text-xs text-grayishBlue">
                      Minimum version {item.version}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-y-5">
                  <img src="/bg-dots.svg" alt="" className="w-full" />
                  <button className="border bg-softBlue text-white capitalize hover:text-softBlue border-softBlue hover:bg-white p-2 text-sm  rounded-md">
                    add & install extension
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-2 max-w-[60%] mx-auto">
        <h3 className=" text-2xl text-veryDarkBlue font-semibold text-center">
          Frequently asked questions
        </h3>
        <p className="text-grayishBlue sm:text-lg text-center sm:tracking-wide lg:max-w-[60%] mx-auto pb-6">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>

        <div className="flex flex-col border-t">
          {faq.map((item, index) => {
            return (
              <div key={index} className="w-full p-2 py-3  border-b space-y-3">
                <button className=" flex w-full text-veryDarkBlue items-center justify-between">
                  <h4 className="text-veryDarkBlue text-xl">
                    {item.question}
                  </h4>
                  <IoMdArrowDropdown className="text-2xl" />
                </button>
                <p className="text-sm hidden text-grayishBlue">
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
