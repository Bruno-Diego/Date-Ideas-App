// import fetch from "node-fetch";

// Define the request payload type
interface TranslationRequest {
  formality: "default" | "formal" | "informal";
  source_lang: string;
  target_lang: string;
  text: string;
}

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

// Function to perform the translation request
async function translateText(requestData: TranslationRequest): Promise<void> {
  const url = "https://api.textcortex.com/v1/texts/translations";
  const apiKey =
    "gAAAAABn0EBYtwyXbRYdYzjUTGPMtwtjb2TNDz6uEwLM2XBl24_B__fCtJ_YkIhMt24VQ6xTR1n0U7u8-Atz5P-jZ0bd-nIDeeDfLfTXNlZI5zIDi9llErn5mhcLQoUGpTVQCWMs3LYWVX6tJwO8ZnWiHSjaWUigcKr0J20qMjHqIGTlmo2RHU8="; //process.env.NEXT_TEXTCORTEX_API_KEY; // Use an environment variable for security
  console.log("apiKey: " + apiKey);
  console.log("requestData: " + requestData);
  if (!apiKey) {
    console.error("❌ API key is missing. Set TEXTCORTEX_API_KEY in .env");
    return;
  }

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

  try {
    const response = await fetch(url, options);
    const json: TranslationResponse = await response.json();

    if (json.status === "success" && json.data.outputs.length > 0) {
      console.log("✅ Translation:", json.data.outputs[0].text);
      console.log("💰 Remaining Credits:", json.data.remaining_credits);
    } else {
      console.error("❌ API Response Error:", json);
    }
  } catch (error) {
    console.error("❌ Fetch error:", error);
  }
}

// Example usage
translateText({
  formality: "default",
  source_lang: "en",
  target_lang: "pt",
  text: "Hello, how are you?",
});
