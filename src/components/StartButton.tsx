"use client";
import React, { useEffect, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const StartButton = () => {
  const { language } = useLanguage(); // Get the selected language
  const [translatedText, setTranslatedText] = useState("Começar");

  // Original Portuguese text
  const textToTranslate = "Começar";

  // Function to fetch translations
  const fetchTranslation = async () => {
    try {
      const response = await fetch("https://api.textcortex.com/v1/texts/translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEXTCORTEX_API_KEY}`,
        },
        body: JSON.stringify({
          formality: "default",
          source_lang: "pt",
          target_lang: language,
          text: textToTranslate,
        }),
      });

      const json = await response.json();
      if (json.status === "success" && json.data.outputs.length > 0) {
        setTranslatedText(json.data.outputs[0].text);
      } else {
        console.error("Translation error:", json);
      }
    } catch (error) {
      console.error("❌ Fetch error:", error);
    }
  };

  // Fetch translations when language changes
  useEffect(() => {
    if (language !== "pt") {
      fetchTranslation();
    } else {
      setTranslatedText(textToTranslate); // Default to Portuguese if no translation is needed
    }
  }, [language]);

  return (
    <div className="flex items-center justify-center">
      <Link href="/dates">
        {/* Botão com Slide */}
        <div className="relative w-64 h-16 bg-white rounded-full flex items-center cursor-pointer overflow-hidden">
          <div className="w-60 h-12 bg-white rounded-full flex items-center mx-auto border-2 border-[#C32228] cursor-pointer overflow-hidden">
            <div className="w-56 h-9 bg-[#C32228] rounded-full flex items-center mx-auto cursor-pointer overflow-hidden">
              {/* Ícone de Coração */}
              <div className="absolute left-4 flex items-center justify-center bg-white text-white w-10 h-10 rounded-full transition-transform duration-300">
                <div className="text-[#C32228] text-2xl">
                  <BsFillHeartFill />
                </div>
              </div>
              <div className="uppercase text-white mx-auto font-bold text-xl">
                {translatedText || "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StartButton;
