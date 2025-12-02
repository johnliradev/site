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
      <div className="flex flex-col-reverse sm:flex-row justify-between w-full relative">
        {/* Viewer */}
        {selected === "home" && <Hero />}
        {selected === "about" && <AboutMe />}
        {selected === "projects" && <ProjectsPreview />}
        {selected === "writings" && <WritingsPreview />}
        {selected === "social" && <SocialCard />}
        {/* Selector */}
        <ul className="flex flex-row sm:flex-col gap-3 sm:text-end text-center w-full sm:w-auto mb-4 sm:mb-0">
          <li>
            <Button
              variant={"link"}
              onClick={() => SetSelected("home")}
              className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
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
              className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
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
              className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
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
              className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
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
              className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
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
