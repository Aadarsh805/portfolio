import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import { ContentPasteGoOutlined } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 40) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {/* take bake to top */}
      {isVisible && (
        <div className="takeBackToTop">
          <ArrowUpwardIcon
            onClick={scrollToTop}
            font-size="medium"
            sx={{ height: "25px", width: "30px" }}
          />
        </div>
      )}
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
            windowPosition > 700 && windowPosition < 1300
              ? activeBar
              : normalBar
          }`}
          onClick={() => window.scroll(0, 900)}
        ></a>
        <a
          className={` h-[5px] bg-[#221E41] cursor-pointer transition-all duration-100 ease-in ${
            windowPosition > 1300 ? activeBar : normalBar
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
