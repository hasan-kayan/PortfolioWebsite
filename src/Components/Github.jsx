import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Days I <span className="text-purple-400">Code</span>
      </h1>
      <GitHubCalendar
        username="hasan-kayan"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
