"use client";
import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu/menu";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { SocialCard } from "@/components/SocialCard";
import { WritingsPreview } from "@/components/WritingsPreview";
import { useMenu } from "@/hooks/useMenu";

export default function Home() {
  const { opt } = useMenu();
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-between w-full relative">
        {/* Viewer */}
        {opt === "home" && <Hero />}
        {opt === "about" && <AboutMe />}
        {opt === "projects" && <ProjectsPreview />}
        {opt === "writings" && <WritingsPreview />}
        {opt === "social" && <SocialCard />}
        {/* Selector */}
        <Menu />
      </div>
    </>
  );
}
