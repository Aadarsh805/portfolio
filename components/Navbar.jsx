import Image from "next/image";
import Link from "next/link";

const Navbar = ({ textEnter, textLeave }) => {
  return (
    <div className="flex items-center justify-between w-full py-[50px] px-[300px] z-10 bg-[#FAFAFF]">
      <span
        className="h-[36px] font-medium text-2xl logo cursor-pointer"
        onClick={() => window.scroll(0, 0)}
      >
        Aadarsh
      </span>

      <div className="flex items-center gap-[116px]">
        <div className="flex items-center gap-[60px]">
          <Link href="/">
            <a
              className="font-light text-[1.1rem] text-[#0D0D0D] uppercase"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              onClick={() => window.scroll(0, 900)}
            >
              About
            </a>
          </Link>
          <Link href="/">
            <a
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-light text-[1.1rem] text-[#0D0D0D] uppercase"
              onClick={() => window.scroll(0, 1700)}
            >
              Projects
            </a>
          </Link>
          <Link href="/">
            <a
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="font-light text-[1.1rem] text-[#0D0D0D] uppercase"
              onClick={() => window.scroll(0, 5000)}
            >
              Contact
            </a>
          </Link>
        </div>

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
