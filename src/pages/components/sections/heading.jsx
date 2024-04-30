import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import handIcon from "@/Assets/images/angellist.svg";
import MouseWheel from "../mouse-wheel";
import SocialLink from "../SocialLinks";
import Navigation from "../navigation";

const inter = Inter({ subsets: ["latin"] });
const SourceSansProBold = localFont({
  src: "../../fonts/SourceSansPro-Bold.ttf",
});

const Headings = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position >= 600) {
        setBgColor("bg-black border-b border-red");
      } else {
        setBgColor("bg-transparent");
      }
      console.log(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={` min-h-screen flex items-center justify-center relative h-auto bg-home-background bg-cover bg-center `}
    >
      <div className=" max-w-[1206px] w-[90%] mx-auto ">
        {/* start navigation */}
        <Navigation scrollPosition={scrollPosition} bgColor={bgColor} />
        {/* start navigation */}

        {/* start Heading */}
        <section className="">
          <div className=" max-w-[681px] ml-[108px]">
            <p
              className={`animate__animated animate__fadeInDownBig animate__delay-4s tracking-wider mb-6 inline-flex items-center gap-1 bg-[#C63D56] py-[11px] px-[16px] rounded-lg`}
            >
              <Image src={handIcon} width={19} height={19} alt="Hand Icon" />
              Hi There! I'm Ronel Florida
            </p>
            <h1
              className={`animate__animated animate__fadeInDownBig animate__delay-3s text-[2.5rem] tracking-wider mb-6 leading-[3rem]`}
            >
              A <span className={`text-red font-bold`}>Frontend Developer</span>
              , focused on building Frontend of
              <span className={`text-red font-bold`}> Website</span>.
            </h1>
            <Link
              href="#projects"
              className={`animate__animated animate__fadeInDownBig animate__delay-2s tracking-wider mb-6 py-2 px-4 inline-flex items-center gap-2 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 focus:outline-none ${SourceSansProBold.className}`}
            >
              <i className="fa-solid fa-folder-open text-sm"></i> Projects
            </Link>
            <SocialLink animate="animate__animated animate__fadeInDownBig" />
          </div>
        </section>
        {/* start Heading */}
      </div>
      <MouseWheel />
    </main>
  );
};

export default Headings;
