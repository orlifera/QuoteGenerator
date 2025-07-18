"use client"

import { useState, useCallback, useEffect } from "react";
import { Quote, QuoteItem } from "@/types";

export function useQuote(initial?: Partial<Quote>) {
    const [quote, setQuote] = useState<Quote>({
        customerName: '',
        customerEmail: '',
        items: [],
        fee: 0,
        discount: 0,
        originalPrice: 1000,
        finalPrice: 970,
        notes: '',
        ...initial,
    });

    // Add item
    const addItem = useCallback(() => {
        setQuote(prev => ({
            ...prev,
            items: [
                ...prev.items,
                {
                    id: Date.now().toString(),
                    component: '',
                    specification: '',
                    price: 0,
                },
            ],
        }));
    }, []);

    // Update item
    const updateItem = useCallback((id: string, field: keyof QuoteItem, value: string | number) => {
        setQuote(prev => ({
            ...prev,
            items: prev.items.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            ),
        }));
    }, []);

    // Remove item
    const removeItem = useCallback((id: string) => {
        setQuote(prev => ({
            ...prev,
            items: prev.items.filter(item => item.id !== id),
        }));
    }, []);

    // Update quote fields
    const updateQuote = useCallback(
        (
            field: keyof Quote,
            value: string | number | QuoteItem[] // specify possible types for Quote fields
        ) => {
            setQuote(prev => ({
                ...prev,
                [field]: value,
            }));
        },
        []
    );

    // Calculate totals
    useEffect(() => {
        const subtotal = quote.items.reduce((sum, item) => sum + item.price, 0);
        const totalWithFee = subtotal + quote.fee;
        const finalTotal = totalWithFee - quote.discount;
        setQuote(prev => ({
            ...prev,
            originalPrice: totalWithFee,
            finalPrice: finalTotal,
        }));
    }, [quote.items, quote.fee, quote.discount]);

    return {
        quote,
        addItem,
        updateItem,
        removeItem,
        updateQuote,
        setQuote,
    };
}