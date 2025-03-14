import OpenAI from "openai";
// import "dotenv/config"; // Para carregar variáveis do .env

// Configuração do OpenAI
const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY, // Certifique-se de ter definido isso no .env
});

async function testOpenAI() {
  try {
    console.log(process.env.NEXT_OPENAI_API_KEY);
    console.log("🔍 Testando conexão com OpenAI...");

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Você é um assistente útil." },
        { role: "user", content: "Diga olá!" },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log("✅ Resposta da OpenAI:", completion.choices[0].message.content);
  } catch (error) {
    console.error("❌ Erro ao chamar a API da OpenAI:", error);
  }
}

// Executar o teste
export default testOpenAI;
