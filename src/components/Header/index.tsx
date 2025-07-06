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
      className="flex items-center justify-between py-4 w-full sm:max-w-5xl sm:mx-auto"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src={vultureIcon} alt="Vulture icon" width={20} />
        <h2 className="font-bold text-xl">John lira</h2>
      </Link>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 border border-yellow-500/20">
        <span className="text-sm">🚧</span>
        <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
          In development
        </span>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link href={"/"}>
              <p>Writings</p>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/johnliradev"} target="_blank">
              <p>Github</p>
            </Link>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};
