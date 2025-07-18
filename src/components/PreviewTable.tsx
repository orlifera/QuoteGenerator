import React from 'react'
import { useQuoteContext } from '@/hooks/QuoteProvider'

export default function PreviewTable() {
    const { quote } = useQuoteContext();
    return (
        <>
            <div className="mb-6">
                <p className="mb-4 font-medium">Eccoti il preventivo richiesto:</p>

                <div className="border border-border">
                    <table className="w-full">
                        <tbody>
                            {quote.items.map((item) => (
                                <tr key={item.id} className="border-b border-border">
                                    <td className="p-3 font-medium border-r border-border w-1/3">
                                        {item.component}
                                    </td>
                                    <td className="p-3">
                                        {item.specification}
                                    </td>
                                </tr>
                            ))}
                            <tr className="border-b border-border">
                                <td className="p-3 font-bold border-r border-border">Totale</td>
                                <td className="p-3 font-bold">
                                    {quote.discount > 0 ? (
                                        <>
                                            <span className="line-through text-muted-foreground mr-2">
                                                €{quote.originalPrice.toFixed(2)}
                                            </span>
                                            €{quote.finalPrice.toFixed(2)}
                                        </>
                                    ) : (
                                        <>€{quote.finalPrice.toFixed(2)}</>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mb-8 text-sm text-muted-foreground">
                <p className="mb-2">
                    Questo è il preventivo in base a quello che mi ha chiesto. Ho incluso un piccolo sconto dato
                    che sono gli ultimi pezzi. Ricordo che eventuali codici sconto non funzionano su prodotti già
                    scontati. Fammi sapere cosa ne pensi o se vuoi fare qualche cambiamento.
                </p>
                <p>Il preventivo include servizio di montaggio e tutti i prodotti sono inoltre coperti da una garanzia di due anni.</p>

                {quote.notes && (
                    <div className="mt-4 p-3 bg-muted rounded">
                        <p className="font-medium mb-2">Note aggiuntive:</p>
                        <p>{quote.notes}</p>
                    </div>
                )}
            </div>
        </>
    )
}