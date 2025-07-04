import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

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
      <body
        className={`${inter.className}  antialiased min-h-screen transition-all bg-black text-white duration-150`}
      >
        <div className="dark mx-auto flex flex-col items-center  w-[90%] max-w-7xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
