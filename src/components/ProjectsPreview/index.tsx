import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { projects } from "../../lib/Projects/data";
import Link from "next/link";

import { motion } from "motion/react";

export const ProjectsPreview = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex  items-center justify-between border-b  pb-1 border-muted-foreground">
        <p>Projects</p>
        <Link href={"/projects"}>
          <Button variant={"link"}>
            View All
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {projects.slice(0, 2).map((project, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.4, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
