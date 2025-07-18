"use client"
import { Card, CardContent } from "@/components/ui/card";
import PreviewHeader from "./PreviewHeader";
import PreviewTable from "./PreviewTable";

export default function Preview() {
    return (
        <Card className="max-w-3xl mx-auto my-8">
            <CardContent className="p-8">
                <PreviewHeader />
                <PreviewTable />
            </CardContent>

        </Card>
    )
}