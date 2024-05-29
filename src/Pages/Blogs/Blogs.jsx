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
    // Add more articles here...
  ];

  return (

    <div className="article-list grid grid-cols-1 gap-4">
      <h1 className="header">
        My Articles
      </h1>
      {articles.map((article) => (
        <div className="article-box rounded overflow-hidden shadow-lg" key={article.id}>
          <img className="w-full" src={article.imageUrl} alt={article.title} />
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
