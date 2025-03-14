"use client";

import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const StartButton = () => {
  const { language } = useLanguage(); // Obtém o idioma atual

  // Traduções pré-definidas
  const buttonTexts: Record<string, string> = {
    en: "Start",
    es: "Comenzar",
    fr: "Commencer",
    pt: "Começar",
  };

  return (
    <div className="flex items-center justify-center">
      <Link href="/dates">
        <div className="relative w-64 h-16 bg-white rounded-full flex items-center cursor-pointer overflow-hidden">
          <div className="w-60 h-12 bg-white rounded-full flex items-center mx-auto border-2 border-[#C32228] cursor-pointer overflow-hidden">
            <div className="w-56 h-9 bg-[#C32228] rounded-full flex items-center mx-auto cursor-pointer overflow-hidden">
              <div className="absolute left-4 flex items-center justify-center bg-white text-white w-10 h-10 rounded-full transition-transform duration-300">
                <div className="text-[#C32228] text-2xl">
                  <BsFillHeartFill />
                </div>
              </div>
              <div className="uppercase text-white mx-auto font-bold text-xl">
                {buttonTexts[language] || buttonTexts["pt"]}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StartButton;
