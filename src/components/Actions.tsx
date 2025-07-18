"use client"

import { Eye, Download, Mail } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'


export default function Actions() {

    const handlePreview = () => {
        // Logic to preview the quote
        console.log("Previewing quote...");
    };
    const handleGeneratePDF = () => {
        // Logic to generate PDF
        console.log("Generating PDF...");
    };
    const handleSendEmail = () => {
        // Logic to send quote via email
        console.log("Sending quote via email...");
    };


    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                    <Button onClick={() => handlePreview()} variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Anteprima
                    </Button>
                    <Button onClick={() => handleGeneratePDF()} variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Genera PDF
                    </Button>
                    <Button onClick={() => handleSendEmail()}>
                        <Mail className="w-4 h-4 mr-2" />
                        Invia Email
                    </Button>
                </div>
            </CardContent>
        </Card >
    )
}