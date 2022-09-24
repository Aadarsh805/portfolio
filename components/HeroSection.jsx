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

const HeroSection = () => {
  return (
    <div className="bg-[#FAFAFF] ">
      <div className="flex items-start justify-between px-[300px] pt-[80px] gap-[146px]">
        <div className="flex flex-col items-start ml-[120px]">
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
            <Link href="/" className="w-full">
              <div className="flex items-center w-fit justify-center gap-[10px] bg-[#00ADFF] rounded p-3 h-[52px] cursor-pointer">
                <span className="font-medium text-lg w-fit text-white">
                  See My Projects
                </span>
                <ChevronRightIcon className="text-[#F8F8F8]" />
              </div>
            </Link>
            <Link href="/" className="w-full">
              <div className="flex items-center w-fit justify-center gap-[10px] bg-[#00ADFF] rounded p-3  h-[52px] cursor-pointer">
                <span className="font-medium text-lg w-fit text-white">
                  Download Resume
                </span>
                <DownloadIcon className="text-[#F8F8F8]" />
              </div>
            </Link>
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
          <Link href="/">
            <TwitterIcon className="text-[#00ADFF] w-[30px] h-[34px]" />
          </Link>
          <Link href="/">
            <GitHubIcon className="text-[#00ADFF] w-[30px] h-[34px] " />
          </Link>
          <Link href="/">
            <LinkedInIcon className="text-[#00ADFF] w-[30px] h-[34px] " />
          </Link>
        </div>
      </div>

      <div className="absolute left-[310px] w-full gap-5 bottom-0 flex flex-col items-start">
        {/* <p className="tracking-[.8em] uppercase font-normal text-base text-[#63607A] rotate-90">
          scrolldown
        </p> */}
        <Image src={scroll} />
        <div className="w-[1px] h-[176px] bg-[#63607a97]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
