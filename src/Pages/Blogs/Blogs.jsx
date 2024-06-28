import React from "react";
import { FaMedium } from "react-icons/fa";

const MediumProfile = () => {
  const articles = [
    {
      id: 1,
      title: "What Is Git?",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*vdkDO6bUii6g_DVY.png",
      url: "https://hasankayan.medium.com/what-is-git-5dbe03940fc5",
    },
    {
      id: 2,
      title: "Zustand State Manager And JS Memory",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*-7b-EPfP3pgn9_uI.jpg",
      url: "https://hasankayan.medium.com/zustand-state-manager-and-js-memory-b39efe6a811e",
    },
    {
      id: 3,
      title: "3D Computer Graphics",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/0*A1TSHGzm1m_6Tacc",
      url: "https://hasankayan.medium.com/3d-computer-graphics-a70610ebac3f",
    },
    {
      id: 4,
      title: "Use Code In RPA",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_ZT79DV87oadYYC0eLlr9Q.png",
      url: "https://hasankayan.medium.com/use-code-in-rpa-7eb9c2806e2e",
    },
    {
      id: 5,
      title: "What is HTTP ?",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Us_6jB_stUQzDS-xVpuy_Q.png",
      url: "https://hasankayan.medium.com/what-is-http-7b328314907d",
    },
    {
      id: 6,
      title: "What is Internet ?",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*X_GlYj7iI2VF8PKEkhP8vg.png",
      url: "https://hasankayan.medium.com/what-is-internet-3bfa5e047000",
    },
    {
      id: 7,
      title: "Zeros And Ones",
      imageUrl:
          "https://miro.medium.com/v2/resize:fit:720/format:webp/1*GV_IHCCm-NF2fxotvCXujw.png",
      url: "https://hasankayan.medium.com/zeros-and-ones-5739945c07d3",
    },
  ];

  return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">My Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
              <div
                  className="article-box max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-105 bg-white"
                  key={article.id}
              >
                <img
                    className="w-full h-48 object-cover"
                    src={article.imageUrl}
                    alt={article.title}
                />
                <div className="p-6">
                  <div className="font-bold text-xl mb-2">{article.title}</div>
                  <a
                      className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <FaMedium className="mr-2" />
                    Read More
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default MediumProfile;
