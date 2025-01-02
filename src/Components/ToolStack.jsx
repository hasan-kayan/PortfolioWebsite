import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiLinux,
  SiGit,
  SiAmazon,
  SiGooglecloud,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { Icon: SiMacos },
    { Icon: SiLinux },
    { Icon: SiVisualstudiocode },
    { Icon: SiPostman },
    { Icon: SiGit },
    { Icon: SiAmazon },
    { Icon: SiGooglecloud },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12">
      {tools.map(({ Icon }, index) => (
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

export default Toolstack;
