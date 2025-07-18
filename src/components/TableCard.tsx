"use client"

import { Label } from "@radix-ui/react-label"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { useQuoteContext } from "@/hooks/QuoteProvider"


export default function TableCard() {

    const { quote, addItem, updateItem, removeItem } = useQuoteContext();

    return (
        <Card className='my-8 h-full'>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Componenti Hardware</CardTitle>
                    <Button onClick={addItem} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Aggiungi Componente
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {quote.items.map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                            <div>
                                <Label>Componente</Label>
                                <Input
                                    placeholder="CPU"
                                    value={item.component}
                                    onChange={(e) => updateItem(item.id, 'component', e.target.value)}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Label>Specifica</Label>
                                <Input
                                    placeholder="i3 11gen"
                                    value={item.specification}
                                    onChange={(e) => updateItem(item.id, 'specification', e.target.value)}
                                />
                            </div>
                            <div className="flex items-end gap-2">
                                <div className="flex-1">
                                    <Label>Prezzo (€)</Label>
                                    <Input
                                        type="number"
                                        placeholder="150"
                                        value={item.price}
                                        onChange={(e) => updateItem(item.id, 'price', Number(e.target.value))}
                                    />
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}

                    {quote.items.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                            Nessun componente aggiunto. Clicca su &quot;Aggiungi Componente&quot; per iniziare.
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}