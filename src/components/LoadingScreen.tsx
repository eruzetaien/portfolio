import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-black text-white">
      <span className="text-4xl font-bold animate-pulse mb-10 mr-20">Loading...</span>
    </div>
  );
};

export default LoadingScreen;
