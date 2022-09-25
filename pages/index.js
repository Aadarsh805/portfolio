import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from '../components/Projects'

const index = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      {/* <div className="fixed left-[310px] top-[40%] gap-5 flex flex-col">
        <a href="#id1" className="w-[52px] h-[5px] bg-[#221E41]"></a>
        <a href="#id2" className="w-[33px] h-[5px] bg-[#221E41]"></a>
        <a href="#id3" className="w-[33px] h-[5px] bg-[#221E41]"></a>
        <a href="#id4" className="w-[33px] h-[5px] bg-[#221E41]"></a>
      </div> */}
    </>
  );
};

export default index;
