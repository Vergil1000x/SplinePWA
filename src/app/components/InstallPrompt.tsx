"use client";
import { useEffect, useState } from "react";

// Extend the Navigator interface to include standalone
declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

// Define BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsIOS(
      /iPad|iPhone|iPod/.test(userAgent) && !window.navigator.standalone
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Listen for the beforeinstallprompt event and store the event
    const handleBeforeInstallPrompt = (e: Event) => {
      const beforeInstallPromptEvent = e as BeforeInstallPromptEvent;
      beforeInstallPromptEvent.preventDefault(); // Prevent the automatic prompt
      setDeferredPrompt(beforeInstallPromptEvent); // Store the event for manual prompt
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt(); // Show the install prompt
      const result = await deferredPrompt.userChoice; // Wait for the user's choice
      if (result.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null); // Reset the prompt as it can only be used once
    }
  };

  if (isStandalone) return null;

  return (
    <div className="absolute text-white bottom-2 right-2 z-10 p-4 bg-gray-900 bg-opacity-80 rounded flex flex-col justify-end items-end">
      <h3 className="text-lg font-bold pr-1">Install App</h3>
      <button
        className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
        onClick={handleInstallClick}
        aria-label="Add to Home Screen"
      >
        Add to Home Screen
      </button>
      {isIOS && (
        <p className="mt-2 text-sm">
          To install, tap the share button{" "}
          <span role="img" aria-label="share icon">
            ⎋
          </span>{" "}
          at the bottom of the screen and then &quot;Add to Home Screen&quot;{" "}
          <span role="img" aria-label="plus icon">
            ➕
          </span>
          .
        </p>
      )}
    </div>
  );
}
