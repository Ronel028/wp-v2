import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import knowl from "@/Assets/images/projects/knowl.webp";
import drPawsManagementSystem from "@/Assets/images/projects/dr-paws-management-system.webp";
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

const Projects = () => {
  return (
    <>
      <SectionLayout id="projects">
        <PagesTitle title="My Works" subtitle={<Subtitle />} />
        <main className=" grid grid-cols-3 gap-4 mb-6">
          <div
            data-aos="zoom-out-right"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={knowl}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="IdeaHive"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">Knowl</h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Laravel<span className="text-red"> / </span>React
                <span className="text-red"> / </span>Tailwind
                <span className="text-red"> / </span>
                MySQL
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://knowl.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/knowl"
                  target="_blank"
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
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/FEM-Calculator-App"
                  target="_blank"
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
              src={drPawsManagementSystem}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Dr Paws pet management system"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Dr Paws pet management system
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Laravel<span className="text-red"> / </span>Livewire
                <span className="text-red"> / </span>Tailwind
                <span className="text-red"> / </span>
                MySql
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://dr-paws-pet-care-management-system.onrender.com/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/dr-paws-pet-care-management-system"
                  target="_blank"
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
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/URL-shortening-api"
                  target="_blank"
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
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-huddle-landing-page"
                  target="_blank"
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
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-tip-calculator"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        </main>
        <div className=" flex items-center justify-center">
          <Link
            href="/see-more-projects"
            className="hover:bg-red transition-all text-sm tracking-wide font-bold py-2 px-3 border border-red rounded-lg inline-flex items-center gap-2"
          >
            <Image
              src={fire}
              width={20}
              height={20}
              quality={100}
              loading="lazy"
              alt="fire"
              className=""
            />
            See More Projects
          </Link>
        </div>
      </SectionLayout>
    </>
  );
};

export default Projects;
