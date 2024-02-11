import Hero from "./components/hero";
import Main from "./components/main";
import Side from "./components/side";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="container mx-auto space-y-12">
        <Side/>
        <Hero />
        <Main />
      </div>
    </main>
  );
}
