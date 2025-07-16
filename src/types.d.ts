export interface QuoteItem {
    id: string;
    component: string;
    specification: string;
    price: number;
}

export interface Quote {
    customerName: string;
    customerEmail: string;
    items: QuoteItem[];
    fee: number;
    discount: number;
    originalPrice: number;
    finalPrice: number;
    notes: string;
}