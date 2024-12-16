import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import knowl from "@/Assets/images/projects/knowl.webp";
import calculator from "@/Assets/images/projects/calculator-app.webp";
import urlShortening from "@/Assets/images/projects/url-shortining-landing-page.webp";
import huddleLandingPage from "@/Assets/images/projects/huddle-landing-page.webp";
import tipCalculator from "@/Assets/images/projects/tip-calculator-app.webp";
import clipboardLandingPage from "@/Assets/images/projects/clipboard-landing-page.webp";
import fire from "@/Assets/images/Fire.png";
import ProjectCard from "../projectCard";

const SourceSansProBold = localFont({
  src: "../../fonts/SourceSansPro-Bold.ttf",
});

let Subtitle = () => {
  return (
    <p className="text-base tracking-wide">
      A collection of personal projects showcasing my experience in <span className=" font-bold text-red">Front-end development</span> and my progress in <span className="text-red font-bold">Full-stack development</span>.
    </p>
  );
};

const Projects = () => {
  return (
    <>
      <SectionLayout id="projects">
        <PagesTitle title="My Works" subtitle={<Subtitle />} />
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
            imageSrc={clipboardLandingPage}
            name={'Clipboard Landing Page'}
            technologies={['Html', 'Css']}
            projectLink={'https://fem-clipboard-landing-page-steel.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/FEM-clipboard-landing-page'}
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
            dataAos={'zoom-out-down'}
            imageSrc={calculator}
            name={'Calculator'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-calculator-app-seven.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/FEM-Calculator-App'}
          />
          <ProjectCard
            dataAos={'zoom-out-left'}
            imageSrc={tipCalculator}
            name={'Tip Calculator'}
            technologies={['Html', 'Scss', 'Javascript']}
            projectLink={'https://fem-tip-calculator-henna.vercel.app/'}
            projectSourceCode={'https://github.com/Ronel028/fem-tip-calculator'}
          />
        </main>
        <div className=" flex items-center justify-center">
          <Link
            href="/see-more-projects"
            className="hover:bg-red transition-all text-sm tracking-wide font-bold py-2 px-3 border border-red rounded-lg inline-flex items-center gap-2"
          >
            <Image
              src={fire}
              width={17}
              height={17}
              quality={100}
              loading="lazy"
              alt="fire"
              className=""
            />
            More Projects
          </Link>
        </div>
      </SectionLayout>
    </>
  );
};

export default Projects;
