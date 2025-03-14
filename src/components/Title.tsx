"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";

const Title = () => {
  const { language } = useLanguage(); // Get the selected language
  const [translatedTexts, setTranslatedTexts] = useState<{ dates: string }>({
    dates: "10 Dates <br /> para se <br /> conectar",
  });

  // Original English texts with markers
  const textsToTranslate = {
    dates: "10 Dates,para se,conectar", // Use markers to control line breaks
  };

  // Function to fetch translations for both texts
  const fetchTranslations = async () => {
    try {
      const response = await fetch("https://api.textcortex.com/v1/texts/translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_TEXTCORTEX_API_KEY}`,
        },
        body: JSON.stringify({
          formality: "default",
          source_lang: "pt",
          target_lang: language,
          text: `${textsToTranslate.dates}`, // Use "||||" as a separator
        }),
      });

      const json = await response.json();
      if (json.status === "success" && json.data.outputs.length > 0) {
        // Split the translated text
        console.log(json.data.outputs[0].text)
        const translatedDates = json.data.outputs[0].text;
        console.log(translatedDates)

        // Ensure line breaks are properly inserted
        setTranslatedTexts({
          dates: translatedDates?.replaceAll(",", "<br />") || textsToTranslate.dates, // Convert "|||" to <br />
        });
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
      fetchTranslations();
    } else {
      setTranslatedTexts({dates: "10 Dates <br /> para se <br /> conectar",}); // Default to English if no translation is needed
    }
  }, [language]);

  return (
    <div>
      <h1 className="text-white text-6xl font-aicho" dangerouslySetInnerHTML={{ __html: translatedTexts.dates || "Loading..." }} />
    </div>
  );
};

export default Title;
