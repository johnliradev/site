"use client";

import { Contact } from "../Contact";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <p className="text-7xl font-medium">Hi, i'm John</p>
        <p className="text-2xl">
          Bachelor's degree in Computer Science, with a focus on <br />
          developing scalable web applications.
        </p>
      </div>

      <p className="text-xl text-muted-foreground">
        On side, you can see my projects, writings and, sure, about me.
      </p>
    </div>
  );
};
