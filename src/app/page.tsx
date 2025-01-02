"use client";
import Instructions from "@/components/Instructions";
import StartButton from "@/components/StartButton";
import Title from "@/components/Title";
// pages/index.tsx

export default function Home() {
  return (
    <div className="{styles.container} h-full content-center text-center bg-[#C32228]">
      <Title />
      <StartButton />
      <Instructions />
    </div>
  );
}
