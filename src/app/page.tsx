"use client";
import { EmailCard } from "@/components/EmailCard";
import { Hero } from "@/components/Hero";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { Button } from "@/components/ui/button";
import { XCard } from "@/components/XCard";
import { Code, FileDown } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between my-16 ">
        <Hero />
        <div className="flex gap-4">
          <XCard />
          <div className="space-y-4 max-w-[260px]">
            <EmailCard />
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Button size={"xl"}>
                <p>Download my CV</p>
                <FileDown />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Button size={"xl"}>
                <p>Get code</p>
                <Code />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <ProjectsPreview />
        <div className="w-full"></div>
      </div>
    </>
  );
}
