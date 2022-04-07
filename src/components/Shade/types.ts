import { ParentsBaseT } from "../../types";

export interface ShadePropsI extends ParentsBaseT {
  open: boolean;
  onClick?: (...args: any[]) => void;
}
