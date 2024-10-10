"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) return null;

  return (
    <div className="absolute text-white bottom-2 right-2 z-10 p-4 bg-opacity-8 rounded flex flex-col justify-end items-end">
      <h3 className="text-lg font-bold pr-1">Install App</h3>
      <button className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
        Add to Home Screen
      </button>
      {isIOS && (
        <p className="mt-2 text-sm">
          To install, tap the share button{" "}
          <span role="img" aria-label="share icon">
            ⎋
          </span>{" "}
          and then "Add to Home Screen"{" "}
          <span role="img" aria-label="plus icon">
            ➕
          </span>
          .
        </p>
      )}
    </div>
  );
}
