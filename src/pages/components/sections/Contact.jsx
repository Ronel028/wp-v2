import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import emailIcon from "@/Assets/images/icons/email.svg";
import phoneIcon from "@/Assets/images/icons/phone.svg";
import emailSendIcon from "@/Assets/images/icons/email-send.svg";

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

const Contact = () => {
  return (
    <>
      <SectionLayout>
        <PagesTitle title="Contact" />
        <main className=" grid grid-cols-2 gap-4 mb-6">
          <section>
            <h5
              data-aos="fade-up"
              data-aos-delay="100"
              className={` text-xl mb-7 font-medium tracking-wide`}
            >
              GET IN TOUCH<span className=" text-red">!</span>
            </h5>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className=" mb-6 tracking-wide"
            >
              I’m open to job opportunity related to web development where I can
              contribute, learn and grow. If you have good opportunity that
              matches my skills then don’t hesitate to contact me.
            </p>
            <div className=" flex flex-col gap-3">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className=" flex items-center gap-2"
              >
                <Image
                  src={emailIcon}
                  width={20}
                  height={20}
                  quality={100}
                  loading="lazy"
                  alt="Email"
                />
                <p className="tracking-wide">rnl.florida@gmail.com</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className=" flex items-center gap-2"
              >
                <Image
                  src={phoneIcon}
                  width={20}
                  height={20}
                  quality={100}
                  loading="lazy"
                  alt="Phone"
                />
                <p className="tracking-wide">+6391-2910-2641</p>
              </div>
            </div>
          </section>
          <section
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className=" border border-red rounded-md py-5 px-4"
          >
            <h5 className={` font-medium text-lg mb-5`}>SEND MESSAGE</h5>
            <form action="">
              <div className=" flex flex-col mb-6">
                <label htmlFor="name" className={` tracking-wide text-sm mb-1`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`tracking-wide py-2 px-3 bg-[#292929] outline-none`}
                />
              </div>
              <div className=" flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className={` tracking-wide text-sm mb-1`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`tracking-wide py-2 px-3 bg-[#292929] outline-none`}
                />
              </div>
              <div className=" flex flex-col mb-6">
                <label
                  htmlFor="message"
                  className={` tracking-wide text-sm mb-1`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className={`tracking-wide py-2 px-3 bg-[#292929] outline-none`}
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div className=" flex items-center justify-end">
                <button
                  className={` font-medium hover:bg-red transition-all text-sm tracking-wide py-2 px-3 border border-red rounded-lg inline-flex items-center gap-2`}
                >
                  <Image
                    src={emailSendIcon}
                    width={20}
                    height={20}
                    quality={100}
                    loading="lazy"
                    alt="Email send"
                  />
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </main>
      </SectionLayout>
    </>
  );
};

export default Contact;
