import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WidgetComponent from "./components/api";


export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Header />
      <Hero />

    </main>
  );
}
