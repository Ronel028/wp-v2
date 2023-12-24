import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import frontendIcon from "@/Assets/images/icons/google-code.png";
import html from "@/Assets/images/icons/Html.png";
import css from "@/Assets/images/icons/css.png";
import javascript from "@/Assets/images/icons/Javascript.png";
import react from "@/Assets/images/icons/React.png";
import tailwind from "@/Assets/images/icons/tailwind.png";
import nextjs from "@/Assets/images/icons/nextjs.png";
import alpine from "@/Assets/images/icons/alpine.png";
import node from "@/Assets/images/icons/node.png";
import laravel from "@/Assets/images/icons/laravel.png";
import express from "@/Assets/images/icons/express.png";
import git from "@/Assets/images/icons/git.png";
import figma from "@/Assets/images/icons/figma.png";

const SourceSansProBold = localFont({
  src: "../../fonts/SourceSansPro-Bold.ttf",
});

let Subtitle = () => {
  return (
    <p className="text-base tracking-wide">
      Here you will see my skills, All the tools that I use in development
      gained through <span className="font-bold text-red">experience</span> at
      <span className="font-bold text-red"> personal projects and work.</span>
    </p>
  );
};

const Skills = () => {
  return (
    <>
      <SectionLayout>
        <PagesTitle title="Skills" subtitle={<Subtitle />} />
        <main className=" grid grid-cols-3 gap-4 mb-6">
          <div>
            <div className=" flex items-center gap-2">
              <Image
                src={frontendIcon}
                width={25}
                height={25}
                quality={100}
                placeholder="blur"
                loading="lazy"
                alt="Google code"
              />
              <h5 className=" font-bold tracking-wide">
                Frontend | Frameword | Library
              </h5>
            </div>
            <div className=" grid grid-cols-4">
              <div className="flex flex-col items-center ">
                <Image
                  src={html}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">HTML</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src={css}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={javascript}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">
                  Javascript
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src={react}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">React</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src={tailwind}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">Tailwind</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src={nextjs}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">Next.js</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src={alpine}
                  width={44}
                  height={44}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                  alt="Html"
                />
                <p className=" inline-block text-sm tracking-wide">Alpine</p>
              </div>
            </div>
          </div>
        </main>
      </SectionLayout>
    </>
  );
};

export default Skills;
