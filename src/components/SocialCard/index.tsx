import { FileDown, Code, Target } from "lucide-react";
import { EmailCard } from "../EmailCard";
import { Button } from "../ui/button";
import { XCard } from "../XCard";
import Link from "next/link";

export const SocialCard = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row md:items-start gap-4">
      <XCard />
      <div className="space-y-4 w-full md:max-w-[260px]">
        <EmailCard />
        <div>
          <Button size={"xl"}>
            <p>Download my CV</p>
            <FileDown />
          </Button>
          <p className="text-center">Not done yet</p>
        </div>
        <div>
          <Link href={"https://github.com/johnliradev/site"} target="_blank">
            <Button size={"xl"}>
              <p>Get code</p>
              <Code />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
