import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export default function ClientCard() {
    return (
        <Card className='my-4 h-full'>
            <CardHeader>
                <CardTitle>Calcoli Preventivo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label htmlFor="fee">Fee aggiuntiva (€)</Label>
                    <Input
                        id="fee"
                        type="number"
                        placeholder="0"
                    />
                </div>
                <div>
                    <Label htmlFor="discount">Sconto (€)</Label>
                    <Input
                        id="discount"
                        type="number"
                        placeholder="0"
                    />
                </div>
                <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between text-sm mb-2">
                        <span>Subtotale componenti:</span>
                        <span>€---</span>
                    </div>
                    {/* {quote.fee > 0 && (
                        <div className="flex justify-between text-sm mb-2">
                            <span>Fee aggiuntiva:</span>
                            <span>+€{quote.fee.toFixed(2)}</span>
                        </div>
                    )}
                    {quote.discount > 0 && (
                        <div className="flex justify-between text-sm mb-2">
                            <span>Sconto:</span>
                            <span>-€---</span>
                        </div>
                    )} */}
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Totale:</span>
                        <span>€---</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}