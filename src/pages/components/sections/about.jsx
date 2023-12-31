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
              Hello, my name is Ronel Florida, and I am an enthusiastic
              self-taught web developer. I have a strong passion for coding and
              web development, and have been teaching myself through online
              resources and creating personal projects.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-base tracking-wide mb-4"
            >
              I am a quick learner. I am constantly learning and experimenting
              with new technologies to expand my skillset. I am looking forward
              to gain professional experience in the field and im open to any
              opportunity to work on real-world projects.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className=" text-base tracking-wide mb-4"
            >
              If you want to know more about me, Then don't hesitate to contact
              me if you have any questions or if you want to work together.
            </p>
            <Link
              href="/"
              data-aos="fade-up"
              data-aos-delay="400"
              className={`tracking-wide inline-flex items-center gap-2 py-2 px-4 bg-red text-white text-sm font-semibold rounded-md shadow-lg shadow-red-500/30 hover:shadow-red-500/50 focus:outline-none`}
            >
              <i className="fa-solid fa-headset text-sm"></i> Contact Me
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
