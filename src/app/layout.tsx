import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
const dmSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-source-serif-4",
});

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
};

const metadata: Metadata = {
    title: "The Confluence Chronicles",
    description: `A collaborative physics newsletter uniting student
        societies across Indian colleges through research,
        ideas, and scientific storytelling.`,
};

export default RootLayout;
export { metadata };
