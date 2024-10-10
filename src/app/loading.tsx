import Image from "next/image";
export default function Loading() {
  return (
    <div className="grow h-screen w-screen flex flex-col items-center justify-center bg-black">
      <Image
        src="/cook.png"
        alt="Cooking, please wait..."
        width={500}
        height={1}
      />
    </div>
  );
}
