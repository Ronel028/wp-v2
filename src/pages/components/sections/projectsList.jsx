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
import ProjectCard from "../projectCard";


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
          <ProjectCard
            dataAos={'zoom-out-right'}
            imageSrc={knowl}
            name={'Knowl'}
            technologies={['Laravel', 'React', 'Tailwind', 'MySql']}
            projectLink={'https://knowl.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/knowl'}
          />
          <ProjectCard
            dataAos={'zoom-out-down'}
            imageSrc={calculator}
            name={'Calculator'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-calculator-app-seven.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/FEM-Calculator-App'}
          />
          <ProjectCard
            dataAos={'zoom-out-down'}
            imageSrc={adviceGeneratorApp}
            name={'Advie Generator App'}
            technologies={['React', 'Scss', 'Advice Slip API']}
            projectLink={'https://fem-advice-generator-g81k.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-advice-generator'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={ipAddressTracking}
            name={'Ip Address Tracker'}
            technologies={['Html', 'Scss', 'Javascript', 'IP Geolocation API', 'LeafletJs']}
            projectLink={'https://fem-ipaddress-tracker.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-ipaddress-tracker'}
          />
          <ProjectCard
            dataAos={'zoom-out-right'}
            imageSrc={urlShortening}
            name={'Url Shortening Landing page'}
            technologies={['Html', 'Scss', 'Javascript', 'Shrtcode API']}
            projectLink={'https://url-shortening-api-psi.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/URL-shortening-api'}
          />
          <ProjectCard
            dataAos={'zoom-out-up'}
            imageSrc={huddleLandingPage}
            name={'Huddle Landing Page'}
            technologies={['React', 'Scss', 'Framer Motion']}
            projectLink={'https://fem-huddle-landing-page-lemon.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-huddle-landing-page'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={tipCalculator}
            name={'Tip Calculator'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-tip-calculator-henna.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-tip-calculator'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={githubUserSearch}
            name={'Github user search'}
            technologies={['Html', 'Scss', 'Javascript', 'Github User API']}
            projectLink={'https://github-user-search-psi-teal.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/github-user-search'}
          />
          <ProjectCard
            dataAos={'zoom-out-down'}
            imageSrc={clipboardLandingPage}
            name={'Clipboard Landing Page'}
            technologies={['Html', 'Css']}
            projectLink={'https://fem-clipboard-landing-page-steel.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/FEM-clipboard-landing-page'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={countryList}
            name={'Country List'}
            technologies={['Html', 'Css', 'Javascript', 'Rest Country API']}
            projectLink={'https://fem-country-search.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-country-search'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={sunnySideLandingPage}
            name={'Sunnyside landing page'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-sunnyside-landing-page-pied.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-sunnyside-landing-page'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={fyloLandingPage}
            name={'Fylo Landing Page'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-fylo-landing-page.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-fylo-landing-page'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={easybankLandingPage}
            name={'Easybank Landing Page'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-easybank-landing-page-six.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-easybank-landing-page'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={loopStudiosLandingPage}
            name={'Loopstudio landing page'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-loopstudios-landing-page-taupe.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-loopstudios-landing-page'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={spaceTourismWebsite}
            name={'Space Tourism Multi-Page Website'}
            technologies={['React', 'Scss']}
            projectLink={'https://fem-space-tourism-landingpage.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-space-tourism'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={blogrLandingPage}
            name={'Blogr Landing Page'}
            technologies={['Html', 'Scss']}
            projectLink={'https://fem-blogr-landing-page-nine.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-blogr-landing-page'}
          />
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
