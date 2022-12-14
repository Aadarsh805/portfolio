import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../public/Group1.png";
import harry from "../public/harrystyles.png";
import scroll from "../public/scroll.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HeroSection = ({ textEnter, textLeave }) => {
  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
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
    <div className="bg-[#FAFAFF]">
      <div className="flex items-start justify-between px-[300px] pt-[80px] gap-[146px]">
        <div className="flex flex-col items-start ml-[140px]">
          <h1 className="w-[630px] h-[240px] font-md text-5xl leading-[72px] text-[#221E41]">
            Hello.
            <br />I am <span className="text-[#F78DA7]">Aadarsh</span>.<br />
            Front End Developer
          </h1>

          <div className="flex items-start gap-[22px] h-[141px]">
            <Image src={arrow} className="w-[13px] h-[141px]" />
            <p className="font-md text-2xl leading-9 text-[#757384] w-[481px]">
              I specialize in building frontend web applications with clean UI
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 mt-[26px]">
            <div
              className="z-10 group flex items-center relative w-fit justify-center gap-[10px] bg-[#00ADFF] rounded p-3 h-[52px] cursor-pointer"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("projects").offsetTop,
                })
              }
            >
              <div className="h-[52px] absolute w-[199px] border-[1px] border-[#00ADFF] top-[7px] left-[7px] rounded group-hover:top-0 group-hover:left-0 ase-out duration-300"></div>
              <span className=" font-medium text-lg w-fit text-white">
                See My Projects
              </span>
              <ChevronRightIcon className="text-[#F8F8F8]" />
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1stgxVhsGM3oLM6UfOKA74BB4WMZIQnhQ"
              downlaod="Aadarsh_Thakur_resume_frontend"
              className="z-10 group flex items-center relative w-fit justify-center gap-[10px] bg-[#F78DA7] rounded p-3 cursor-pointer"
            >
              <div className="h-[52px] absolute w-[228px] border-[1px] border-[#F78DA7] top-[7px] left-[7px] rounded group-hover:top-0 group-hover:left-0 ease-out duration-300"></div>

              <span className=" font-medium group text-lg w-fit text-white">
                Download Resume
              </span>
              <DownloadIcon className="text-[#F8F8F8] group" />
            </a>
          </div>
        </div>

        <div className="w-[400px] h-[370px] rounded border-[1px] relative border-[#F9D9E5]">
          <div className="w-[400px] h-[370px] rounded absolute bg-[#F9D9E5] top-[20px] right-[20px] flex items-end justify-center">
            <Image src={harry} className="w-full rounded" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[130px] pb-[140px] ml-[420px] mr-[290px] gap-[25px] ">
        <div className="flex-1 h-[1px] bg-[#DDDCEC]"></div>
        <div className="flex items-center gap-[17px]">
          <Link href="https://twitter.com/Aadarsh805">
            <a target="_blank">
              <TwitterIcon className="text-[#00ADFF] w-[30px] h-[34px] hover:scale-125 transition-all duration-300" />
            </a>
          </Link>
          <Link href="https://github.com/Aadarsh805">
            <a target="_blank">
              <GitHubIcon className="text-[#00ADFF] w-[30px] h-[34px] hover:scale-125  transition-all duration-300" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/aadarsh-thakur-090a31227/">
            <a target="_blank">
              <LinkedInIcon className="text-[#00ADFF] w-[30px] h-[34px] hover:scale-125 transition-all duration-300  " />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
