"use client"

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Textarea } from './ui/textarea'
import { Quote } from "@/types"
import { useQuoteContext } from '@/hooks/QuoteProvider'



export default function Notes() {
    const { quote, setQuote } = useQuoteContext();
    return (
        <Card className='h-full'>
            <CardHeader>
                <CardTitle>Note Aggiuntive</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea
                    placeholder="Aggiungi note o condizioni speciali per questo preventivo..."
                    value={quote.notes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuote((prev: Quote) => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                />
            </CardContent>
        </Card>
    )
}