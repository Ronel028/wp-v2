const PagesTitle = ({ title, subtitle }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="center-bottom"
      className=" text-center max-w-[676px] mx-auto mb-[73px]"
    >
      <h2 className={` font-medium text-[1.75rem] tracking-wide`}>{title}</h2>
      <div className="text-base tracking-wide">{subtitle}</div>
    </div>
  );
};

export default PagesTitle;
