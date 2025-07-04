import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Lira",
  description: "My personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
