import { EmailCard } from "@/components/EmailCard";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { XCard } from "@/components/XCard";
import { Code, FileDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between mt-16 ">
        <Hero />
        <div className="flex gap-4">
          <XCard />
          <div className="space-y-4 max-w-[260px]">
            <EmailCard />
            <Button size={"xl"}>
              <p>Download my CV</p>
              <FileDown />
            </Button>
            <Button size={"xl"}>
<<<<<<< HEAD
              <p>Project Code</p>
=======
              <p>Get Code</p>
>>>>>>> 8f70537dcd91b7c6933545b1baba282c88f06c11
              <Code />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
