import { useEffect } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css"
import { Source_Code_Pro } from "next/font/google";
import Heading from "./components/sections/Heading";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const SourceCodePro = Source_Code_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function Home() {

  useEffect(() => {
    Aos.init()
  }, [])

  useEffect(() => {
    async function visitors() {
      try {
        await axios.post('/api/visitors')
      } catch (error) {

      }
    }
    visitors()
  }, [])

  return (
    <main className={`${SourceCodePro.className} bg-[#191919]`}>
      <Heading />
      <div className="max-w-[1206px] w-[90%] mx-auto overflow-hidden">
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
