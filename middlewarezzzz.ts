import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the request payload type
// interface TranslationRequest {
//   formality: "default" | "formal" | "informal";
//   source_lang: string;
//   target_lang: string;
//   text: string;
// }

// Define the response type (adjust based on actual API response)
interface TranslationResponse {
  status: string;
  data: {
    outputs: {
      index: number;
      text: string; // Translated text
      id: string;
    }[];
    remaining_credits: number;
  };
}

// Lista de idiomas suportados
const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de", "it"];

export async function middleware(req: NextRequest) {
  // Obter a URL e o idioma selecionado
  const { nextUrl } = req;
  const targetLang = nextUrl.searchParams.get("language") || "pt"; // Default: pt
  const textCortexUrl = process.env.NEXT_TEXTCORTEX_URL || "";
  const apiKey = process.env.NEXT_TEXTCORTEX_API_KEY || "";
  console.log("textCortexUrl: ")
  console.log(textCortexUrl)
  console.log("************************************************************")
  if (!apiKey) {
    console.log("apiKey: " + apiKey);
    console.error("❌ API key is missing. Set TEXTCORTEX_API_KEY in .env");
    return;
  }
  
  // Se o idioma for o padrão (português), não faz nada
  if (targetLang === "pt" || !SUPPORTED_LANGUAGES.includes(targetLang)) {
    return NextResponse.next();
  }
  // Buscar a página original
  const fetchResponse = await fetch(req.nextUrl, { headers: req.headers });
  const originalHtml = await fetchResponse.text();
  
  console.log(`Traduzindo apenas o <body> para: ${targetLang}`);
  
  // Extrair o conteúdo do <body>
  const bodyMatch = originalHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    console.error("Erro: <body> não encontrado!");
    return NextResponse.next();
  }
  
  let bodyContent = bodyMatch[1];
  
  // Remover <script> e <style>
  bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  bodyContent = bodyContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  // Remover tags desnecessárias mantendo apenas o texto e as tags HTML relevantes
  const cleanedBody = bodyContent.replace(
    /<\/?(?!p|h[1-6]|div|span|a|strong|em|ul|ol|li|br|table|tr|td|th|blockquote)[^>]+>/gi,
    ""
  );
  const requestData = cleanedBody;
  
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestData) as BodyInit,
  };
  console.log("options: " + options);
  console.log("body: " + JSON.stringify(requestData));
  
  // Chamada para o OpenAI para traduzir apenas o conteúdo limpo
  try {
    const response = await fetch(textCortexUrl, options);
    console.log("************************************************************")
    console.log(response.json())
    const json: TranslationResponse = await response.json();
    const translatedBody = json.data.outputs[0].text
    console.log("************************************************************")
    console.log(translatedBody)
    
    // Substituir o conteúdo original do <body> com o texto traduzido
    const translatedHtml = originalHtml.replace(bodyContent, translatedBody);

    // Retornar a resposta com o HTML traduzido
    return new NextResponse(translatedHtml, {
      status: fetchResponse.status,
      headers: fetchResponse.headers,
    });
  } catch (error) {
    console.error("Erro ao traduzir:", error);
    return NextResponse.next();
  }
}

// Aplicar o middleware para todas as rotas
export const config = {
  matcher: "/:path*",
};
