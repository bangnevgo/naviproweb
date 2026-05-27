import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAVI Pro - Lead Generation Otomatis & Cerdas untuk Seller Indonesia",
  description:
    "Platform AI-powered lead generation otomatis untuk seller Indonesia. Smart scoring, multi-channel DM, dan analytics dashboard real-time.",
  keywords: [
    "NAVI Pro",
    "Lead Generation",
    "AI",
    "E-commerce",
    "Seller Indonesia",
    "Tokopedia",
    "Shopee",
    "TikTok Shop",
  ],
  authors: [{ name: "NAVI Pro Team" }],
  openGraph: {
    title: "NAVI Pro - Lead Generation Otomatis & Cerdas",
    description:
      "Platform AI-powered lead generation otomatis untuk seller Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${onest.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
