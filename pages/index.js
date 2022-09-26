import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <div className="fixed left-[310px] top-[40%] gap-5 flex flex-col">
        <a
          className="w-[52px] h-[5px] bg-[#221E41] cursor-pointer"
          onClick={() => window.scroll(0, 0)}
        ></a>
        <a
          className="w-[33px] h-[5px] bg-[#221E41] cursor-pointer"
          onClick={() => window.scroll(0, 900)}
        ></a>
        <a
          className="w-[33px] h-[5px] bg-[#221E41] cursor-pointer"
          onClick={() => window.scroll(0, 1700)}
        ></a>
        <a
          className="w-[33px] h-[5px] bg-[#221E41] cursor-pointer"
          onClick={() => window.scroll(0, 5000)}
        ></a>
      </div>
    </>
  );
};

export default index;
