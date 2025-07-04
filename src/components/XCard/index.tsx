import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import XIcon from "@/assets/x-icon.svg";
import Image from "next/image";
import { Users } from "lucide-react";
export const XCard = () => {
  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <CardTitle className="flex gap-4 items-start text-start">
          <Image src={XIcon} alt="X Icon"></Image>
          <div>
            <h3>John Lira</h3>
            <p className="text-muted-foreground text-sm">@johnliradev</p>
          </div>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        Computer Science student, Full-stack developer in progress,
        Cybersecurity enthusiast, Sharing my journey and progress.
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="gap-4">
          <p>Follow me</p>
          <div className="flex items-center gap-1">
            <p>37</p>
            <Users />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};
