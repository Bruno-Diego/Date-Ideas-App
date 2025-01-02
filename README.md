# 10 Dates para se conectar

**10 Dates para se conectar** é um aplicativo criado com **Next.js** e **TypeScript** que ajuda casais a explorar temas e perguntas para fortalecer sua conexão. Com uma interface simples e interativa, o aplicativo oferece duas opções principais: escolher um tema ou gerar uma pergunta aleatória, proporcionando momentos de diálogo e diversão.

## Funcionalidades

### Página Inicial
- **Botão "Escolha um Tema"**: Lista todos os temas disponíveis para o usuário escolher.
- **Botão "Date Aleatório"**: Gera aleatoriamente uma pergunta de qualquer tema disponível.
- **Fundo Dinâmico**: A cor de fundo muda com base no tema selecionado.

### Temas
Os temas disponíveis incluem:
- Sobre você e sobre mim
- Metas, sonhos e futuro
- Sexo e intimidade
- Trabalho e dinheiro
- Comunicação e solução de conflitos
- Tempo de qualidade, limites e compatibilidade
- Saúde e estilo de vida
- Respeito e compromisso
- Date surpresa
- Nossa história

Cada tema possui uma cor associada e uma lista de perguntas.

## Tecnologias Utilizadas
- **Next.js**: Framework React para renderização do lado do servidor.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática ao código.
- **CSS Modules**: Para estilização modular e reutilizável.

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado na máquina.

### Passos
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd date-ideas
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

- **`pages/index.tsx`**: Componente principal do aplicativo, contendo a lógica para exibir temas, perguntas e alterar o fundo dinamicamente.
- **`styles/Home.module.css`**: Arquivo de estilização para os componentes.
- **`types.ts`** (opcional): Define os tipos utilizados no projeto, como `Theme` e `Themes`.

## Melhorias Futuras
- Adicionar mais temas e perguntas.
- Implementar suporte a múltiplos idiomas.
- Salvar o progresso ou histórico dos temas explorados.

## Contribuição
Sinta-se à vontade para contribuir com o projeto! Faça um fork, implemente suas alterações e abra um pull request.

## Licença
Este projeto está licenciado sob a MIT License.

