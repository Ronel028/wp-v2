import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import knowl from "@/Assets/images/projects/knowl.webp";
import ipAddressTracking from "@/Assets/images/projects/ip-address-tracker.webp";
import calculator from "@/Assets/images/projects/calculator-app.webp";
import urlShortening from "@/Assets/images/projects/url-shortining-landing-page.webp";
import huddleLandingPage from "@/Assets/images/projects/huddle-landing-page.webp";
import tipCalculator from "@/Assets/images/projects/tip-calculator-app.webp";
import githubUserSearch from "@/Assets/images/projects/github-user-search.jpg";
import clipboardLandingPage from "@/Assets/images/projects/clipboard-landing-page.webp";
import countryList from "@/Assets/images/projects/rest-countries-api.webp";
import sunnySideLandingPage from "@/Assets/images/projects/sunnyside-landing-page.webp";
import fyloLandingPage from "@/Assets/images/projects/fylo-landing-page.webp";
import easybankLandingPage from "@/Assets/images/projects/easybank-landing-page.webp";
import loopStudiosLandingPage from "@/Assets/images/projects/loopstudios-landing-page.webp";
import spaceTourismWebsite from "@/Assets/images/projects/space-tourism-website.webp";
import blogrLandingPage from "@/Assets/images/projects/blogr-landing-page.webp";
import adviceGeneratorApp from "@/Assets/images/projects/advice-generator.jpg";
import drPawsManagementSystem from "@/Assets/images/projects/dr-paws-management-system.webp";


let Subtitle = () => {
  return (
    <p className="text-base tracking-wide">
      Here you will find projects that I develop, mostly personal projects focus
      on <span className=" text-red font-bold mr-1">Front-end Development </span>
      Mostly the source of design for my projects is from
      <Link
        href="https://www.frontendmentor.io/profile/Ronel028"
        className="text-red font-bold mx-1"
      >
        Frontend Mentor
      </Link>
      , a platform where you can find various design challenges and projects to
      develop your frontend skills.
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
            className=" text-center max-w-[900px] mx-auto py-1"
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
              src={adviceGeneratorApp}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Advice generator app"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Advice Generator
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                React<span className="text-red"> / </span>Sass
                <span className="text-red"> / </span>Advice Slip API
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-advice-generator-g81k.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-advice-generator"
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
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-ipaddress-tracker"
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
              alt="url shortening landing page"
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
          <div
            data-aos="zoom-out-left"
            data-aos-delay="100"
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
          >
            <Image
              src={githubUserSearch}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Github user search"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Github User Search
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Scss
                <span className="text-red"> / </span>Javascript
                <span className="text-red"> / </span>Github Users API
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://github-user-search-psi-teal.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/github-user-search"
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
              src={clipboardLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Clipboard landing page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Clipboard Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Css
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-clipboard-landing-page-steel.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/FEM-clipboard-landing-page"
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
              src={countryList}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Country list"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">Country List</h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Scss
                <span className="text-red"> / </span>Javascript
                <span className="text-red"> / </span>Rest Country API
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-country-search.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-country-search"
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
              src={sunnySideLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Sunnyside landing page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                SunnySide Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Scss
                <span className="text-red"> / </span>Javascript
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-sunnyside-landing-page-pied.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-sunnyside-landing-page"
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
              src={fyloLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Fyloe landing page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Fylo Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Css
                <span className="text-red"> / </span>Javascript
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-fylo-landing-page.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-fylo-landing-page"
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
              src={easybankLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Easybank landing page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Easybank Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Scss
                <span className="text-red"> / </span>Javascript
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-easybank-landing-page-six.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-easybank-landing-page"
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
              src={loopStudiosLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Loopstudio landing page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Loop Studios Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Scss
                <span className="text-red"> / </span>Javascript
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-loopstudios-landing-page-taupe.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-loopstudios-landing-page"
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
              src={spaceTourismWebsite}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="space tourism website"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Space Tourism Multi-Page Website
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                React<span className="text-red"> / </span>Scss
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-space-tourism-landingpage.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-space-tourism"
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
              src={blogrLandingPage}
              sizes="(max-width: 768px) 100%, auto"
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Blogr landing page"
              className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
              <h4 className="font-bold tracking-wide text-xl">
                Blogr Landing Page
              </h4>
              <p className="font-bold text-white tracking-wide text-xs">
                Html<span className="text-red"> / </span>Scss
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://fem-blogr-landing-page-nine.vercel.app/"
                  target="_blank"
                  className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                >
                  <i className="fa-solid fa-link"></i>
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Ronel028/fem-blogr-landing-page"
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
        <div className=" flex items-center justify-end">
          <Link
            href="/"
            className="hover:bg-red transition-all text-sm tracking-wide font-bold py-2 px-3 border border-red rounded-lg inline-flex items-center gap-2"
          >
            <svg
              className=" text-white w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
            Home
          </Link>
        </div>
      </SectionLayout>
    </>
  );
};

export default AllProjects;
