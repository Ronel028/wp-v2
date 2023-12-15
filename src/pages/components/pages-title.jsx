import localFont from "next/font/local";

const SourceSansProBold = localFont({
    src: "../fonts/SourceSansPro-Bold.ttf",
  });

const PagesTitle = ({ title, subtitle }) =>{
    return (
        <div className=" text-center max-w-[676px] mx-auto mb-[73px]">
            <h2 className={`${SourceSansProBold.className} text-[1.75rem] tracking-wide`}>{title}</h2>
            <p className="text-base tracking-wide">{subtitle}</p>
        </div>
    )
}

export default PagesTitle