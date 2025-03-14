"use client";
import Instructions from "@/components/Instructions";
import LanguageSelector from "@/components/LanguageSelector";
import StartButton from "@/components/StartButton";
import Title from "@/components/Title";
// import testOpenAI from "@/testopenapi"

export default function Home() {
  // try {
  //         testOpenAI()
  //     } catch (e) {
  //         console.log(e)
  //     }
  return (
    <div className="content-center text-center bg-[#C32228]">
      <div className="h-full">
        <LanguageSelector />
        <Title />
        <StartButton />
        <Instructions />
      </div>
    </div>
  );
}
