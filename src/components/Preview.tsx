"use client"

import { useQuoteContext } from "@/hooks/QuoteProvider";

export default function Preview() {
    const { quote } = useQuoteContext();
    return (
        <div>
            {quote.customerName}
        </div>
    )
}