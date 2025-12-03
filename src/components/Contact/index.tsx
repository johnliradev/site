import { Copy } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Contact = () => {
  return (
    <div className="mt-6 flex flex-col gap-2 absolute bottom-10">
      <div className="flex items-center">
        <Badge
          className="px-3 text-md gap-3 text-muted-foreground hover:text-black"
          variant={"outline"}
        >
          <p className="">johnalsoares@gmail.com</p>
          <Button className="p-0 m-1" variant={"outline"}>
            <Copy />
          </Button>
        </Badge>
        <div>
          <Button className="text-lg text-muted-foreground hover:text-black" variant={"link"}>
            LinkedIn
          </Button>
          <Button className="text-lg text-muted-foreground hover:text-black" variant={"link"}>
            Twitter / X
          </Button>
        </div>
      </div>
    </div>
  );
};
