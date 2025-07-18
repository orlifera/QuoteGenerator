import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import QuoteGen from "@/components/QuoteGen";
import Preview from "@/components/Preview";
import { QuoteProvider } from "@/hooks/QuoteProvider";


export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <QuoteProvider>
        <Tabs defaultValue="form" className="w-[60%] m-4 p-4 h-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="preview">Anteprima</TabsTrigger>
          </TabsList>
          <TabsContent value="form">
            <QuoteGen />
          </TabsContent>
          <TabsContent value="preview">
            <Preview />
          </TabsContent>
        </Tabs>
      </QuoteProvider>
    </main>
  );
}
