// src/app/offline/page.tsx
import React from "react";

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900 text-white text-center">
      <h1 className="text-6xl font-bold mb-4">You are Offline</h1>
      <p className="text-xl mb-8">
        It seems that you are not connected to the internet.
      </p>
      <p>Please check your connection and try again.</p>
    </div>
  );
};

export default OfflinePage;
