import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/pages/layout/sectionLayout";
import localFont from "next/font/local";
import PagesTitle from "../pages-title";
import SocialLink from "../SocialLinks";

const SourceSansProBold = localFont({
  src: "../../fonts/SourceSansPro-Bold.ttf",
});

const Footer = () => {
  return (
    <>
      <footer className="my-6">
        <div className=" flex items-center justify-between mb-2">
          <h2 className={`${SourceSansProBold.className} text-[1.1875rem]`}>
            @rnl_dev<span className="text-[#C63D56]">.</span>
          </h2>
          <SocialLink animate="" />
        </div>
        <div className=" flex item-center justify-center">
          <p>
            Design and Built by
            <span className={`${SourceSansProBold.className} text-red ml-1`}>
              Ronel Florida
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
