import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techIcons = [
    { Icon: CgCPlusPlus },
    { Icon: DiJavascript1 },
    { Icon: TbBrandGolang },
    { Icon: DiNodejs },
    { Icon: DiReact },
    { Icon: DiMongodb },
    { Icon: SiNextdotjs },
    { Icon: DiGit },
    { Icon: SiFirebase },
    { Icon: SiRedis },
    { Icon: SiPostgresql },
    { Icon: DiPython },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12">
      {techIcons.map(({ Icon }, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full hover:scale-110 transition-transform"
        >
          <Icon className="text-3xl" />
        </div>
      ))}
    </div>
  );
}

export default Techstack;
