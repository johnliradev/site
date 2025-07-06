import { motion } from "motion/react";
import { useState } from "react";

export const AboutMe = () => {
  const [selectedTech, setSelectedTech] = useState<string>("backend");

  const technologies = {
    backend: [
      "Node.js",
      "TypeScript",
      "ExpressJS",
      "Fastify",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
    ],
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HTML/CSS",
      "ShadcnUI",
      "Zod",
    ],
    tools: ["Git", "Docker", "VS Code", "Postman", "Figma", "Cursor", "VIM"],
    others: ["Linux", "REST APIs", "Log", "JWT"],
  };

  return (
    <motion.div
      className="w-full max-w-3xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex text-xl items-center justify-between border-b pb-1 border-muted-foreground">
        <p className="font-semibold text-lg">About Me</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Who I Am</h3>
        <p className="text-md text-muted-foreground leading-relaxed">
          I'm a Computer Science student and full stack developer, currently
          focused on backend development. Passionate about building clean,
          efficient, and scalable systems, I'm constantly learning and refining
          my skills through hands-on projects and real-world problem solving.
        </p>
      </div>

      <div className="mt-6">
        <div className="bg-muted rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">My technologies</h4>

          {/* Technology Category Selector */}
          <div className="flex gap-2 mb-4">
            {Object.keys(technologies).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedTech(category)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedTech === category
                    ? "bg-white text-black"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Technology List */}
          <div className="grid grid-cols-2 gap-2">
            {technologies[selectedTech as keyof typeof technologies].map(
              (tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-3 py-2 bg-black/20 rounded-md text-sm font-medium hover:bg-black/30 transition-colors"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
