import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import handIcon from "@/Assets/images/angellist.svg"
import MouseWheel from "./components/mouse-wheel";
import Headings from "./components/sections/heading";
import About from "./components/sections/about";

const inter = Inter({ subsets: ["latin"] });
const SourceSansProRegular = localFont({
  src: "./fonts/SourceSansPro-Regular.ttf",
});
const SourceSansProBold = localFont({
  src: "./fonts/SourceSansPro-Bold.ttf",
});

export default function Home() {
  return (
      <main className={`${SourceSansProRegular.className} bg-[#191919]`}>
        <Headings />
        <div className="max-w-[1206px] w-[90%] mx-auto">
          <About />
        </div>
      </main>
  );
}
