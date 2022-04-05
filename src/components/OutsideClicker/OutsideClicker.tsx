import { useRef } from "react";
import { useOutsideClicker } from "@/hooks/useOutsideClicker";
import { OutsideClickerPropsI } from "./types";

export const OutsideClicker = ({
  action,
  open,
  children,
}: OutsideClickerPropsI): JSX.Element => {
  const wrapperRef = useRef(null);
  useOutsideClicker(wrapperRef, open, action);
  return <div ref={wrapperRef}>{children}</div>;
};
