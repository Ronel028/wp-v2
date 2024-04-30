import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import ronelPicture from "@/Assets/images/ronel_picture.jpg";

const SourceSansProBold = localFont({
  src: "../../fonts/SourceSansPro-Bold.ttf",
});

const About = () => {
  return (
    <>
      <SectionLayout id="about">
        <PagesTitle
          title="ABOUT ME"
          subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        />
        <main className=" grid grid-cols-2 gap-2">
          <div>
            <h3
              data-aos="fade-up"
              className={` font-medium text-xl tracking-wide mb-5`}
            >
              GET TO KNOW ME<span className=" text-red">!</span>
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className=" text-base tracking-wide mb-4"
            >
              A frontend developer, after graduating with a Bachelor of Science
              in Information Technology, taught myself frontend development.
              Currently, I have 9 months of experience, mainly using the TALL
              Stack (Tailwind, Alpine.js, Laravel, and Livewire). Additionally,
              I have experience in freelance as frontend developer, mostly
              develop thesis/capstone projects.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-base tracking-wide mb-4"
            >
              Ready to embark on the next chapter of my journey, I'm excited to
              leverage my skills and passion to contribute to meaningful
              projects that make a difference. Whether it's building intuitive
              interfaces, optimizing user experiences, or exploring new web
              development technologies, I'm always eager to take on new
              challenges and learn something new along the way.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className=" text-base tracking-wide mb-4"
            >
              Let's connect and create something amazing together!
            </p>
            <Link
              href="https://drive.google.com/file/d/1C8afvsJKQ2iZOP02ILdiq-1VK0CTqnJH/view?usp=sharing"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="400"
              className={`tracking-wide inline-flex items-center gap-2 py-2 px-4 bg-red text-white text-sm font-semibold rounded-md shadow-lg shadow-red-500/30 hover:shadow-red-500/50 focus:outline-none`}
            >
              <i className="fa-solid fa-cloud-arrow-down text-sm"></i> Download
              CV
            </Link>
          </div>
          <div
            // data-aos="fade-left"
            // data-aos-offset="500"
            // data-aos-duration="500"
            className=" flex items-center justify-center"
          >
            <Image
              src={ronelPicture}
              width={369}
              height={379}
              quality={100}
              placeholder="blur"
              loading="lazy"
              alt="Ronel Florida"
            />
          </div>
        </main>
      </SectionLayout>
    </>
  );
};

export default About;
