"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Define the type for the language context
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>(() => {
    // Load language from localStorage (for persistence)
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en"; // Default: English
    }
    return "en";
  });

  // Save selected language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
