import Image from "next/image";
import Link from "next/link";
import { ScrollLink } from "react-scroll";

const Navbar = ({ textEnter, textLeave }) => {
  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 30,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  return (
    <div className="flex items-center justify-between w-full py-[50px] px-[300px] z-10 bg-[#FAFAFF]">
      <span className="h-[36px] font-medium text-2xl logo cursor-pointer">
        Aadarsh
      </span>

      <div className="flex items-center gap-[116px]">
        <nav className="flex items-center gap-[60px]">
          <Link href="/">
            <a
              className="font-light text-[1.1rem] text-[#0D0D0D] uppercase cursor-pointer"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              goto="about"
              onClick={onBtnClick}
            >
              About
            </a>
          </Link>
          <Link href="/">
            <a
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-light text-[1.1rem] text-[#0D0D0D] uppercase"
              goto="projects"
              onClick={onBtnClick}
            >
              Projects
            </a>
          </Link>
          <Link href="/">
            <a
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-light text-[1.1rem] text-[#0D0D0D] uppercase"
              goto="contact"
              onClick={onBtnClick}
            >
              Contact
            </a>
          </Link>
        </nav>

        <Link href="/">
          <span className="flex items-center justify-center px-[11px] py-[5px] w-[90px] h-[33px] cursor-pointer bg-[#00ADFF] rounded text-base text-white font-normal">
            Let's talk
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
