import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { writings } from "../../lib/writings/data";
import Link from "next/link";

export const WritingsPreview = () => {
  // Sort writings by date descending and take the 2 most recent
  const sortedWritings = [...writings].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const previewWritings = sortedWritings.slice(0, 2);

  return (
    <div className="w-full max-w-3xl">
      <div className="flex text-xl  items-center justify-between border-b  pb-1 border-muted-foreground">
        <p className="font-medium">Writings</p>
      </div>
      Building...
    </div>
  );
};
