import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  return (
    <div className="flex flex-col pl-[300px] bg-[#FAFAFF] py-[65px]">
      <div className="flex flex-col gap-1 ml-[141px] mb-[45px]">
        <div className="flex flex-col gap-5">
          <h2 className="font-medium text-5xl text-[#221E41]">
            Projects I've built
          </h2>
          <div className="flex items-center gap-[27px]">
            <div className="w-[1px] h-[58px] bg-[#F78DA7]"></div>
            <p className="font-normal text-xl text-[#F78DA7]">
              Top selected projects I've worked <br /> on in the past.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mr-[300px] ml-[141px] gap-x-[66px] gap-y-[26px] mb-[65px]">
        <div className="flex flex-col justify-between h-[275px] py-[38px] px-[53px] rounded-lg border-[1px] border-[#E1DAFE] hover:shadow-md hover:shadow-gray-200 transition-shadow duration-300">
          <div className="flex flex-col gap-[27px]">
            <div className="flex items-center justify-between">
              <p className="text-[#00ADFF] font-medium text-2xl">Project 1</p>
              <div className="flex items-center gap-4">
                <GitHubIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
                <LaunchIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
              </div>
            </div>

            <p className="text-base font-normal text-[#757384]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              duis eu tempor dolor eu.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#00ADFF] text-base font-mnedium">
              Tech stack :
            </span>
            <div className="gap-3 flex items-center">
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                ReactJS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                NextJS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                Typescript
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                TarlwindCSS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                MaterialUI
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[275px] py-[38px] px-[53px] rounded-lg border-[1px] border-[#E1DAFE] hover:shadow-md hover:shadow-gray-200 transition-shadow duration-300">
          <div className="flex flex-col gap-[27px]">
            <div className="flex items-center justify-between">
              <p className="text-[#00ADFF] font-medium text-2xl">Project 2</p>
              <div className="flex items-center gap-4">
                <GitHubIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
                <LaunchIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
              </div>
            </div>

            <p className="text-base font-normal text-[#757384]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              duis eu tempor dolor eu.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#00ADFF] text-base font-mnedium">
              Tech stack :
            </span>
            <div className="gap-3 flex items-center">
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                ReactJS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                NextJS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                Typescript
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                TarlwindCSS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                MaterialUI
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[275px] py-[38px] px-[53px] rounded-lg border-[1px] border-[#E1DAFE] hover:shadow-md hover:shadow-gray-200 transition-shadow duration-300">
          <div className="flex flex-col gap-[27px]">
            <div className="flex items-center justify-between">
              <p className="text-[#00ADFF] font-medium text-2xl">Project 3</p>
              <div className="flex items-center gap-4">
                <GitHubIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
                <LaunchIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
              </div>
            </div>

            <p className="text-base font-normal text-[#757384]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              duis eu tempor dolor eu.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#00ADFF] text-base font-mnedium">
              Tech stack :
            </span>
            <div className="gap-3 flex items-center">
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                ReactJS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                NextJS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                Typescript
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                TarlwindCSS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                MaterialUI
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[275px] py-[38px] px-[53px] rounded-lg border-[1px] border-[#E1DAFE] hover:shadow-md hover:shadow-gray-200 transition-shadow duration-300">
          <div className="flex flex-col gap-[27px]">
            <div className="flex items-center justify-between">
              <p className="text-[#00ADFF] font-medium text-2xl">Project 4</p>
              <div className="flex items-center gap-4">
                <GitHubIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
                <LaunchIcon className="text-[#00ADFF] w-[30px] h-[34px] cursor-pointer" />
              </div>
            </div>

            <p className="text-base font-normal text-[#757384]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              duis eu tempor dolor eu.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#00ADFF] text-base font-mnedium">
              Tech stack :
            </span>
            <div className="gap-3 flex items-center">
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                ReactJS
              </span>
              <span className="text-xs text-[#5D5B6B] font-normal">NextJS</span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                Typescript
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                TarlwindCSS
              </span>
              <span className="text-[14px] text-[#5D5B6B] font-normal">
                MaterialUI
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mr-[300px] pl-[141px] cursor-pointer">
        <div className="border-[1px] border-r-0 px-[21px] py-[15px] border-[#F78DA7] w-fit h-[55px] flex items-center justify-center">
          <span className="capitalize text-[#F78DA7] text-lg font-normal tracking-[.1em]">
            more projects
          </span>
        </div>
        <div className="border-[1px] border-[#F78DA7] w-[62px] h-[55px] flex items-center justify-center">
          <GitHubIcon className="text-[#F78DA7] w-[30px] h-[34px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
