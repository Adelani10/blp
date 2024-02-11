"use client"
import Hero from "./components/hero";
import Main from "./components/main";
import Side from "./components/side";
import { appContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const {sideBar} = useContext(appContext)
  return (
    <main className="flex flex-col items-center bg-white">
      <div className={`${sideBar ? "h-screen overflow-y-hidden" : ""} container mx-auto space-y-12`}>
        {sideBar && <Side/>}
        <Hero />
        <Main />
      </div>
    </main>
  );
}
