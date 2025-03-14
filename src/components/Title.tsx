"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Title() {
  const { language } = useLanguage(); // Obtém o idioma selecionado

  const titles: Record<string, string> = {
    en: "10 Dates <br /> to <br /> connect",
    es: "10 Citas <br /> para <br /> conectar",
    fr: "10 Rendez-vous <br /> pour <br /> se connecter",
    pt: "10 Dates <br /> para se <br /> conectar",
  };

  return (
    <h1
      className="text-white text-6xl font-aicho"
      dangerouslySetInnerHTML={{ __html: titles[language] || titles["pt"] }}
    />
  );
}
