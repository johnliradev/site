import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { projects } from "../../lib/Projects/data";
import Link from "next/link";

export const ProjectsPreview = () => {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex text-xl  items-center justify-between border-b  pb-1 border-muted-foreground">
        <p>Projects</p>
        <Link href={"/"}>
          <Button variant={"link"}>
            View All
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {projects.slice(0, 2).map((project, index) => (
          <div key={index} className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-muted px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.code_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                {project.site_url && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.site_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Site
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
