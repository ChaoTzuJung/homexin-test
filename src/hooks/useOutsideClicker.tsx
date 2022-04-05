import { RefObject, useEffect } from "react";

export const useOutsideClicker = (
  ref: RefObject<any>,
  open: boolean,
  action?: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) action?.();
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
};
