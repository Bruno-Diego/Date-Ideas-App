import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Dates para se conectar",
  description: "10 Dates para se conectar é um aplicativo criado com Next.js e TypeScript que ajuda casais a explorar temas e perguntas para fortalecer sua conexão.",
  authors: [{ name: "Bruno Diego da Silva" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen bg-[#C32228]`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          id="google-adsense"
          type="text/javascript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1391817810231795"
        />
      </body>
    </html>
  );
}
