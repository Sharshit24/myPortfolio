import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

import site from "./site.json";

export const metadata: Metadata = {
    title: site.site.title || "Portfolio",
    description: site.site.description || "",
    openGraph: {
        title: site.site.title || "",
        description: site.site.description || "",
        url: site.site.url || undefined,
        type: "website",
        images: [
            {
                url: site.site.ogImage || "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: site.site.title || "Portfolio",
            },
        ],
    },
    metadataBase: site.site.url ? new URL(site.site.url) : undefined,
    twitter: {
        card: "summary_large_image",
        creator: site.socials?.twitter || "",
    },
    authors: [{ name: site.profile?.name || "" }],
    keywords: [site.profile?.name || "", "Frontend Developer", "React", "Next.js"].filter(Boolean) as string[],
    creator: site.profile?.name || "",
    publisher: site.profile?.name || "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.variable}`}
            suppressHydrationWarning
        >
            <body
                className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden dark:bg-[#0b0a09]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme={site.site.theme === "dark" ? "dark" : site.site.theme === "light" ? "light" : "system"}
                    enableSystem={site.site.theme === "system"}
                    disableTransitionOnChange
                >
                    <div style={{ ["--accent-color" as any]: site.site.accentColor }} className="bg-white dark:bg-black mx-auto pt-6 sm:pt-12 w-full md:w-3/4 lg:w-3/5 text-foreground">
                        {children}
                    </div>
                </ThemeProvider>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
