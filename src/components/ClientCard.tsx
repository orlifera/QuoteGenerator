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
                <CardTitle>Info Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className='flex flex-col gap-4'>
                    <Label htmlFor="customerName" className='font-bold'>Nome Cliente</Label>
                    <Input
                        id="customerName"
                        placeholder="es. Leonardo"
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <Label htmlFor="customerEmail" className='font-bold'>Email Cliente</Label>
                    <Input
                        id="customerEmail"
                        type="email"
                        placeholder="leonardo@example.com"
                    />
                </div>
            </CardContent>
        </Card>
    )
}