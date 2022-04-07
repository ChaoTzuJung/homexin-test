import { ParentsBaseT } from "../../types";

export interface CardPropsI extends ParentsBaseT {
  color?: string;
  type?: "shadow" | "border" | "normal";
}
