import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const geist = Geist({
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
        className={`${geist.className}  antialiased  transition-all duration-150`}
      >
        <div className="relative mx-auto flex flex-col gap-20 items-center  min-h-screen  w-[95%] max-w-5xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
