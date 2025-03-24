import { CanvasRevealEffectDemo } from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems.map((item) => ({ link: item.link, name: item.name }))} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <CanvasRevealEffectDemo />
        <Footer />
      </div>
    </main>
  );
}
