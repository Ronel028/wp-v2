import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import handIcon from "@/Assets/images/angellist.svg"

const inter = Inter({ subsets: ["latin"] });
const SourceSansProRegular = localFont({
  src: "./fonts/SourceSansPro-Regular.ttf",
});
const SourceSansProBold = localFont({
  src: "./fonts/SourceSansPro-Bold.ttf",
});

export default function Home() {
  return (
    <main
      className={` min-h-screen relative h-auto bg-home-background bg-cover bg-center ${SourceSansProRegular.className}`}
    >
      <div className=" max-w-[1206px] w-[90%] mx-auto ">
        {/* start navigation */}
        <nav className="py-5 flex items-center justify-between">
          <h2 className={`${SourceSansProBold.className} text-[1.1875rem]`}>
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
            <p className={` tracking-wide mb-6 inline-flex items-center gap-1 bg-[#C63D56] py-[11px] px-[16px] rounded-lg ${SourceSansProBold.className}`}>
                <Image
                  src={handIcon}
                  width={20}
                  height={20}
                  alt="Hand Icon"
                />
                Hi There! I'm Ronel Florida
              </p>
            <h1 className={`text-[2.5rem] tracking-wider mb-6 leading-[3rem]`}>
              A <span className={`text-red ${SourceSansProBold.className}`}>Frontend Developer</span>, focused on building Frontend of
              <span className={`text-red ${SourceSansProBold.className}`}> Website</span>.
            </h1>
            <Link href='/' className={` tracking-wide mb-6 flex items-center gap-2 ${SourceSansProBold.className}`}>
              Projects <i class="fa-solid fa-arrow-right-long"></i>
            </Link>
            <div className=" flex items-center gap-6">
              <Link href='/'>
                <i class="fa-brands fa-square-facebook text-xl"></i>  
              </Link>
              <Link href='/'>
                <i class="fa-brands fa-linkedin text-xl"></i>
              </Link>
              <Link href='/'>
                <i class="fa-brands fa-square-github text-xl"></i>
              </Link>
            </div>
          </div>
        </section>
        {/* start Heading */}
      </div>

      <div className=" absolute bottom-2 left-0 right-0 flex items-center justify-center overflow-hidden">
        <div className="">
          <div className="mouse"></div>
        </div>
      </div>

    </main>
  );
}
