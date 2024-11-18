import React from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f2f0]">
      {/* Loading Bar Container */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-full h-full bg-blue-600 animate-loading-bar" />
      </div>
    </div>
  );
};
