import Image from "next/image";
import localFont from "next/font/local";

const SourceSansProBold = localFont({
  src: "../fonts/SourceSansPro-Bold.ttf",
});

const SkillsCard = (props) => {
  return (
    <div className=" flex items-start">
      <div className="flex flex-col items-center ">
        <Image
          src={props.src}
          width={44}
          height={44}
          quality={100}
          loading="lazy"
          alt={props.alt}
        />
        <p className=" inline-block text-sm tracking-wide">{props.title}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
