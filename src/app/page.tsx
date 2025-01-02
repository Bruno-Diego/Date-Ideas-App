'use client'
import Instructions from '@/components/Instructions';
import StartButton from '@/components/StartButton';
import Title from '@/components/Title';
// pages/index.tsx
import { useState } from 'react';
// import styles from '../styles/Home.module.css';

// Definição de tipos para os temas e perguntas
type Theme = {
    color: string;
    questions: string[];
};

type Themes = {
    [key: string]: Theme;
};

// JSON com os temas e questões
const themes: Themes = {
  "Sobre você e sobre mim": {
      "color": "#5082C2",
      "questions": [
          "Se você só pudesse escolher 3 coisas para comer para o resto da sua vida, quais seriam?",
          "Como você descreveria a sua personalidade?",
          "Falem sobre 5 qualidades que vocês gostam um no outro.",
          "Qual é o seu filme, sua série, sua música e livro favoritos?",
          "Quais são seus hobbies favoritos?",
          "Como você gosta de relaxar e recarregar suas energias depois de um dia difícil?",
          "Se você pudesse descrever um momento de autodescoberta significativo em sua vida, qual seria? E o que aprendeu sobre você?",
          "O que mais te inspira na vida? Existem filosofias ou ideias que moldam sua maneira de olhar o mundo?",
          "Quais coisas você quer fazer antes de morrer?"
      ]
  },
  "Metas, sonhos e futuro": {
      "color": "#09424F",
      "questions": [
          "Quais são os seus sonhos para o futuro?",
          "Como você imagina a sua vida no próximo ano? E daqui a 5 anos?",
          "Se pudesse escolher uma meta ou um sonho para começar a colocar em prática agora, qual seria?",
          "O que você individualmente pode fazer para conseguir se aproximar dos seus objetivos futuros?",
          "O que posso fazer para te apoiar na realização de seus sonhos individuais?",
          "Quais são as experiências que vocês gostariam de compartilhar ao longo dos próximos anos?",
          "Quais são os obstáculos que você acredita que pode ter ao buscar suas metas? Como acha que podemos enfrentá-los juntos?",
          "O que vocês podem fazer para nutrir a paixão e o entusiasmo em relação aos seus sonhos compartilhados?",
          "Qual o legado que vocês querem deixar como casal?"
      ]
  },
  "Sexo e intimidade": {
      "color": "#B24A4C",
      "questions": [
          "O que você acha que é mais importante para criar uma conexão emocional e física forte durante o sexo?",
          "Quais são os rituais ou hábitos que podemos colocar na nossa rotina para aumentar a intimidade e a conexão sexual?",
          "Quais são as suas expectativas em relação à frequência e à qualidade do sexo em seu relacionamento?",
          "O que te faz perder a conexão sexual e quais os caminhos para recuperá-la?",
          "Existe alguma insegurança, trauma ou limite sexual que você gostaria de compartilhar?",
          "Existem desejos ou fantasias que você gostaria de explorar comigo?",
          "O que eu faço na hora do sexo que você mais gosta?",
          "O que aumenta ainda mais o seu prazer quando estamos transando?",
          "Como vocês podem manter a paixão e a conexão sexual ao longo do tempo em seu relacionamento?"
      ]
  },
  "Trabalho e dinheiro": {
      "color": "#3F5C2B",
      "questions": [
          "O que é sucesso profissional para você?",
          "Quais as suas expectativas financeiras?",
          "Como você se sente em relação ao equilíbrio entre a minha vida pessoal e o meu trabalho?",
          "Quais são seus maiores medos em relação à sua carreira?",
          "Existem preocupações financeiras que você sente que precisamos abordar como casal?",
          "Existem hábitos de consumo que você gostaria que mudássemos?",
          "Como podemos tornar nossas metas financeiras um projeto compartilhado e motivador para ambos?",
          "Há algum medo ou insegurança relacionado ao dinheiro que você gostaria de discutir?",
          "De que maneira a estabilidade ou instabilidade financeira impacta nosso planejamento para o futuro?"
      ]
  },
  "Comunicação e solução de conflitos": {
      "color": "#ED7A36",
      "questions": [
          "Como você prefere discutir assuntos importantes: em conversas espontâneas ou planejadas?",
          "Como você se sente sobre a maneira como resolvemos nossos últimos desentendimentos?",
          "Como você se sente em relação ao uso de humor durante nossas discussões?",
          "Existe algum tema que você sente que evitamos discutir, mas sobre o qual precisamos falar?",
          "Existe algo que eu faço durante os conflitos que te magoa ou impede a resolução?",
          "Você acha que nossos estilos de comunicação são compatíveis? Como podemos melhorar?",
          "Como você gostaria que eu demonstrasse apoio durante momentos de estresse ou conflito?",
          "Existe algo que eu disse em um conflito anterior que você gostaria de revisitar para esclarecer ou corrigir?",
          "Quais estratégias podemos adotar para evitar mal-entendidos nas nossas conversas?"
      ]
  },
  "Tempo de qualidade, limites e compatibilidade": {
      "color": "#20B7D5",
      "questions": [
          "Existe algo que você nunca tentou antes, mas gostaria de experimentar comigo?",
          "Existem limites específicos que você sente que precisamos estabelecer ou ajustar?",
          "Existem gostos ou preferências que você sacrificou pelo nosso relacionamento? Como se sente a respeito disso?",
          "Como podemos criar novas tradições legais na nossa rotina?",
          "Você acha que nossos amigos e família respeitam os limites do nosso relacionamento? Como podemos melhorar isso?",
          "Como você avalia a importância de datas comemorativas e aniversários em nosso relacionamento?",
          "Existem atividades ou hobbies que você prefere fazer sozinho?",
          "Como você se sente sobre a quantidade de tempo que passamos juntos atualmente? De que maneira podemos melhorar esse tempo de qualidade?",
          "Existem atividades externas ou grupos nos quais poderíamos nos envolver, juntos, para expandir o nosso círculo social?"
      ]
  },
  "Saúde e estilo de vida": {
      "color": "#72BE58",
      "questions": [
          "Como você descreveria seu estilo de vida atual e como ele influencia nossa relação?",
          "Existem hábitos de saúde que você gostaria que mudássemos juntos?",
          "Como você acha que o consumo de álcool, tabaco ou outras substâncias afeta nossa relação?",
          "Você se sente confortável discutindo suas preocupações de saúde comigo?",
          "Você se sente apoiado por mim em suas escolhas de estilo de vida? Como posso oferecer mais suporte?",
          "Que atividades de bem-estar você gostaria de experimentar comigo?",
          "Como podemos motivar um ao outro a manter um compromisso com um estilo de vida saudável, especialmente durante períodos difíceis?",
          "Existe alguma mudança em nosso ambiente doméstico que poderia nos ajudar a viver de maneira mais saudável?",
          "Como a espiritualidade influencia seu bem-estar pessoal e nossa vida como casal?"
      ]
  },
  "Respeito e compromisso": {
      "color": "#6D5CA8",
      "questions": [
          "Para você, quais são os principais acordos que temos dentro do nosso relacionamento?",
          "De que maneiras você se sente respeitado e valorizado por mim? Como posso melhorar?",
          "Quais ações você considera importantes para demonstrar respeito pelo espaço e tempo um do outro?",
          "Como eu posso demonstrar compromisso com nosso relacionamento no dia a dia?",
          "Você se sente respeitado nas opiniões que divergimos? Como você acredita que podemos manter o respeito em relação a essas diferenças?",
          "Como você se sente em relação aos acordos que fizemos dentro do nosso relacionamento até agora?",
          "Você acha que há um equilíbrio saudável entre nosso compromisso um com o outro e nossa independência pessoal?",
          "Você se sente seguro para expressar quando algo não está respeitando seus limites ou expectativas?",
          "O que te faria sentir que os nossos acordos estão sendo quebrados?"
      ]
  },
  "Date surpresa": {
      "color": "#E9A947",
      "questions": [
          "Planejem o dia perfeito juntos e definam uma data para ele acontecer.",
          "Façam uma coisa improvável hoje que vocês normalmente não fariam. Uma loucura juntos, algo que vocês vão contar futuramente e dar boas risadas!",
          "Cada um tem direito a fazer 3 perguntas e 3 desafios.",
          "Pensem em uma festa temática, marquem uma data, organizem juntos e convidem pessoas importantes pra vocês.",
          "Liguem para alguém que vocês amam e que foi importante pra vocês como casal e agradeçam com uma mensagem carinhosa.",
          "Contem um para o outro surpresas que vocês adorariam ter e depois disso vocês têm uma missão: realizá-las até o fim do ano, de forma inesperada.",
          "Planeje, em segredo, a programação de um dia inteiro para o seu parceiro e marque uma data para ela acontecer.",
          "Planejem a próxima viagem juntos agora, com lugar, data e roteiro.",
          "Escrevam uma lista de 'coisas a fazer juntos antes de morrer'."
      ]
  },
  "Nossa história": {
      "color": "#4360AC",
      "questions": [
          "Qual foi o momento em que você sentiu que nossa conexão estava mais forte do que nunca?",
          "Quando foi que você percebeu que estava apaixonado por mim?",
          "Existem momentos específicos em nossa história que você considera como pontos de virada para sermos o que somos hoje?",
          "Se pudéssemos voltar no tempo para reviver uma experiência que compartilhamos juntos, qual você escolheria e por quê?",
          "Qual é a lembrança mais engraçada ou descontraída que você tem de nós dois juntos?",
          "Se você fosse contar a nossa história para um desconhecido, como contaria?",
          "Se pudéssemos extrair uma lição valiosa de nossa história, qual seria?",
          "Se você pudesse escolher qualquer lugar do mundo para me levar, qual seria e por quê?",
          "Quais são as coisas que a gente precisa prometer nunca fazer um ao outro?"
      ]
  }
}

