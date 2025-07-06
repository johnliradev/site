"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import XIcon from "@/assets/x-icon.svg";
import Image from "next/image";
import { Users } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const XCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-sm text-center"
    >
      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle className="flex gap-4 items-start text-start">
            <Image src={XIcon} alt="X Icon"></Image>
            <div>
              <h3>John Lira</h3>
              <p className="text-muted-foreground text-sm">@johnliradev</p>
            </div>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          Computer Science student, Full-stack developer in progress,
          Cybersecurity enthusiast, Sharing my journey and progress.
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href={"https://x.com/johnliradev"} target="_blank">
            <Button className="gap-4">
              <p>Follow me</p>
              <Users />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
