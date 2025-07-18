import React from 'react'



export default function PreviewFooter() {
    return (
        <>
            <div className="flex justify-between items-end">
                <div className="text-sm">
                    <p>Ti ringrazio ancora,</p>
                    <p>In fede,</p>
                    <div className="mt-4">
                        <p className="font-medium">Orlando V. M. Ferazzani</p>
                        <p>ML Tech Founder</p>
                    </div>
                </div>
            </div>

            {/* Contatti */}
            <div className="mt-8 pt-4 border-t border-border text-sm text-muted-foreground">
                <div className="flex justify-between items-center">
                    <div>
                        <p>www.mltech.store</p>
                        <p>info@mltech.store</p>
                        <p>assistenza@mltech.store</p>
                    </div>
                    <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                        QR
                    </div>
                </div>
            </div>
        </>
    )
}