import Link from "next/link";

const SocialLink = (props) => {
  return (
    <div className={`${props.animate} flex items-center gap-6`}>
      <Link
        href="https://web.facebook.com/ronelflorida28/"
        target="_blank"
        className=" hover:text-red"
      >
        <i className="fa-brands fa-square-facebook text-xl"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/ronelflorida/"
        target="_blank"
        className=" hover:text-red"
      >
        <i className="fa-brands fa-linkedin text-xl"></i>
      </Link>
      <Link
        href="https://github.com/Ronel028"
        target="_blank"
        className=" hover:text-red"
      >
        <i className="fa-brands fa-square-github text-xl"></i>
      </Link>
    </div>
  );
};

export default SocialLink;
