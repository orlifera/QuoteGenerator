"use client";

import React, { createContext, useContext } from "react";
import { useQuote } from "./useQuote";

interface QuoteContextType {
    quote: ReturnType<typeof useQuote>["quote"];
    addItem: ReturnType<typeof useQuote>["addItem"];
    updateItem: ReturnType<typeof useQuote>["updateItem"];
    removeItem: ReturnType<typeof useQuote>["removeItem"];
    updateQuote: ReturnType<typeof useQuote>["updateQuote"];
    setQuote: ReturnType<typeof useQuote>["setQuote"];
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
    const quote = useQuote();
    console.log("QuoteProvider mounted"); // 👈 vedi se appare
    return (
        <QuoteContext.Provider value={quote}>
            {children}
        </QuoteContext.Provider>
    );
}

export const useQuoteContext = () => {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error("useQuoteContext must be used within a QuoteProvider");
    }
    return context;
};
