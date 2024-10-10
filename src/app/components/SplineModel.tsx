import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineModel() {
  return (
    <Suspense fallback={<div>Loading Spline Model...</div>}>
      <Spline scene="https://prod.spline.design/qoQUXQY5VLNwE11p/scene.splinecode" />
    </Suspense>
  );
}
