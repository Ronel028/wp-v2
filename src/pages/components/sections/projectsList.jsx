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
      Here you will find projects that I develop, mostly personal projects focus
      on <span className=" text-red font-bold">Front end Development</span>
    </p>
  );
};

const AllProjects = () => {
  return (
    <>
      <SectionLayout id="projects">
        <div className="  rounded mb-6 ">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
            className=" text-center max-w-[676px] mx-auto py-1"
          >
            <h2 className={` font-medium  text-[1.75rem] tracking-wide`}>
              My Works
            </h2>
            <div className="text-base tracking-wide">{<Subtitle />}</div>
          </div>
        </div>
        <main className=" grid grid-cols-3 gap-4 mb-6">
          <div
            data-aos="zoom-out-right"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={ideaHive}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="IdeaHive"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">IdeaHive</h4>
              <p className="font-bold text-white tracking-wide text-xs">
                React<span className="text-red"> / </span>Express
                <span className="text-red"> / </span>NodeJS
                <span className="text-red"> / </span>
                MySQL
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://ideahive.vercel.app/"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/ideaHive-blog"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={calculator}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Calculator"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Calculator App
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Sass
                <span className="text-red"> / </span>Javascript
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-calculator-app-seven.vercel.app/"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/FEM-Calculator-App"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-left"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={ipAddressTracking}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Ip Address Tracker"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                IP Address Tracker
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Sass
                <span className="text-red"> / </span>Javascript
                <span className="text-red"> / </span>
                IP Geolocation API <span className="text-red"> / </span>
                LeafletJS
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-ipaddress-tracker.vercel.app/"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-ipaddress-tracker"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-right"
            data-aos-delay="100"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={urlShortening}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Ip Address Tracker"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                URL Shortening Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Sass
                <span className="text-red"> / </span>Javascript
                <span className="text-red"> / </span>
                Shrtcode API
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://url-shortening-api-psi.vercel.app/"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/URL-shortening-api"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-delay="100"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={huddleLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Huddle Landing Page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Huddle Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                React<span className="text-red"> / </span>Sass
                <span className="text-red"> / </span>Framer Motion
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-huddle-landing-page-lemon.vercel.app/"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-huddle-landing-page"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-left"
            data-aos-delay="100"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={tipCalculator}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Tip Calculator"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Tip Calculator
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Sass
                <span className="text-red"> / </span>Javascript
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-tip-calculator-henna.vercel.app/"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-tip-calculator"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        </main>
      </SectionLayout>
    </>
  );
};

export default AllProjects;
