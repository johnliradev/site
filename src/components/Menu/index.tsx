"use client";
import { useMenu } from "@/hooks/useMenu";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export const Menu = () => {
  const { opt, setOpt } = useMenu();
  return (
    <div>
      <ul className="flex flex-row sm:flex-col gap-3 sm:text-end text-center w-full sm:w-auto mb-4 sm:mb-0">
        {[
          { key: "home", label: "Home" },
          { key: "about", label: "About me" },
          { key: "projects", label: "Projects" },
          { key: "writings", label: "Writings" },
          { key: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.key}>
            <Button
              variant={"link"}
              onClick={() => setOpt(item.key)}
              className="font-medium font-mono text-base px-2 sm:text-2xl sm:px-4"
            >
              {opt === item.key && <ChevronRight strokeWidth={4} size={36} />}
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
