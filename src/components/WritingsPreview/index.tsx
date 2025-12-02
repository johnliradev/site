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
      <div className="flex text-xl  items-center justify-between border-b pb-1 border-muted-foreground">
        <p className="font-semibold text-lg">Writings</p>
        <Link href="/">
          <Button variant="link" className="gap-1">
            View All
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <p className="text-sm text-muted-foreground mt-2 mb-4">
        I occasionally share my thoughts on software development, cybersecurity,
        and my journey as a full stack developer in progress. I write about real
        learning experiences, project insights, and challenges I face along the
        way. Follow along for honest takes and technical growth.
      </p>
      <div className="flex flex-col gap-2">
        {previewWritings.map((writing, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-md bg-muted px-4 py-2 hover:bg-muted/70 transition-colors"
          >
            <span className="truncate text-sm font-medium">
              {writing.title}
            </span>
            <span className="text-xs text-muted-foreground ml-4 shrink-0">
              {new Date(writing.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
