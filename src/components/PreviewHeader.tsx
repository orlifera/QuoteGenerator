import React from 'react'
import { useQuoteContext } from '@/hooks/QuoteProvider';


export default function PreviewHeader() {
    const { quote } = useQuoteContext();
    return (
        <>
            <div className="flex justify-between items-start mb-8">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">ML TECH</h1>
                    <div className="text-sm text-muted-foreground space-y-1">
                        <ul>
                            <li>ML Tech © 2025</li>
                            <li>P.IVA: 05452130288</li>
                            <li>Via Altichiero 56</li>
                            <li>Padova (PD)</li>
                            <li>35135</li>
                        </ul>
                    </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                    <ul>
                        <li>ML Tech © 2025</li>
                        <li>P.IVA: 05452130288</li>
                        <li>Via Altichiero 56</li>
                        <li>Padova (PD)</li>
                        <li>35135</li>
                    </ul>
                </div>
            </div >
            <div className="mb-6">
                <p className="mb-4">Ciao {quote.customerName || '[Nome Cliente]'},</p>
                <p>ML Tech ti ringrazia per la fiducia riposta.</p>
            </div>
        </>
    )
}