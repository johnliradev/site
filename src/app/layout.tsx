import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { MenuContextProvider } from "@/contexts/menu-context";
import { Contact } from "@/components/Contact";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        className={`${geist.className} ${geistMono.variable} antialiased  transition-all duration-150`}
      >
        <div className="relative mx-auto flex flex-col gap-20 items-center  min-h-screen  w-[95%] max-w-5xl">
          <Header />
          <MenuContextProvider>{children}</MenuContextProvider>
          <Contact />
        </div>
      </body>
    </html>
  );
}
