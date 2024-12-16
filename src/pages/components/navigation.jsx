import Link from "next/link";

const Navigation = ({ scrollPosition, bgColor }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 py-3 transition-colors duration-300 ${bgColor} animate__animated animate__fadeIn animate__delay-2s`}
    >
      <div className="flex items-center justify-between max-w-[1206px] w-[90%] mx-auto">
        <h2 className={` font-bold text-[1.1875rem]`}>
          <Link href="#">
            @rnl_dev<span className="text-[#C63D56]">.</span>
          </Link>
        </h2>
        <ul className="flex items-center gap-8 text-sm">
          <li>
            <Link
              href="#about"
              className={
                scrollPosition >= 644 && scrollPosition <= 1293
                  ? "text-red hover:text-red"
                  : "hover:text-red"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={
                scrollPosition >= 1294 && scrollPosition < 2226
                  ? "text-red hover:text-red"
                  : "hover:text-red"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={
                scrollPosition >= 2227 && scrollPosition < 2870
                  ? "text-red hover:text-red"
                  : "hover:text-red"
              }
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={
                scrollPosition >= 2871
                  ? "text-red hover:text-red"
                  : "hover:text-red"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
