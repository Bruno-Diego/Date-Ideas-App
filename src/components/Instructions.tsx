import React from "react";

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
  return (
    <div className="uppercase text-white mx-auto font-bold text-xl my-10">
      <Dialog>
        <DialogTrigger className="uppercase text-white mx-auto font-bold text-xl my-10">
          instruções
        </DialogTrigger>
        <DialogContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="mt-3">
                <DialogHeader>
                  <DialogTitle>
                    Olá, parabéns por embarcarem juntos nesta aventura que é o
                    “10 Dates para se Conectar”!
                  </DialogTitle>
                  <Separator />
                  <DialogDescription>
                    Este não é apenas um jogo, mas uma jornada de descoberta.
                    Cada carta que vocês seguram nas mãos é uma oportunidade
                    única para que vocês possam mergulhar mais fundo no que faz
                    o amor durar: <strong>a conexão entre pessoas.</strong>
                  </DialogDescription>
                </DialogHeader>
              </CarouselItem>
              <CarouselItem>
                <DialogHeader>
                  <DialogTitle>Como Jogar</DialogTitle>
                  <Separator />
                  <DialogDescription>
                    <strong>Escolham um tema para o encontro.</strong> Podem
                    selecionar um tema que precise de atenção ou deixar na mão
                    do destino: escolhendo uma carta de cada cor.
                  </DialogDescription>
                </DialogHeader>
              </CarouselItem>
              <CarouselItem>
                <DialogHeader>
                  <DialogTitle>Onde Jogar</DialogTitle>
                  <Separator />
                  <DialogDescription>
                    <strong>Faça de cada partida um date especial.</strong> Não
                    importa o lugar, a única regra é garantir que nada vai tirar
                    o foco de vocês do que realmente importa: um ao outro.
                  </DialogDescription>
                </DialogHeader>
              </CarouselItem>
              <CarouselItem>
                <DialogHeader>
                  <DialogTitle>Durante o Jogo</DialogTitle>
                  <Separator />
                  <DialogDescription>
                    <strong>
                      Com as cartas em mãos, deixem que as palavras guiem o
                      diálogo.
                    </strong>
                    Uma pessoa pode ler a pergunta em voz alta e, então, ambos
                    compartilham suas perspectivas. É uma troca, por isso, na
                    conversa, se dêem espaço para que cada um explore seus
                    pensamentos e emoções. Quem ganha aqui é a profundidade da
                    conexão.
                  </DialogDescription>
                </DialogHeader>
              </CarouselItem>
              <CarouselItem>
                <DialogHeader>
                  <DialogTitle>Rodada Final</DialogTitle>
                  <Separator />
                  <DialogDescription>
                    <strong>
                      No final do date, compartilhem abertamente como se
                      sentiram.
                    </strong>{" "}
                    O que descobriram um sobre o outro? Como se sentem agora?
                    Aproveitem essa oportunidade para se reconhecerem e se
                    amarem. Esse jogo é o começo de uma partida que não termina
                    quando o jogo acaba.
                  </DialogDescription>
                </DialogHeader>
              </CarouselItem>
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
