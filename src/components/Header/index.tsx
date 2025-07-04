"use client";
import Image from "next/image";
import Link from "next/link";
import vultureIcon from "@/assets/vulture.svg";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between w-full py-4 "
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src={vultureIcon} alt="Vulture icon" width={20} />
        <h2 className="font-bold text-xl">John lira</h2>
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link href={"/articles"}>
              <p>Articles</p>
            </Link>
          </li>
          <li>
            <Link href={"/projects"}>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <p>Github</p>
            </Link>
          </li>
        </ul>
        <Button>
          <p>get in touch</p>
          <ArrowUpRight />
        </Button>
      </div>
    </motion.header>
  );
};
