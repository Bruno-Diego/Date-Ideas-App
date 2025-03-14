"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Instructions = () => {
  const { language } = useLanguage();
  const [translatedTexts, setTranslatedTexts] = useState<string[]>([]);
  const [dialogTriggerText, setDialogTriggerText] = useState("Instruções");
  const [dialogHeaderText, setDialogHeaderText] = useState("Instruções");

  // Original Portuguese texts
  const textsToTranslate = [
    "Instruções", // Dialog Trigger (button)
    "Instruções", // Dialog Header (title)
    "Olá, parabéns por embarcarem juntos nesta aventura que é o “10 Dates para se Conectar”!",
    "Este não é apenas um jogo, mas uma jornada de descoberta. Cada 'DATE' que vocês sortearem é uma oportunidade única para que vocês possam mergulhar mais fundo no que faz o amor durar: a conexão entre pessoas.",
    "Escolham um tema para o encontro. Clique em 'Começar' e escolha uma opção. Podem selecionar um tema que precise de atenção ou deixar na mão do destino clicando em 'Date Aleatório'.",
    "Faça de cada partida um date especial. Não importa o lugar, a única regra é garantir que nada vai tirar o foco de vocês do que realmente importa: um ao outro.",
    "Quando sortearem o date, deixem que as palavras guiem o diálogo. Uma pessoa pode ler a pergunta em voz alta e, então, ambos compartilham suas perspectivas. É uma troca, por isso, na conversa, se deem espaço para que cada um explore seus pensamentos e emoções. Quem ganha aqui é a profundidade da conexão.",
    "No final do date, compartilhem abertamente como se sentiram. O que descobriram um sobre o outro? Como se sentem agora? Aproveitem essa oportunidade para se reconhecerem e se amarem. Esse jogo é o começo de uma partida que não termina quando o jogo acaba.",
  ];

  // Function to fetch translations
  const fetchTranslations = async () => {
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
          text: textsToTranslate.join("\n"), // Send all texts together
        }),
      });

      const json = await response.json();
      if (json.status === "success" && json.data.outputs.length > 0) {
        const translatedArray = json.data.outputs[0].text.split("\n");

        setDialogTriggerText(translatedArray[0] || "Instruções");
        setDialogHeaderText(translatedArray[1] || "Instruções");
        setTranslatedTexts(translatedArray.slice(2)); // The rest are instruction texts
      } else {
        console.error("Translation error:", json);
      }
    } catch (error) {
      console.error("❌ Fetch error:", error);
    }
  };

  useEffect(() => {
    if (language !== "pt") {
      fetchTranslations();
    } else {
      setDialogTriggerText("Instruções");
      setDialogHeaderText("Instruções");
      setTranslatedTexts(textsToTranslate.slice(2));
    }
  }, [language]);

  return (
    <div className="flex">
      <Dialog>
        <DialogTrigger className="uppercase text-white mx-auto font-bold text-xl my-10">
          {dialogTriggerText}
        </DialogTrigger>
        <DialogContent>
          <Carousel>
            <CarouselContent>
              {translatedTexts.map((text, index) => (
                <CarouselItem key={index} className="mt-3">
                  <DialogHeader>
                    {index === 0 && <DialogTitle>{dialogHeaderText}</DialogTitle>}
                    <Separator />
                    <DialogDescription>{text}</DialogDescription>
                  </DialogHeader>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Instructions;
