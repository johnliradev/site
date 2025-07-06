"use client";
import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { SocialCard } from "@/components/SocialCard";
import { Button } from "@/components/ui/button";
import { WritingsPreview } from "@/components/WritingsPreview";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selected, SetSelected] = useState<string>("home");
  return (
    <>
      <div className="flex justify-between w-full relative">
        {/* Viewer */}
        {selected === "home" && <Hero />}
        {selected === "about" && <AboutMe />}
        {selected === "projects" && <ProjectsPreview />}
        {selected === "writings" && <WritingsPreview />}
        {selected === "social" && <SocialCard />}
        {/* Selector */}
        <ul className="flex flex-col gap-3 text-end">
          <li>
            <Button
              variant={"link"}
              onClick={() => SetSelected("home")}
              className="font-semibold text-2xl"
            >
              {selected === "home" && (
                <ChevronRight strokeWidth={4} size={36} />
              )}
              Home
            </Button>
          </li>
          <li>
            <Button
              variant={"link"}
              onClick={() => SetSelected("about")}
              className="font-semibold text-2xl"
            >
              {selected === "about" && (
                <ChevronRight strokeWidth={4} size={36} />
              )}
              About me
            </Button>
          </li>
          <li>
            <Button
              variant={"link"}
              onClick={() => SetSelected("projects")}
              className="font-semibold text-2xl"
            >
              {selected === "projects" && (
                <ChevronRight strokeWidth={4} size={36} />
              )}
              Projects
            </Button>
          </li>
          <li>
            <Button
              variant={"link"}
              onClick={() => SetSelected("writings")}
              className="font-semibold text-2xl"
            >
              {selected === "writings" && (
                <ChevronRight strokeWidth={4} size={36} />
              )}
              Writings
            </Button>
          </li>
          <li>
            <Button
              variant={"link"}
              onClick={() => SetSelected("social")}
              className="font-semibold text-2xl"
            >
              {selected === "social" && (
                <ChevronRight strokeWidth={4} size={36} />
              )}
              Social
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
