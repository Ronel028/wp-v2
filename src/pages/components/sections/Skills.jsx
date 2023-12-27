import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import SkillsCard from "../skillsCards";
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
import codeFork from "@/Assets/images/icons/code-fork.png";
import openPracel from "@/Assets/images/icons/open-parcel.png";

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
          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="border border-red rounded-md py-7 px-4"
          >
            <div className=" flex items-center gap-2 mb-10">
              <Image
                src={frontendIcon}
                width={25}
                height={25}
                quality={100}
                loading="lazy"
                alt="Google code"
              />
              <h5 className="font-medium tracking-wide">
                Frontend | Framework | Library
              </h5>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <SkillsCard src={html} alt="Html" title="Html" />
              <SkillsCard src={css} alt="Css" title="Css" />
              <SkillsCard
                src={javascript}
                alt="Javascript"
                title="Javascript"
              />
              <SkillsCard src={react} alt="React" title="React" />
              <SkillsCard src={tailwind} alt="Tailwind" title="Tailwind" />
              <SkillsCard src={alpine} alt="Alpine" title="Alpine" />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="border border-red rounded-md py-7 px-4"
          >
            <div className=" flex items-center gap-2 mb-10">
              <Image
                src={codeFork}
                width={25}
                height={25}
                quality={100}
                loading="lazy"
                alt="Code Fork"
              />
              <h5 className=" font-medium tracking-wide">
                Backend | Framework | Database
              </h5>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <SkillsCard src={node} alt="Node" title="Node" />
              <SkillsCard src={laravel} alt="Laravel" title="Laravel" />
              <SkillsCard src={express} alt="Express" title="Express" />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="border border-red rounded-md py-7 px-4"
          >
            <div className=" flex items-center gap-2 mb-10">
              <Image
                src={openPracel}
                width={25}
                height={25}
                quality={100}
                loading="lazy"
                alt="Open Parcel"
              />
              <h5 className=" font-medium tracking-wide">Others</h5>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <SkillsCard src={git} alt="Git" title="Git" />
              <SkillsCard src={figma} alt="Figma" title="Figma" />
            </div>
          </div>
        </main>
      </SectionLayout>
    </>
  );
};

export default Skills;
