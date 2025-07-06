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
        className={`${geist.className}  antialiased min-h-screen transition-all bg-black text-white duration-150`}
      >
        <div className="dark mx-auto flex flex-col items-center  w-[95%] max-w-[1420px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
