// Definição de tipos para os temas e perguntas
type Theme = {
  color: string;
  questions: {
    en: string;
    es: string;
    fr: string;
    pt: string;
  }[];
};

type Themes = {
  [key: string]: Theme;
};

export const themes: Themes = {
  "Sobre você e sobre mim": {
    color: "#5082C2",
    questions: [
      {
        pt: "Se você só pudesse escolher 3 coisas para comer para o resto da sua vida, quais seriam?",
        en: "If you could only choose 3 things to eat for the rest of your life, what would they be?",
        es: "Si solo pudieras elegir 3 cosas para comer por el resto de tu vida, ¿cuáles serían?",
        fr: "Si vous ne pouviez choisir que 3 choses à manger pour le reste de votre vie, lesquelles seraient-elles ?",
      },
      {
        pt: "Como você descreveria a sua personalidade?",
        en: "How would you describe your personality?",
        es: "¿Cómo describirías tu personalidad?",
        fr: "Comment décririez-vous votre personnalité ?",
      },
      {
        pt: "Falem sobre 5 qualidades que vocês gostam um no outro.",
        en: "Talk about 5 qualities you like in each other.",
        es: "Hablen sobre 5 cualidades que les gustan el uno del otro.",
        fr: "Parlez de 5 qualités que vous aimez l'un chez l'autre.",
      },
      {
        pt: "Qual é o seu filme, sua série, sua música e livro favoritos?",
        en: "What is your favorite movie, series, music, and book?",
        es: "¿Cuál es tu película, serie, música y libro favoritos?",
        fr: "Quel est votre film, série, musique et livre préférés ?",
      },
      {
        pt: "Quais são seus hobbies favoritos?",
        en: "What are your favorite hobbies?",
        es: "¿Cuáles son tus pasatiempos favoritos?",
        fr: "Quels sont vos passe-temps favoris ?",
      },
      {
        pt: "Como você gosta de relaxar e recarregar suas energias depois de um dia difícil?",
        en: "How do you like to relax and recharge after a tough day?",
        es: "¿Cómo te gusta relajarte y recargar energías después de un día difícil?",
        fr: "Comment aimez-vous vous détendre et recharger vos batteries après une journée difficile ?",
      },
      {
        pt: "Se você pudesse descrever um momento de autodescoberta significativo em sua vida, qual seria? E o que aprendeu sobre você?",
        en: "If you could describe a significant moment of self-discovery in your life, what would it be? And what did you learn about yourself?",
        es: "Si pudieras describir un momento significativo de autodescubrimiento en tu vida, ¿cuál sería? ¿Y qué aprendiste sobre ti mismo?",
        fr: "Si vous pouviez décrire un moment significatif de découverte de soi dans votre vie, quel serait-il ? Et qu'avez-vous appris sur vous-même ?",
      },
      {
        pt: "O que mais te inspira na vida? Existem filosofias ou ideias que moldam sua maneira de olhar o mundo?",
        en: "What inspires you the most in life? Are there any philosophies or ideas that shape your way of looking at the world?",
        es: "¿Qué es lo que más te inspira en la vida? ¿Existen filosofías o ideas que moldean tu manera de ver el mundo?",
        fr: "Qu'est-ce qui vous inspire le plus dans la vie ? Y a-t-il des philosophies ou des idées qui façonnent votre façon de voir le monde ?",
      },
      {
        pt: "Quais coisas você quer fazer antes de morrer?",
        en: "What things do you want to do before you die?",
        es: "¿Qué cosas quieres hacer antes de morir?",
        fr: "Quelles choses voulez-vous faire avant de mourir ?",
      },
    ],
  },
  "Metas, sonhos e futuro": {
    color: "#09424F",
    questions: [
      {
        pt: "Quais são os seus sonhos para o futuro?",
        en: "What are your dreams for the future?",
        es: "¿Cuáles son tus sueños para el futuro?",
        fr: "Quels sont vos rêves pour l'avenir ?",
      },
      {
        pt: "Como você imagina a sua vida no próximo ano? E daqui a 5 anos?",
        en: "How do you imagine your life next year? And in 5 years?",
        es: "¿Cómo imaginas tu vida el próximo año? ¿Y en 5 años?",
        fr: "Comment imaginez-vous votre vie l'année prochaine ? Et dans 5 ans ?",
      },
      {
        pt: "Se pudesse escolher uma meta ou um sonho para começar a colocar em prática agora, qual seria?",
        en: "If you could choose one goal or dream to start working on now, what would it be?",
        es: "Si pudieras elegir una meta o un sueño para comenzar a trabajar ahora, ¿cuál sería?",
        fr: "Si vous pouviez choisir un objectif ou un rêve à commencer dès maintenant, quel serait-il ?",
      },
      {
        pt: "O que você individualmente pode fazer para conseguir se aproximar dos seus objetivos futuros?",
        en: "What can you do individually to get closer to your future goals?",
        es: "¿Qué puedes hacer individualmente para acercarte a tus objetivos futuros?",
        fr: "Que pouvez-vous faire individuellement pour vous rapprocher de vos objectifs futurs ?",
      },
      {
        pt: "O que posso fazer para te apoiar na realização de seus sonhos individuais?",
        en: "What can I do to support you in achieving your individual dreams?",
        es: "¿Qué puedo hacer para apoyarte en la realización de tus sueños individuales?",
        fr: "Que puis-je faire pour vous aider à réaliser vos rêves individuels ?",
      },
      {
        pt: "Quais são as experiências que vocês gostariam de compartilhar ao longo dos próximos anos?",
        en: "What experiences would you like to share together in the coming years?",
        es: "¿Qué experiencias les gustaría compartir juntos en los próximos años?",
        fr: "Quelles expériences aimeriez-vous partager ensemble dans les années à venir ?",
      },
      {
        pt: "Quais são os obstáculos que você acredita que pode ter ao buscar suas metas? Como acha que podemos enfrentá-los juntos?",
        en: "What obstacles do you think you might face in pursuing your goals? How do you think we can overcome them together?",
        es: "¿Cuáles son los obstáculos que crees que puedes encontrar al perseguir tus metas? ¿Cómo crees que podemos superarlos juntos?",
        fr: "Quels obstacles pensez-vous rencontrer en poursuivant vos objectifs ? Comment pensez-vous que nous pouvons les surmonter ensemble ?",
      },
      {
        pt: "O que vocês podem fazer para nutrir a paixão e o entusiasmo em relação aos seus sonhos compartilhados?",
        en: "What can you do to nurture passion and enthusiasm for your shared dreams?",
        es: "¿Qué pueden hacer para alimentar la pasión y el entusiasmo por sus sueños compartidos?",
        fr: "Que pouvez-vous faire pour nourrir la passion et l'enthousiasme pour vos rêves communs ?",
      },
      {
        pt: "Qual o legado que vocês querem deixar como casal?",
        en: "What legacy do you want to leave as a couple?",
        es: "¿Qué legado quieren dejar como pareja?",
        fr: "Quel héritage voulez-vous laisser en tant que couple ?",
      },
    ],
  },
  "Sexo e intimidade": {
    color: "#B24A4C",
    questions: [
      {
        pt: "O que você acha que é mais importante para criar uma conexão emocional e física forte durante o sexo?",
        en: "What do you think is most important for creating a strong emotional and physical connection during sex?",
        es: "¿Qué crees que es más importante para crear una conexión emocional y física fuerte durante el sexo?",
        fr: "Qu'est-ce qui est, selon vous, le plus important pour créer une connexion émotionnelle et physique forte pendant le sexe ?",
      },
      {
        pt: "Quais são os rituais ou hábitos que podemos colocar na nossa rotina para aumentar a intimidade e a conexão sexual?",
        en: "What rituals or habits can we incorporate into our routine to enhance intimacy and sexual connection?",
        es: "¿Cuáles son los rituales o hábitos que podemos incluir en nuestra rutina para aumentar la intimidad y la conexión sexual?",
        fr: "Quels sont les rituels ou habitudes que nous pouvons intégrer dans notre routine pour renforcer l'intimité et la connexion sexuelle ?",
      },
      {
        pt: "Quais são as suas expectativas em relação à frequência e à qualidade do sexo em seu relacionamento?",
        en: "What are your expectations regarding the frequency and quality of sex in your relationship?",
        es: "¿Cuáles son tus expectativas con respecto a la frecuencia y calidad del sexo en tu relación?",
        fr: "Quelles sont vos attentes concernant la fréquence et la qualité du sexe dans votre relation ?",
      },
      {
        pt: "O que te faz perder a conexão sexual e quais os caminhos para recuperá-la?",
        en: "What makes you lose sexual connection, and how can it be restored?",
        es: "¿Qué te hace perder la conexión sexual y cómo puedes recuperarla?",
        fr: "Qu'est-ce qui vous fait perdre la connexion sexuelle et comment peut-elle être retrouvée ?",
      },
      {
        pt: "Existe alguma insegurança, trauma ou limite sexual que você gostaria de compartilhar?",
        en: "Is there any insecurity, trauma, or sexual boundary you would like to share?",
        es: "¿Existe alguna inseguridad, trauma o límite sexual que te gustaría compartir?",
        fr: "Y a-t-il une insécurité, un traumatisme ou une limite sexuelle que vous aimeriez partager ?",
      },
      {
        pt: "Existem desejos ou fantasias que você gostaria de explorar comigo?",
        en: "Are there any desires or fantasies you would like to explore with me?",
        es: "¿Hay deseos o fantasías que te gustaría explorar conmigo?",
        fr: "Y a-t-il des désirs ou des fantasmes que vous aimeriez explorer avec moi ?",
      },
      {
        pt: "O que eu faço na hora do sexo que você mais gosta?",
        en: "What do I do during sex that you like the most?",
        es: "¿Qué es lo que más te gusta de lo que hago durante el sexo?",
        fr: "Qu'est-ce que je fais pendant le sexe que vous aimez le plus ?",
      },
      {
        pt: "O que aumenta ainda mais o seu prazer quando estamos transando?",
        en: "What enhances your pleasure even more when we're having sex?",
        es: "¿Qué aumenta aún más tu placer cuando estamos teniendo sexo?",
        fr: "Qu'est-ce qui amplifie encore plus votre plaisir lorsque nous faisons l'amour ?",
      },
      {
        pt: "Como vocês podem manter a paixão e a conexão sexual ao longo do tempo em seu relacionamento?",
        en: "How can you maintain passion and sexual connection over time in your relationship?",
        es: "¿Cómo pueden mantener la pasión y la conexión sexual a lo largo del tiempo en su relación?",
        fr: "Comment pouvez-vous maintenir la passion et la connexion sexuelle au fil du temps dans votre relation ?",
      },
    ],
  },
  "Trabalho e dinheiro": {
    color: "#3F5C2B",
    questions: [
      {
        pt: "O que é sucesso profissional para você?",
        en: "What does professional success mean to you?",
        es: "¿Qué significa el éxito profesional para ti?",
        fr: "Que signifie le succès professionnel pour vous ?",
      },
      {
        pt: "Quais as suas expectativas financeiras?",
        en: "What are your financial expectations?",
        es: "¿Cuáles son tus expectativas financieras?",
        fr: "Quelles sont vos attentes financières ?",
      },
      {
        pt: "Como você se sente em relação ao equilíbrio entre a minha vida pessoal e o meu trabalho?",
        en: "How do you feel about the balance between my personal life and work?",
        es: "¿Cómo te sientes con respecto al equilibrio entre mi vida personal y mi trabajo?",
        fr: "Comment vous sentez-vous par rapport à l'équilibre entre ma vie personnelle et mon travail ?",
      },
      {
        pt: "Quais são seus maiores medos em relação à sua carreira?",
        en: "What are your biggest fears regarding your career?",
        es: "¿Cuáles son tus mayores miedos con respecto a tu carrera?",
        fr: "Quelles sont vos plus grandes peurs concernant votre carrière ?",
      },
      {
        pt: "Existem preocupações financeiras que você sente que precisamos abordar como casal?",
        en: "Are there any financial concerns you feel we need to address as a couple?",
        es: "¿Hay preocupaciones financieras que sientes que debemos abordar como pareja?",
        fr: "Y a-t-il des préoccupations financières que vous pensez que nous devons aborder en tant que couple ?",
      },
      {
        pt: "Existem hábitos de consumo que você gostaria que mudássemos?",
        en: "Are there any spending habits you would like us to change?",
        es: "¿Hay hábitos de consumo que te gustaría que cambiáramos?",
        fr: "Y a-t-il des habitudes de consommation que vous aimeriez que nous changions ?",
      },
      {
        pt: "Como podemos tornar nossas metas financeiras um projeto compartilhado e motivador para ambos?",
        en: "How can we turn our financial goals into a shared and motivating project for both of us?",
        es: "¿Cómo podemos convertir nuestras metas financieras en un proyecto compartido y motivador para ambos?",
        fr: "Comment pouvons-nous transformer nos objectifs financiers en un projet partagé et motivant pour nous deux ?",
      },
      {
        pt: "Há algum medo ou insegurança relacionado ao dinheiro que você gostaria de discutir?",
        en: "Is there any fear or insecurity related to money that you would like to discuss?",
        es: "¿Hay algún miedo o inseguridad relacionado con el dinero que te gustaría discutir?",
        fr: "Y a-t-il une peur ou une insécurité liée à l'argent que vous aimeriez discuter ?",
      },
      {
        pt: "De que maneira a estabilidade ou instabilidade financeira impacta nosso planejamento para o futuro?",
        en: "How does financial stability or instability impact our future planning?",
        es: "¿De qué manera la estabilidad o inestabilidad financiera impacta nuestra planificación para el futuro?",
        fr: "Comment la stabilité ou l'instabilité financière impacte-t-elle notre planification pour l'avenir ?",
      },
    ],
  },
  "Comunicação e solução de conflitos": {
    color: "#ED7A36",
    questions: [
      {
        pt: "Como você prefere discutir assuntos importantes: em conversas espontâneas ou planejadas?",
        en: "How do you prefer to discuss important matters: in spontaneous or planned conversations?",
        es: "¿Cómo prefieres discutir asuntos importantes: en conversaciones espontáneas o planificadas?",
        fr: "Comment préférez-vous discuter des sujets importants : dans des conversations spontanées ou planifiées ?",
      },
      {
        pt: "Como você se sente sobre a maneira como resolvemos nossos últimos desentendimentos?",
        en: "How do you feel about the way we resolved our last disagreements?",
        es: "¿Cómo te sientes acerca de la forma en que resolvimos nuestros últimos desacuerdos?",
        fr: "Comment vous sentez-vous par rapport à la manière dont nous avons résolu nos derniers désaccords ?",
      },
      {
        pt: "Como você se sente em relação ao uso de humor durante nossas discussões?",
        en: "How do you feel about the use of humor during our discussions?",
        es: "¿Cómo te sientes con respecto al uso del humor durante nuestras discusiones?",
        fr: "Comment vous sentez-vous par rapport à l'utilisation de l'humour pendant nos discussions ?",
      },
      {
        pt: "Existe algum tema que você sente que evitamos discutir, mas sobre o qual precisamos falar?",
        en: "Is there a topic you feel we avoid discussing but need to talk about?",
        es: "¿Hay algún tema que sientes que evitamos discutir, pero del que necesitamos hablar?",
        fr: "Y a-t-il un sujet que vous pensez que nous évitons de discuter, mais dont nous devons parler ?",
      },
      {
        pt: "Existe algo que eu faço durante os conflitos que te magoa ou impede a resolução?",
        en: "Is there something I do during conflicts that hurts you or prevents resolution?",
        es: "¿Hay algo que hago durante los conflictos que te lastima o impide la resolución?",
        fr: "Y a-t-il quelque chose que je fais pendant les conflits qui vous blesse ou empêche la résolution ?",
      },
      {
        pt: "Você acha que nossos estilos de comunicação são compatíveis? Como podemos melhorar?",
        en: "Do you think our communication styles are compatible? How can we improve?",
        es: "¿Crees que nuestros estilos de comunicación son compatibles? ¿Cómo podemos mejorar?",
        fr: "Pensez-vous que nos styles de communication sont compatibles ? Comment pouvons-nous nous améliorer ?",
      },
      {
        pt: "Como você gostaria que eu demonstrasse apoio durante momentos de estresse ou conflito?",
        en: "How would you like me to show support during moments of stress or conflict?",
        es: "¿Cómo te gustaría que mostrara apoyo durante momentos de estrés o conflicto?",
        fr: "Comment aimeriez-vous que je vous montre mon soutien lors de moments de stress ou de conflit ?",
      },
      {
        pt: "Existe algo que eu disse em um conflito anterior que você gostaria de revisitar para esclarecer ou corrigir?",
        en: "Is there something I said in a past conflict that you would like to revisit to clarify or correct?",
        es: "¿Hay algo que dije en un conflicto pasado que te gustaría revisar para aclarar o corregir?",
        fr: "Y a-t-il quelque chose que j'ai dit lors d'un conflit passé que vous aimeriez revoir pour clarifier ou corriger ?",
      },
      {
        pt: "Quais estratégias podemos adotar para evitar mal-entendidos nas nossas conversas?",
        en: "What strategies can we adopt to avoid misunderstandings in our conversations?",
        es: "¿Qué estrategias podemos adoptar para evitar malentendidos en nuestras conversaciones?",
        fr: "Quelles stratégies pouvons-nous adopter pour éviter les malentendus dans nos conversations ?",
      },
    ],
  },
  "Tempo de qualidade, limites e compatibilidade": {
    color: "#20B7D5",
    questions: [
      {
        pt: "Existe algo que você nunca tentou antes, mas gostaria de experimentar comigo?",
        en: "Is there something you've never tried before but would like to experience with me?",
        es: "¿Hay algo que nunca hayas intentado antes pero que te gustaría experimentar conmigo?",
        fr: "Y a-t-il quelque chose que vous n'avez jamais essayé auparavant mais que vous aimeriez expérimenter avec moi ?",
      },
      {
        pt: "Existem limites específicos que você sente que precisamos estabelecer ou ajustar?",
        en: "Are there specific boundaries you feel we need to establish or adjust?",
        es: "¿Hay límites específicos que sientes que debemos establecer o ajustar?",
        fr: "Y a-t-il des limites spécifiques que vous pensez que nous devons établir ou ajuster ?",
      },
      {
        pt: "Existem gostos ou preferências que você sacrificou pelo nosso relacionamento? Como se sente a respeito disso?",
        en: "Are there any tastes or preferences you have sacrificed for our relationship? How do you feel about it?",
        es: "¿Hay gustos o preferencias que has sacrificado por nuestra relación? ¿Cómo te sientes al respecto?",
        fr: "Y a-t-il des goûts ou des préférences que vous avez sacrifiés pour notre relation ? Comment vous sentez-vous à ce sujet ?",
      },
      {
        pt: "Como podemos criar novas tradições legais na nossa rotina?",
        en: "How can we create new fun traditions in our routine?",
        es: "¿Cómo podemos crear nuevas tradiciones divertidas en nuestra rutina?",
        fr: "Comment pouvons-nous créer de nouvelles traditions amusantes dans notre routine ?",
      },
      {
        pt: "Você acha que nossos amigos e família respeitam os limites do nosso relacionamento? Como podemos melhorar isso?",
        en: "Do you think our friends and family respect the boundaries of our relationship? How can we improve this?",
        es: "¿Crees que nuestros amigos y familia respetan los límites de nuestra relación? ¿Cómo podemos mejorar esto?",
        fr: "Pensez-vous que nos amis et notre famille respectent les limites de notre relation ? Comment pouvons-nous améliorer cela ?",
      },
      {
        pt: "Como você avalia a importância de datas comemorativas e aniversários em nosso relacionamento?",
        en: "How do you evaluate the importance of special dates and anniversaries in our relationship?",
        es: "¿Cómo evalúas la importancia de las fechas especiales y aniversarios en nuestra relación?",
        fr: "Comment évaluez-vous l'importance des dates spéciales et des anniversaires dans notre relation ?",
      },
      {
        pt: "Existem atividades ou hobbies que você prefere fazer sozinho?",
        en: "Are there activities or hobbies you prefer to do alone?",
        es: "¿Hay actividades o pasatiempos que prefieres hacer solo?",
        fr: "Y a-t-il des activités ou des passe-temps que vous préférez faire seul ?",
      },
      {
        pt: "Como você se sente sobre a quantidade de tempo que passamos juntos atualmente? De que maneira podemos melhorar esse tempo de qualidade?",
        en: "How do you feel about the amount of time we currently spend together? How can we improve our quality time?",
        es: "¿Cómo te sientes acerca de la cantidad de tiempo que pasamos juntos actualmente? ¿De qué manera podemos mejorar nuestro tiempo de calidad?",
        fr: "Comment vous sentez-vous par rapport au temps que nous passons actuellement ensemble ? Comment pouvons-nous améliorer notre temps de qualité ?",
      },
      {
        pt: "Existem atividades externas ou grupos nos quais poderíamos nos envolver, juntos, para expandir o nosso círculo social?",
        en: "Are there any external activities or groups we could join together to expand our social circle?",
        es: "¿Hay actividades externas o grupos en los que podríamos participar juntos para expandir nuestro círculo social?",
        fr: "Y a-t-il des activités extérieures ou des groupes auxquels nous pourrions participer ensemble pour élargir notre cercle social ?",
      },
    ],
  },
  "Saúde e estilo de vida": {
    color: "#72BE58",
    questions: [
      {
        pt: "Como você descreveria seu estilo de vida atual e como ele influencia nossa relação?",
        en: "How would you describe your current lifestyle and how does it influence our relationship?",
        es: "¿Cómo describirías tu estilo de vida actual y cómo influye en nuestra relación?",
        fr: "Comment décririez-vous votre style de vie actuel et comment influence-t-il notre relation ?",
      },
      {
        pt: "Existem hábitos de saúde que você gostaria que mudássemos juntos?",
        en: "Are there any health habits you would like us to change together?",
        es: "¿Hay hábitos de salud que te gustaría que cambiáramos juntos?",
        fr: "Y a-t-il des habitudes de santé que vous aimeriez que nous changions ensemble ?",
      },
      {
        pt: "Como você acha que o consumo de álcool, tabaco ou outras substâncias afeta nossa relação?",
        en: "How do you think the consumption of alcohol, tobacco, or other substances affects our relationship?",
        es: "¿Cómo crees que el consumo de alcohol, tabaco u otras sustancias afecta nuestra relación?",
        fr: "Comment pensez-vous que la consommation d'alcool, de tabac ou d'autres substances affecte notre relation ?",
      },
      {
        pt: "Você se sente confortável discutindo suas preocupações de saúde comigo?",
        en: "Do you feel comfortable discussing your health concerns with me?",
        es: "¿Te sientes cómodo discutiendo tus preocupaciones de salud conmigo?",
        fr: "Vous sentez-vous à l'aise pour discuter de vos préoccupations de santé avec moi ?",
      },
      {
        pt: "Você se sente apoiado por mim em suas escolhas de estilo de vida? Como posso oferecer mais suporte?",
        en: "Do you feel supported by me in your lifestyle choices? How can I offer more support?",
        es: "¿Te sientes apoyado por mí en tus decisiones de estilo de vida? ¿Cómo puedo brindarte más apoyo?",
        fr: "Vous sentez-vous soutenu(e) par moi dans vos choix de vie ? Comment puis-je vous apporter plus de soutien ?",
      },
      {
        pt: "Que atividades de bem-estar você gostaria de experimentar comigo?",
        en: "What wellness activities would you like to experience with me?",
        es: "¿Qué actividades de bienestar te gustaría experimentar conmigo?",
        fr: "Quelles activités de bien-être aimeriez-vous expérimenter avec moi ?",
      },
      {
        pt: "Como podemos motivar um ao outro a manter um compromisso com um estilo de vida saudável, especialmente durante períodos difíceis?",
        en: "How can we motivate each other to maintain a commitment to a healthy lifestyle, especially during difficult times?",
        es: "¿Cómo podemos motivarnos mutuamente para mantener un compromiso con un estilo de vida saludable, especialmente durante períodos difíciles?",
        fr: "Comment pouvons-nous nous motiver mutuellement à maintenir un engagement envers un mode de vie sain, surtout en période difficile ?",
      },
      {
        pt: "Existe alguma mudança em nosso ambiente doméstico que poderia nos ajudar a viver de maneira mais saudável?",
        en: "Is there any change in our home environment that could help us live a healthier lifestyle?",
        es: "¿Hay algún cambio en nuestro entorno doméstico que podría ayudarnos a vivir de una manera más saludable?",
        fr: "Y a-t-il un changement dans notre environnement domestique qui pourrait nous aider à mener une vie plus saine ?",
      },
      {
        pt: "Como a espiritualidade influencia seu bem-estar pessoal e nossa vida como casal?",
        en: "How does spirituality influence your personal well-being and our life as a couple?",
        es: "¿Cómo influye la espiritualidad en tu bienestar personal y en nuestra vida como pareja?",
        fr: "Comment la spiritualité influence-t-elle votre bien-être personnel et notre vie de couple ?",
      },
    ],
  },
  "Respeito e compromisso": {
    color: "#6D5CA8",
    questions: [
      {
        pt: "Para você, quais são os principais acordos que temos dentro do nosso relacionamento?",
        en: "For you, what are the main agreements we have in our relationship?",
        es: "Para ti, ¿cuáles son los principales acuerdos que tenemos en nuestra relación?",
        fr: "Pour vous, quels sont les principaux accords que nous avons dans notre relation ?",
      },
      {
        pt: "De que maneiras você se sente respeitado e valorizado por mim? Como posso melhorar?",
        en: "In what ways do you feel respected and valued by me? How can I improve?",
        es: "¿De qué maneras te sientes respetado y valorado por mí? ¿Cómo puedo mejorar?",
        fr: "De quelles manières vous sentez-vous respecté(e) et valorisé(e) par moi ? Comment puis-je m'améliorer ?",
      },
      {
        pt: "Quais ações você considera importantes para demonstrar respeito pelo espaço e tempo um do outro?",
        en: "What actions do you consider important to show respect for each other's space and time?",
        es: "¿Qué acciones consideras importantes para demostrar respeto por el espacio y el tiempo del otro?",
        fr: "Quelles actions considérez-vous comme importantes pour montrer du respect pour l'espace et le temps de chacun ?",
      },
      {
        pt: "Como eu posso demonstrar compromisso com nosso relacionamento no dia a dia?",
        en: "How can I demonstrate commitment to our relationship in daily life?",
        es: "¿Cómo puedo demostrar compromiso con nuestra relación en el día a día?",
        fr: "Comment puis-je démontrer mon engagement envers notre relation au quotidien ?",
      },
      {
        pt: "Você se sente respeitado nas opiniões que divergimos? Como você acredita que podemos manter o respeito em relação a essas diferenças?",
        en: "Do you feel respected in the opinions where we disagree? How do you think we can maintain respect for these differences?",
        es: "¿Te sientes respetado en las opiniones en las que diferimos? ¿Cómo crees que podemos mantener el respeto por estas diferencias?",
        fr: "Vous sentez-vous respecté(e) dans les opinions où nous ne sommes pas d'accord ? Comment pensez-vous que nous pouvons maintenir le respect face à ces différences ?",
      },
      {
        pt: "Como você se sente em relação aos acordos que fizemos dentro do nosso relacionamento até agora?",
        en: "How do you feel about the agreements we have made in our relationship so far?",
        es: "¿Cómo te sientes respecto a los acuerdos que hemos hecho en nuestra relación hasta ahora?",
        fr: "Comment vous sentez-vous par rapport aux accords que nous avons conclus dans notre relation jusqu'à présent ?",
      },
      {
        pt: "Você acha que há um equilíbrio saudável entre nosso compromisso um com o outro e nossa independência pessoal?",
        en: "Do you think there is a healthy balance between our commitment to each other and our personal independence?",
        es: "¿Crees que hay un equilibrio saludable entre nuestro compromiso mutuo y nuestra independencia personal?",
        fr: "Pensez-vous qu'il existe un équilibre sain entre notre engagement l'un envers l'autre et notre indépendance personnelle ?",
      },
      {
        pt: "Você se sente seguro para expressar quando algo não está respeitando seus limites ou expectativas?",
        en: "Do you feel safe to express when something is not respecting your boundaries or expectations?",
        es: "¿Te sientes seguro para expresar cuando algo no está respetando tus límites o expectativas?",
        fr: "Vous sentez-vous en sécurité pour exprimer lorsque quelque chose ne respecte pas vos limites ou vos attentes ?",
      },
      {
        pt: "O que te faria sentir que os nossos acordos estão sendo quebrados?",
        en: "What would make you feel that our agreements are being broken?",
        es: "¿Qué te haría sentir que nuestros acuerdos están siendo quebrantados?",
        fr: "Qu'est-ce qui vous ferait sentir que nos accords sont en train d'être rompus ?",
      },
    ],
  },
  "Date surpresa": {
    color: "#E9A947",
    questions: [
      {
        pt: "Planejem o dia perfeito juntos e definam uma data para ele acontecer.",
        en: "Plan the perfect day together and set a date for it to happen.",
        es: "Planifiquen el día perfecto juntos y establezcan una fecha para que suceda.",
        fr: "Planifiez la journée parfaite ensemble et fixez une date pour qu'elle ait lieu.",
      },
      {
        pt: "Façam uma coisa improvável hoje que vocês normalmente não fariam. Uma loucura juntos, algo que vocês vão contar futuramente e dar boas risadas!",
        en: "Do something unlikely today that you normally wouldn't do. A crazy adventure together, something you'll look back on and laugh about!",
        es: "Hagan algo improbable hoy que normalmente no harían. ¡Una locura juntos, algo que recordarán y reirán en el futuro!",
        fr: "Faites quelque chose d'improbable aujourd'hui que vous ne feriez normalement pas. Une folie ensemble, quelque chose dont vous rirez plus tard !",
      },
      {
        pt: "Cada um tem direito a fazer 3 perguntas e 3 desafios.",
        en: "Each person has the right to ask 3 questions and give 3 challenges.",
        es: "Cada uno tiene derecho a hacer 3 preguntas y proponer 3 desafíos.",
        fr: "Chacun a le droit de poser 3 questions et de proposer 3 défis.",
      },
      {
        pt: "Pensem em uma festa temática, marquem uma data, organizem juntos e convidem pessoas importantes pra vocês.",
        en: "Think of a themed party, set a date, plan it together, and invite people who are important to you.",
        es: "Piensen en una fiesta temática, elijan una fecha, organícenla juntos e inviten a personas importantes para ustedes.",
        fr: "Imaginez une fête à thème, fixez une date, organisez-la ensemble et invitez des personnes importantes pour vous.",
      },
      {
        pt: "Liguem para alguém que vocês amam e que foi importante pra vocês como casal e agradeçam com uma mensagem carinhosa.",
        en: "Call someone you love who has been important to you as a couple and thank them with a heartfelt message.",
        es: "Llamen a alguien que aman y que ha sido importante para ustedes como pareja y agradézcanle con un mensaje cariñoso.",
        fr: "Appelez quelqu'un que vous aimez et qui a été important pour vous en tant que couple et remerciez-le avec un message affectueux.",
      },
      {
        pt: "Contem um para o outro surpresas que vocês adorariam ter e depois disso vocês têm uma missão: realizá-las até o fim do ano, de forma inesperada.",
        en: "Tell each other surprises you would love to receive, and then set a mission: to make them happen unexpectedly by the end of the year.",
        es: "Díganse mutuamente qué sorpresas les encantaría recibir y luego pónganse una misión: hacerlas realidad de forma inesperada antes de que termine el año.",
        fr: "Dites-vous quelles surprises vous aimeriez recevoir, puis donnez-vous une mission : les réaliser de manière inattendue avant la fin de l'année.",
      },
      {
        pt: "Planeje, em segredo, a programação de um dia inteiro para o seu parceiro e marque uma data para ela acontecer.",
        en: "Secretly plan a full day schedule for your partner and set a date for it to happen.",
        es: "Planifica en secreto la programación de un día completo para tu pareja y establece una fecha para que suceda.",
        fr: "Planifiez secrètement l'emploi du temps d'une journée entière pour votre partenaire et fixez une date pour que cela ait lieu.",
      },
      {
        pt: "Planejem a próxima viagem juntos agora, com lugar, data e roteiro.",
        en: "Plan your next trip together now, choosing the destination, date, and itinerary.",
        es: "Planifiquen su próximo viaje juntos ahora, eligiendo el destino, la fecha y el itinerario.",
        fr: "Planifiez votre prochain voyage ensemble dès maintenant, en choisissant la destination, la date et l'itinéraire.",
      },
      {
        pt: "Escrevam uma lista de 'coisas a fazer juntos antes de morrer'.",
        en: "Write a 'bucket list' of things to do together before you die.",
        es: "Escriban una lista de 'cosas por hacer juntos antes de morir'.",
        fr: "Écrivez une liste de 'choses à faire ensemble avant de mourir'.",
      },
    ],
  },
  "Nossa história": {
    color: "#4360AC",
    questions: [
      {
        pt: "Qual foi o momento em que você sentiu que nossa conexão estava mais forte do que nunca?",
        en: "When was the moment you felt our connection was stronger than ever?",
        es: "¿Cuál fue el momento en que sentiste que nuestra conexión era más fuerte que nunca?",
        fr: "Quel a été le moment où vous avez senti que notre connexion était plus forte que jamais ?",
      },
      {
        pt: "Quando foi que você percebeu que estava apaixonado por mim?",
        en: "When did you realize you were in love with me?",
        es: "¿Cuándo te diste cuenta de que estabas enamorado de mí?",
        fr: "Quand avez-vous réalisé que vous étiez amoureux(se) de moi ?",
      },
      {
        pt: "Existem momentos específicos em nossa história que você considera como pontos de virada para sermos o que somos hoje?",
        en: "Are there specific moments in our history that you consider turning points in making us who we are today?",
        es: "¿Hay momentos específicos en nuestra historia que consideras puntos de inflexión para que seamos lo que somos hoy?",
        fr: "Y a-t-il des moments spécifiques dans notre histoire que vous considérez comme des tournants nous ayant façonnés en ce que nous sommes aujourd'hui ?",
      },
      {
        pt: "Se pudéssemos voltar no tempo para reviver uma experiência que compartilhamos juntos, qual você escolheria e por quê?",
        en: "If we could go back in time to relive an experience we shared together, which one would you choose and why?",
        es: "Si pudiéramos volver en el tiempo para revivir una experiencia que compartimos juntos, ¿cuál elegirías y por qué?",
        fr: "Si nous pouvions remonter le temps pour revivre une expérience que nous avons partagée ensemble, laquelle choisiriez-vous et pourquoi ?",
      },
      {
        pt: "Qual é a lembrança mais engraçada ou descontraída que você tem de nós dois juntos?",
        en: "What is the funniest or most lighthearted memory you have of us together?",
        es: "¿Cuál es el recuerdo más divertido o relajado que tienes de nosotros juntos?",
        fr: "Quel est le souvenir le plus drôle ou décontracté que vous avez de nous deux ensemble ?",
      },
      {
        pt: "Se você fosse contar a nossa história para um desconhecido, como contaria?",
        en: "If you were to tell our story to a stranger, how would you tell it?",
        es: "Si tuvieras que contar nuestra historia a un desconocido, ¿cómo la contarías?",
        fr: "Si vous deviez raconter notre histoire à un inconnu, comment la raconteriez-vous ?",
      },
      {
        pt: "Se pudéssemos extrair uma lição valiosa de nossa história, qual seria?",
        en: "If we could take away a valuable lesson from our story, what would it be?",
        es: "Si pudiéramos extraer una lección valiosa de nuestra historia, ¿cuál sería?",
        fr: "Si nous pouvions tirer une leçon précieuse de notre histoire, quelle serait-elle ?",
      },
      {
        pt: "Se você pudesse escolher qualquer lugar do mundo para me levar, qual seria e por quê?",
        en: "If you could choose any place in the world to take me, which one would it be and why?",
        es: "Si pudieras elegir cualquier lugar del mundo para llevarme, ¿cuál sería y por qué?",
        fr: "Si vous pouviez choisir n'importe quel endroit dans le monde pour m'emmener, lequel serait-ce et pourquoi ?",
      },
      {
        pt: "Quais são as coisas que a gente precisa prometer nunca fazer um ao outro?",
        en: "What are the things we need to promise never to do to each other?",
        es: "¿Cuáles son las cosas que debemos prometernos nunca hacernos el uno al otro?",
        fr: "Quelles sont les choses que nous devons nous promettre de ne jamais nous faire l'un à l'autre ?",
      },
    ],
  },
};
