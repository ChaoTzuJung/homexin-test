import { ReactNode } from "react";

export interface OutsideClickerPropsI {
  open: boolean;
  action?: () => void;
  children: ReactNode;
}
