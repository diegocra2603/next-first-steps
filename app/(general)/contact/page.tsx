import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Contact',
    description: 'Page from Contact',
    keywords: ['Contact Page', 'Diego', 'Contacto', '...']
   };

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}