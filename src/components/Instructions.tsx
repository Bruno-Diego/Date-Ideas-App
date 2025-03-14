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
  const textsToTranslate: Record<string, string[]> = {
    en: [
      "Instructions",
      "Instructions",
      "Hello, congratulations on embarking on this adventure together: '10 Dates to Connect'!",
      "This is not just a game but a journey of discovery. Each 'DATE' you draw is a unique opportunity to dive deeper into what makes love last: the connection between people.",
      "Choose a theme for the date. Click 'Start' and pick an option. You can select a theme that needs attention or leave it to fate by clicking 'Random Date'.",
      "Make each game a special date. No matter the place, the only rule is to ensure that nothing takes your focus away from what really matters: each other.",
      "When you draw the date, let the words guide the dialogue. One person can read the question aloud, and then both share their perspectives. It’s an exchange, so give each other space to explore thoughts and emotions. The depth of the connection is what wins here.",
      "At the end of the date, openly share how you felt. What did you discover about each other? How do you feel now? Take this opportunity to appreciate and love each other. This game is just the beginning of a journey that doesn’t end when the game is over.",
    ],
    es: [
      "Instrucciones",
      "Instrucciones",
      "Hola, felicidades por embarcarse juntos en esta aventura: '10 Citas para Conectar'!",
      "Esto no es solo un juego, sino un viaje de descubrimiento. Cada 'CITA' que saquen es una oportunidad única para profundizar en lo que hace que el amor perdure: la conexión entre personas.",
      "Elijan un tema para la cita. Hagan clic en 'Comenzar' y elijan una opción. Pueden seleccionar un tema que requiera atención o dejarlo al destino haciendo clic en 'Cita Aleatoria'.",
      "Hagan de cada juego una cita especial. No importa el lugar, la única regla es asegurarse de que nada los distraiga de lo que realmente importa: el uno al otro.",
      "Cuando saquen la cita, dejen que las palabras guíen el diálogo. Una persona puede leer la pregunta en voz alta y luego ambos comparten sus perspectivas. Es un intercambio, así que den espacio para que cada uno explore sus pensamientos y emociones. Aquí gana la profundidad de la conexión.",
      "Al final de la cita, compartan abiertamente cómo se sintieron. ¿Qué descubrieron el uno del otro? ¿Cómo se sienten ahora? Aprovechen esta oportunidad para apreciarse y amarse. Este juego es solo el comienzo de un viaje que no termina cuando el juego acaba.",
    ],
    fr: [
      "Instructions",
      "Instructions",
      "Bonjour, félicitations pour vous lancer ensemble dans cette aventure : '10 Rendez-vous pour se Connecter' !",
      "Ce n'est pas seulement un jeu, mais un voyage de découverte. Chaque 'RENDEZ-VOUS' que vous tirez est une occasion unique d'approfondir ce qui fait durer l'amour : la connexion entre les personnes.",
      "Choisissez un thème pour le rendez-vous. Cliquez sur 'Commencer' et choisissez une option. Vous pouvez sélectionner un thème qui mérite votre attention ou laisser le hasard décider en cliquant sur 'Rendez-vous Aléatoire'.",
      "Faites de chaque jeu un rendez-vous spécial. Peu importe l'endroit, la seule règle est de s'assurer que rien ne détourne votre attention de ce qui compte vraiment : l'autre.",
      "Lorsque vous tirez un rendez-vous, laissez les mots guider le dialogue. Une personne peut lire la question à haute voix, puis les deux partagent leurs perspectives. C'est un échange, alors donnez-vous mutuellement l'espace pour explorer vos pensées et émotions. Ce qui compte ici, c'est la profondeur de la connexion.",
      "À la fin du rendez-vous, partagez ouvertement ce que vous avez ressenti. Qu'avez-vous découvert l'un sur l'autre ? Comment vous sentez-vous maintenant ? Profitez de cette occasion pour vous apprécier et vous aimer. Ce jeu est le début d'une aventure qui ne s'arrête pas à la fin de la partie.",
    ],
    pt: [
      "Instruções",
      "Instruções",
      "Olá, parabéns por embarcarem juntos nesta aventura que é o '10 Dates para se Conectar'!",
      "Este não é apenas um jogo, mas uma jornada de descoberta. Cada 'DATE' que vocês sortearem é uma oportunidade única para mergulhar mais fundo no que faz o amor durar: a conexão entre pessoas.",
      "Escolham um tema para o encontro. Clique em 'Começar' e escolha uma opção. Podem selecionar um tema que precise de atenção ou deixar na mão do destino clicando em 'Date Aleatório'.",
      "Faça de cada partida um date especial. Não importa o lugar, a única regra é garantir que nada vai tirar o foco de vocês do que realmente importa: um ao outro.",
      "Quando sortearem o date, deixem que as palavras guiem o diálogo. Uma pessoa pode ler a pergunta em voz alta e, então, ambos compartilham suas perspectivas. É uma troca, por isso, na conversa, se deem espaço para que cada um explore seus pensamentos e emoções. Quem ganha aqui é a profundidade da conexão.",
      "No final do date, compartilhem abertamente como se sentiram. O que descobriram um sobre o outro? Como se sentem agora? Aproveitem essa oportunidade para se reconhecerem e se amarem. Esse jogo é o começo de uma partida que não termina quando o jogo acaba.",
    ],
  };

  useEffect(() => {
    setDialogTriggerText(textsToTranslate[language as keyof typeof textsToTranslate][0]);
    setDialogHeaderText(textsToTranslate[language as keyof typeof textsToTranslate][1]);
    setTranslatedTexts(textsToTranslate[language as keyof typeof textsToTranslate].slice(2));
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
