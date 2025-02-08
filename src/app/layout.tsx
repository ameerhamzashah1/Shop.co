import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Announce from "@/components/announcement";
import Header from "@/components/Header";
import Footer from "@/components/footer";

// ✅ Dono fonts ko import karein
const inter = Inter({ subsets: ["latin"] });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ✅ `bodoni.className` bhi add kar diya */}
      <body className={`${inter.className} ${bodoni.className}`}>
        <Announce />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
