import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Next.js PWA with Immersive 3D Designs",
  description:
    "Experience a cutting-edge Progressive Web App built with Next.js, featuring immersive 3D elements powered by Spline. Enjoy seamless interactivity and modern web development practices for an enhanced user experience.",
  keywords:
    "Next.js, PWA, Progressive Web App, Spline, 3D graphics, web development, interactive design, immersive experiences, UI/UX, responsive design, modern web apps",
  authors: [{ name: "Vergil1000", url: "https://github.com/Vergil1000x" }],
  creator: "Vergil1000",
  themeColor: "#000000",
  applicationName: "Next.js PWA with 3D Elements",
  robots: "index, follow",
  openGraph: {
    title: "Next.js PWA with Immersive 3D Designs",
    description:
      "Explore a Progressive Web App built with Next.js, featuring stunning 3D designs powered by Spline for an engaging user experience.",
    url: "https://particles.vercel.app",
    siteName: "Next.js 3D PWA",
    images: [
      {
        url: "/og-image.png", // Add your Open Graph image here
        width: 1200,
        height: 630,
        alt: "Next.js PWA with Immersive 3D Designs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yVergil1000x",
    creator: "@yVergil1000x",
    title: "Next.js PWA with Immersive 3D Designs",
    description:
      "Check out this Progressive Web App built with Next.js and powered by Spline, offering an interactive and visually stunning user experience.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: [
    {
      url: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${cinzel.className} flex justify-center items-center w-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
