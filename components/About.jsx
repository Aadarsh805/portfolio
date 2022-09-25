import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../public/Group1.png";
import cat from "../public/cat.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const About = () => {
  return (
    <div className="flex justify-between items-center pl-[300px] py-[350px] gap-[146px] h-[50vh]">
      <div className="flex flex-col gap-1 ml-[140px]">
        <h2 className="font-medium text-8xl leading-[145px] tracking-[0.065em] text-[#221E41]">
          About Me
        </h2>
        <div className="flex items-start gap-[22px]">
          <Image src={arrow} className="w-[13px] h-[141px]" />
          <p className="font-md text-2xl text-[#757384]">
            I love Design, Technology,
            <br /> and Web.
          </p>
        </div>
        <Link href="/" className="w-full relative">
          <div className="z-10 mt-[26px] group flex items-center relative w-fit justify-center gap-[10px] bg-[#00ADFF] rounded p-3 h-[52px] cursor-pointer">
            <div className="h-[52px] absolute w-[154px] border-[1px] border-[#00ADFF] top-[7px] left-[7px]  rounded group-hover:top-0 group-hover:left-0 ase-out duration-300"></div>
            <span className=" font-medium text-lg w-fit text-white">
              Read More
            </span>
            <ChevronRightIcon className="text-[#F8F8F8]" />
          </div>
        </Link>
      </div>

      <div className="w-[679px] h-[370px] rounded flex items-center justify-end mr-[130px]">
        <Image src={cat} className="w-full rounded" />
      </div>
    </div>
  );
};

export default About;
