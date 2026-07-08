import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Zenith Build — Creative Digital Agency",
  description:
    "A creative digital agency crafting bold, modern web experiences that elevate brands and push boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#0C0C0C] text-[#D7E2EA]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
