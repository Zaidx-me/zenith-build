import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ImmersiveMode from "@/components/ImmersiveMode";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-kanit",
});

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
    <html lang="en" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0C0C0C] text-[#D7E2EA]">
        <ImmersiveMode />
        <div className="relative z-[2] min-h-dvh mx-0">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
