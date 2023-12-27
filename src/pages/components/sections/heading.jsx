import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import handIcon from "@/Assets/images/angellist.svg";
import MouseWheel from "../mouse-wheel";
import SocialLink from "../SocialLinks";

const inter = Inter({ subsets: ["latin"] });
const SourceSansProBold = localFont({
  src: "../../fonts/SourceSansPro-Bold.ttf",
});

const Headings = () => {
  return (
    <main
      className={` min-h-screen relative h-auto bg-home-background bg-cover bg-center `}
    >
      <div className=" max-w-[1206px] w-[90%] mx-auto ">
        {/* start navigation */}
        <nav className="py-5 flex items-center justify-between animate__animated animate__fadeIn animate__delay-2s">
          <h2 className={` font-bold text-[1.1875rem]`}>
            @rnl_dev<span className="text-[#C63D56]">.</span>
          </h2>
          <ul className="flex items-center gap-8 text-base">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Skills</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* start navigation */}

        {/* start Heading */}
        <section className=" mt-[154px]">
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
              href="/"
              className={`animate__animated animate__fadeInDownBig animate__delay-2s tracking-wider mb-6 py-2 px-4 inline-flex items-center gap-2 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 focus:outline-none ${SourceSansProBold.className}`}
            >
              <i class="fa-solid fa-folder-open text-sm"></i> Projects
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
