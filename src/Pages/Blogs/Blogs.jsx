import React from "react";

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
    <div className="article-list grid grid-cols-1 gap-4">
      <h1 className="header">My Articles</h1>
      {articles.map((article) => (
        <div
          className="article-box rounded overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-110"
          key={article.id}
        >
          <img
            className="w-1/2 h-auto"
            src={article.imageUrl}
            alt={article.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <a
              className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediumProfile;
