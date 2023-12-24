import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import ronelPicture from "@/Assets/images/ronel_picture.jpg";
import ideaHive from "@/Assets/images/projects/ideaHive.jpg";
import ipAddressTracking from "@/Assets/images/projects/ip-address-tracker.webp";
import calculator from "@/Assets/images/projects/calculator-app.webp";
import urlShortening from "@/Assets/images/projects/url-shortining-landing-page.webp";
import huddleLandingPage from "@/Assets/images/projects/huddle-landing-page.webp";
import tipCalculator from "@/Assets/images/projects/tip-calculator-app.webp";
import fire from "@/Assets/images/Fire.png";

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
            <div></div>
          </div>
        </main>
      </SectionLayout>
    </>
  );
};

export default Skills;
