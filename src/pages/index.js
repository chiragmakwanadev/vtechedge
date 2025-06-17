import Landing from "@/components/Landing/Landing";
import About from "@/components/Landing/About";
import Brands from "@/components/Landing/Brands";
import Service from "@/components/Landing/Service";
import Why from "@/components/Landing/Why";

export default function Home() {
  return (
    <div>
      <main className="">
        <Landing />
        <About />
        <Brands />
        <Service />
        <Why />
      </main>
    </div>
  );
}
