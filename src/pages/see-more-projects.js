import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import localFont from "next/font/local";
import { Inter, PT_Sans, Space_Mono, Barlow, Roboto_Condensed } from "next/font/google";
import Headings from "./components/sections/heading";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import AllProjects from "./components/sections/projectsList";

const poppins = Barlow({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'], 
});
const SourceSansProRegular = localFont({
  src: "./fonts/SourceSansPro-Regular.ttf",
});
const SourceSansProBold = localFont({
  src: "./fonts/SourceSansPro-Bold.ttf",
});

export default function ProjectsList() {

  useEffect(() =>{
    Aos.init()
  }, [])

  return (
      <main className={`${poppins.className} bg-[#191919]`}>
        <div className="max-w-[1206px] w-[90%] mx-auto overflow-hidden">
          <AllProjects />
        </div>
      </main>
  );
}
