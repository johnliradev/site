import { FileDown, Code } from "lucide-react";
import { motion } from "motion/react";
import { EmailCard } from "../EmailCard";
import { Button } from "../ui/button";
import { XCard } from "../XCard";

export const SocialCard = () => {
  return (
    <div className="flex gap-4">
      <XCard />
      <div className="space-y-4 max-w-[260px]">
        <EmailCard />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          <Button size={"xl"}>
            <p>Download my CV</p>
            <FileDown />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
        >
          <Button size={"xl"}>
            <p>Get code</p>
            <Code />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
