import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Pricing',
    description: 'Page from Pricing',
    keywords: ['Pricing Page', 'Diego', 'Precio', '...']
   };

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
