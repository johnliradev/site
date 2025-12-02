import { MenuContext } from "@/contexts/menu-context";
import { useContext } from "react";

export const useMenu = () => useContext(MenuContext);
