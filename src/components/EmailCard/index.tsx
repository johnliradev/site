"use client";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const EmailCard = () => {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  function handleCopy() {
    if (isCopy) {
      return;
    }
    navigator.clipboard.writeText("johnalsoares@gmail.com");
    setIsCopy(!isCopy);
  }
  useEffect(() => {
    if (isCopy) {
      const timer = setTimeout(() => {
        setIsCopy(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isCopy]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="gap-1 max-h-fit">
        <CardHeader>
          <CardTitle className="flex gap-4">
            <Badge variant={"secondary"}>Email</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>johnalsoares@gmail.com</CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            className={`gap-4 ${
              isCopy ? "bg-green-700 text-white hover:bg-green-800" : ""
            }`}
            onClick={handleCopy}
            variant={"secondary"}
          >
            {isCopy ? <p>Copied</p> : <p>Copy e-mail</p>}
            {isCopy ? <Check /> : <Copy />}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
