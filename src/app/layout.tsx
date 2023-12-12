import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderComponent from "@/Components/HeaderComponent/HeaderComponent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iktan Roving",
  description: "Made by: Iktan Roving Dev Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
