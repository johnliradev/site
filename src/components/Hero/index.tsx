"use client";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <p className="text-8xl font-medium">Hi, i'm John</p>
        <p className="text-4xl">
          No hyper bio here, i'm just a full-stack developer.
        </p>
      </div>

      <p className="text-xl text-muted-foreground">
        On side, you'll see my projects, writings, contact info and, sure, about
        me.
      </p>
    </div>
  );
};
