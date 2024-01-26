import Image from "next/image";
import Hero from "./components/hero";
import Main from "./components/main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="container mx-auto p-6">
        <Hero />
        <Main />
      </div>
    </main>
  );
}
