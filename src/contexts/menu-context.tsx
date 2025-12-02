"use client";
import { createContext, ReactNode, useMemo, useState } from "react";

export const MenuContext = createContext({
  opt: "home",
  setOpt: (opt: string) => {},
});
export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [opt, setOpt] = useState<string>("home");
  return <MenuContext.Provider value={{ opt, setOpt }}>{children}</MenuContext.Provider>;
};
