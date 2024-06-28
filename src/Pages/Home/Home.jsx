// Home.js
import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-silver">
            <div className="relative w-full max-w-3xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-500 flex items-center justify-center text-white font-bold">
                    Box 1
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-40 h-40 bg-red-500 flex items-center justify-center text-white font-bold">
                    Box 2
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-40 h-40 bg-green-500 flex items-center justify-center text-white font-bold">
                    Box 3
                </div>
            </div>
        </div>
    );
};

export default Home;
