import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { Source_Code_Pro } from "next/font/google";
import AllProjects from "./components/sections/projectsList";

const SourceCodePro = Source_Code_Pro({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function ProjectsList() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <main className={`${SourceCodePro.className} bg-[#191919]`}>
      <div className="max-w-[1206px] w-[90%] mx-auto overflow-hidden">
        <AllProjects />
      </div>
    </main>
  );
}
