import { Hero } from "@/components/home/Hero";
import About from "@/components/home/About";
import { Projects } from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
