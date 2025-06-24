import type { Metadata } from "next";
import { Playfair_Display, Playfair } from "next/font/google";
import "./globals.css";

const PFD = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const PF = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACD Website",
  description: "A Next app made by TeejMcSteez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PFD.variable} ${PF.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
