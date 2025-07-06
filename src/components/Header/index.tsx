"use client";
import Image from "next/image";
import Link from "next/link";
import vultureIcon from "@/assets/vulture.svg";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between py-4 w-full  max-w-5xl mx-auto "
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src={vultureIcon} alt="Vulture icon" width={20} />
        <h2 className="font-bold text-xl">John lira</h2>
      </Link>
      <div className="flex items-center gap-4">
        {/* Responsividade customizada para <400px */}
        {typeof window !== "undefined"
          ? (() => {
              const [isMobile, setIsMobile] = useState(false);
              useEffect(() => {
                const handleResize = () => setIsMobile(window.innerWidth < 400);
                handleResize();
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
              }, []);
              if (isMobile) {
                return (
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Menu className="w-6 h-6" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href="/writings">Writings</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/projects">Projects</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="https://github.com/johnliradev"
                            target="_blank"
                          >
                            Github
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              return (
                <ul className="flex gap-4">
                  <li>
                    <Link href={"/writings"}>
                      <p>Writings</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://github.com/johnliradev"}
                      target="_blank"
                    >
                      <p>Github</p>
                    </Link>
                  </li>
                </ul>
              );
            })()
          : null}
      </div>
    </motion.header>
  );
};
