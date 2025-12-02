"use client";
import { useMenu } from "@/hooks/useMenu";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export const Menu = () => {
  const { opt, setOpt } = useMenu();
  return (
    <div>
      <ul className="flex flex-row sm:flex-col gap-3 sm:text-end text-center w-full sm:w-auto mb-4 sm:mb-0">
        <li>
          <Button
            variant={"link"}
            onClick={() => setOpt("home")}
            className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
          >
            {opt === "home" && <ChevronRight strokeWidth={4} size={36} />}
            Home
          </Button>
        </li>
        <li>
          <Button
            variant={"link"}
            onClick={() => setOpt("about")}
            className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
          >
            {opt === "about" && <ChevronRight strokeWidth={4} size={36} />}
            About me
          </Button>
        </li>
        <li>
          <Button
            variant={"link"}
            onClick={() => setOpt("projects")}
            className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
          >
            {opt === "projects" && <ChevronRight strokeWidth={4} size={36} />}
            Projects
          </Button>
        </li>
        <li>
          <Button
            variant={"link"}
            onClick={() => setOpt("writings")}
            className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
          >
            {opt === "writings" && <ChevronRight strokeWidth={4} size={36} />}
            Writings
          </Button>
        </li>
        <li>
          <Button
            variant={"link"}
            onClick={() => setOpt("social")}
            className="font-semibold text-base px-2 sm:text-2xl sm:px-4"
          >
            {opt === "social" && <ChevronRight strokeWidth={4} size={36} />}
            Social
          </Button>
        </li>
      </ul>
    </div>
  );
};
