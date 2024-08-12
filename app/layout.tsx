import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://richardanchieta.com"),
  alternates: {
    canonical: "https://richardanchieta.com",
  },
  title: "Richard Anchieta",
  description:
    "Richard Anchieta - Arquiteto de Soluções e Desenvolvedor Sênior Full Stack.",
  keywords:
    "Richard Anchieta, Arquiteto de Soluções, Arquiteto de Software, Desenvolvedor Full Stack, Fullstack, Tech Lead, Web Development, Web3, Decentralized Applications, Quality Assurance, Software Engineering, Blockchain, Cryptography",
  openGraph: {
    locale: "pt_BR",
    siteName: "Richard Anchieta",
    type: "website",
    title: "Richard Anchieta",
    description:
      "Richard Anchieta - Arquiteto de Soluções e Desenvolvedor Sênior Full Stack.",
    url: "https://richardanchieta.com",
    images: [
      {
        url: "./og-large-richardanchieta.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Anchieta",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
