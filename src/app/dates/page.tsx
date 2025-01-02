"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { themes } from "@/lib/db";

const Dates = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>("#C32228");

  const handleRandomDate = (): void => {
    const themesArray = Object.keys(themes);
    const randomTheme =
      themesArray[Math.floor(Math.random() * themesArray.length)];
    const questions = themes[randomTheme].questions;
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    setSelectedTheme(randomTheme);
    setCurrentQuestion(randomQuestion);
    setBackgroundColor(themes[randomTheme].color);
  };

  const handleChooseTheme = (theme: string): void => {
    const questions = themes[theme].questions;
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    setSelectedTheme(theme);
    setCurrentQuestion(randomQuestion);
    setBackgroundColor(themes[theme].color);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor }}
    >
      <h1 className="text-white text-2xl font-bold mb-6">Date Ideas</h1>

      {!selectedTheme && (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={handleRandomDate}
            className="w-full max-w-md text-lg"
          >
            Date Aleatório
          </Button>
          <Button
            variant="outline"
            onClick={() => setSelectedTheme("choose")}
            className="w-full max-w-md text-lg"
          >
            Escolha um Tema
          </Button>
        </div>
      )}

      {selectedTheme === "choose" && (
        <div className="w-full max-w-md space-y-4 mt-6">
          {Object.keys(themes).map((theme) => (
            <Button
              key={theme}
              variant="outline"
              onClick={() => handleChooseTheme(theme)}
              className="w-full text-lg"
            >
              {theme}
            </Button>
          ))}
        </div>
      )}

      {selectedTheme && selectedTheme !== "choose" && (
        <div className="text-center mt-6">
          <h2 className="text-white text-xl font-bold mb-4">{selectedTheme}</h2>
          <p className="text-white text-lg mb-6">{currentQuestion}</p>
          <Button
            variant="outline"
            onClick={() => setSelectedTheme(null)}
            className="w-full max-w-md text-lg"
          >
            Voltar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dates;
