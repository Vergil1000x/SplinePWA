"use client";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import InstallPrompt from "./components/InstallPrompt";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("Service Worker Registered"))
        .catch((error) =>
          console.error("Service Worker Registration Failed:", error)
        );
    }
  }, []);

  return (
    <div className="grow relative flex justify-center items-center w-full h-full bg-black tracking-widest">
      <div className="absolute top-0 left-0 z-[2] text-white text-xs p-3 flex flex-col justify-start items-start">
        <div className="">
          <a
            href="https://github.com/Vergil1000x/SplinePWA"
            className="text-sm hover:underline transition-all pl-0 pr-3 hover:pl-3 hover:pr-3"
          >
            Check out the code &rarr;
          </a>
        </div>
        <div className="">
          Original 3D by -{" "}
          <a
            href="https://app.spline.design/community/file/3ff7b617-2fe9-46c7-8e06-b6d7c382f4db"
            className="text-sm hover:underline transition-all"
          >
            auroregmbt
          </a>
        </div>
        <div className="">
          Blog by -{" "}
          <a
            href="https://dev.to/nyctonio/next-js-3d-elements-with-spline-3m84"
            className="text-sm hover:underline transition-all"
          >
            nyctonio
          </a>
        </div>
      </div>
      <h1 className="text-gray-300 glow md:text-8xl sm:text-6xl text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest">
        Particles
      </h1>
      <Spline scene="https://prod.spline.design/qoQUXQY5VLNwE11p/scene.splinecode" />
      <div className="absolute bottom-0 right-0 z-[1] h-14 w-40 bg-black text-white" />
      <InstallPrompt />
    </div>
  );
}
