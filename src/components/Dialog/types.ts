import { ParentsBaseT } from "../../types";

export interface DialogPropsI extends ParentsBaseT {
  open: boolean;
  hideShade?: boolean;
  onShadeClick?: (...args: any[]) => void;
}