export default function Home() {
    const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [backgroundColor, setBackgroundColor] = useState<string>('#C32228');

    const handleRandomDate = (): void => {
        const themesArray = Object.keys(themes);
        const randomTheme = themesArray[Math.floor(Math.random() * themesArray.length)];
        const questions = themes[randomTheme].questions;
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

        setSelectedTheme(randomTheme);
        setCurrentQuestion(randomQuestion);
        setBackgroundColor(themes[randomTheme].color);
    };

    const handleChooseTheme = (theme: string): void => {
        const questions = themes[theme].questions;
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

        setSelectedTheme(theme);
        setCurrentQuestion(randomQuestion);
        setBackgroundColor(themes[theme].color);
    };

    return (
        <div className="{styles.container} h-full content-center text-center" style={{ backgroundColor }}>
            <Title />
            <StartButton />
            <Instructions />
            <h1 className="{styles.title}">Date Ideas</h1>
            <br />

            {!selectedTheme && (
                <div className="{styles.buttons}">
                    <button className="{styles.button}" onClick={handleRandomDate}>Date Aleatório</button>
                    <br />
                    <button className="{styles.button}" onClick={() => setSelectedTheme('choose')}>Escolha um Tema</button>
                </div>
            )}

            {selectedTheme === 'choose' && (
                <div className="{styles.themeList}">
                    {Object.keys(themes).map((theme) => (
                        <div key={theme}>
                          <button
                              key={theme}
                              className="{styles.themeButton}"
                              onClick={() => handleChooseTheme(theme)}
                          >
                              {theme}
                          </button>
                          <br />
                        </div>
                    ))}
                </div>
            )}

            {selectedTheme && selectedTheme !== 'choose' && (
                <div className="{styles.result}">
                    <h2>{selectedTheme}</h2>
                    <p>{currentQuestion}</p>
                    <button className="{styles.resetButton}" onClick={() => setSelectedTheme(null)}>Voltar</button>
                </div>
            )}
        </div>
    );
}
