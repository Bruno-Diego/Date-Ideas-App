// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI();
// openai.apiKey = `${process.env.OPENAI_API_KEY}`;

// type TranslateResponse = {
//   translatedText?: string;
//   error?: string;
// };

// // CREATE TRANSLATION
// export const POST = async (req: NextRequest) => {
//   console.log("req.body: " + req.json());
//   const { text, targetLang } = req.body;

//   try {
//     const completion = await openai.chat.completions.create({
//       messages: [
//         { role: "system", content: "Você é um tradutor." },
//         { role: "user", content: `Traduza para ${targetLang}: ${text}` },
//       ],
//       model: "gpt-3.5-turbo-16k",
//       store: true,
//     });

//     console.log(completion.choices[0]);
//     // const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//     //   },
//     //   body: JSON.stringify({
//     //     model: "gpt-3.5-turbo-16k",
//     //     messages: [
//     //       { role: "system", content: "Você é um tradutor." },
//     //       { role: "user", content: `Traduza para ${targetLang}: ${text}` },
//     //     ],
//     //   }),
//     // });

//     // const data = await response.json();
//     // const translatedText = data.choices[0]?.message?.content || text;

//     return new NextResponse<TranslateResponse>(data.json({ translatedText }), {
//       status: 201,
//     });
//   } catch (error) {
//     console.log(error);
//     return new NextResponse(
//       JSON.stringify({ message: "Erro ao traduzir!: " + error }),
//       { status: 500 }
//     );
//   }
// };
