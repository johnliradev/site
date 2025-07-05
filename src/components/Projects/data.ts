import { StaticImageData } from "next/image";
const silencePreview = "/silence-preview.png";
const mailForgePreview = "/mail-forge-preview.png";

type Project = {
  image: string;
  title: string;
  desc: string;
  tech: string[];
  site_url: string;
  code_url: string;
};
export const projects: Project[] = [
  {
    title: "Mail Forge",
    desc: "A  based on AI app for generate e-mails for students, businnes and personal",
    tech: ["OPENAI API", "React", "NextJs"],
    site_url: "https://mail-forge.vercel.app/",
    code_url: "https://github.com/johnliradev/mailforge",
    image: mailForgePreview,
  },
  {
    title: "To Do is Silence",
    desc: "Focus on productivity and focus task management",
    tech: ["Typescript", "React", "TailwindCSS"],
    site_url: "https://todoinsilence.vercel.app/",
    code_url: "https://github.com/johnliradev/todoinsilence",
    image: silencePreview,
  },
];
