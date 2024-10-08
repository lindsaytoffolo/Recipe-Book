import { defaultFont } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | PantryPlanner",
        default: "PantryPlanner",
    },
    description:
        "PantryPlanner is an app that helps you manage both your recipe book and your grocery list to make meal planning easier",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${defaultFont.className} bg-neutral-100 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
