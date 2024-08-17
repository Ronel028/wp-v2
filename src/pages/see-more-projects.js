import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import localFont from "next/font/local";
import { Barlow } from "next/font/google";
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

  useEffect(() => {
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
