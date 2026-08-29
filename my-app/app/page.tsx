import Image from "next/image";
import Hero from './_sections/Hero';
import Footer from './_sections/Footer';
import Projects from './_sections/Projects';
import Experience from "./_sections/Experience";
import Intro from './_sections/Intro'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background">
      <Hero />
      <Intro />
      <Experience />
      <Projects />
      <Footer />
    </div >
  );
}
