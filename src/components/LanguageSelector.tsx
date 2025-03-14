"use client";

import * as React from "react";
// import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/LanguageContext";

// type Language = "pt" | "en" | "es" | "fr"; // Tipos de idiomas suportados

const LanguageSelector: React.FC = () => {
  // old solution **********************************************************************
  // //   const pathname = usePathname(); // Para obter o pathname atual
  // const searchParams = useSearchParams(); // Para acessar os parâmetros da URL
  
  // const initialLanguage = (searchParams.get("language") as Language) || "pt"; // Pega o idioma da URL ou usa 'pt' como padrão
  // const [selectedLanguage, setSelectedLanguage] =
  //   React.useState<Language>(initialLanguage);
  
  // const handleLanguageChange = (language: Language) => {
    //   setSelectedLanguage(language);
    
    //   // Atualiza a URL com o parâmetro de idioma selecionado
    //   const newUrl = new URL(window.location.href);
    //   newUrl.searchParams.set("language", language);
    
    //   // Redireciona para a nova URL com o parâmetro de idioma
    //   window.history.pushState({}, "", newUrl);
    // };
  // old solution **********************************************************************
  const { language, setLanguage } = useLanguage(); // Get language state

  return (
    <div className="flex w-full">
      <div className="mx-auto m-10">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Selecione o idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Espanhol</SelectItem>
              <SelectItem value="fr">Francese</SelectItem>
              {/* Adicione mais idiomas conforme necessário */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LanguageSelector;
