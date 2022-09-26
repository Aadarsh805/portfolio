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
        <div className="flex flex-col items-start gap-[25px]">
          <div className="flex items-start gap-[22px]">
            <div className="w-[2px] mt-1 h-[122px] bg-[#F78DA7]"></div>
            <p className="font-md text-2xl w-[555px] text-[#757384]">
              I am Aadarsh, I specialize in frontend web development. I am a
              third year college student, based in India . I love Design,
              Technology, and Web.
            </p>
          </div>
          <p className="font-md text-lg w-[555px] text-[#757384]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus eget dictum in diam tincidunt et. Nec, lectus mauris enim dignissim. Facilisis.
          </p>
        </div>
      </div>

      <div className="w-[679px] h-[370px] rounded flex items-center justify-end mr-[130px]">
        <Image src={cat} className="w-full rounded" />
      </div>
    </div>
  );
};

export default About;
