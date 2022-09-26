import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import { ContentPasteGoOutlined } from "@mui/icons-material";

const activeBar = "w-[52px]";
const normalBar = "w-[33px]";

const index = ({ textEnter, textLeave }) => {
  const [windowPosition, setWindowPosition] = useState(0);

  useEffect(() => {
    const scrollFunc = () => {
      setWindowPosition(window.pageYOffset);
    };
    console.log(windowPosition);
    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, [windowPosition]);

  // console.log(windowPosition);

  return (
    <>
      {/* take bake to top */}
      {/* <div className=""></div> */}
      <Navbar textEnter={textEnter} textLeave={textLeave} />
      <HeroSection textEnter={textEnter} textLeave={textLeave} />
      <About />
      <Projects />

      <div className="fixed left-[310px] top-[40%] gap-5 flex flex-col">
        <a
          className={` h-[5px] bg-[#221E41] cursor-pointer transition-all duration-100 ease-in ${
            windowPosition < 700 ? activeBar : normalBar
          }`}
          onClick={() => window.scroll(0, 0)}
        ></a>
        <a
          className={` h-[5px] bg-[#221E41] cursor-pointer transition-all duration-100 ease-in ${
            windowPosition > 700 && windowPosition < 1500
              ? activeBar
              : normalBar
          }`}
          onClick={() => window.scroll(0, 900)}
        ></a>
        <a
          className={` h-[5px] bg-[#221E41] cursor-pointer transition-all duration-100 ease-in ${
            windowPosition > 1500 ? activeBar : normalBar
          }`}
          onClick={() => window.scroll(0, 1700)}
        ></a>
        <a
          className={` h-[5px] bg-[#221E41] cursor-pointer transition-all duration-100 ease-in ${
            windowPosition > 4000 ? activeBar : normalBar
          }`}
          onClick={() => window.scroll(0, 5000)}
        ></a>
      </div>
    </>
  );
};

export default index;
