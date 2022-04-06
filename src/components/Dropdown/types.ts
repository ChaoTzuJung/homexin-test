import { ParentsBaseT } from "../../types";

export interface DropdownPropsI extends ParentsBaseT {
  defaultValue?: number | string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => void;
}

export type OptionT = {
  value: string | number;
  children: React.ReactNode;
};

export interface OptionPropsI extends ParentsBaseT {
  value?: string | number;
  selectValue?: string | number;
  setOption?: ({ value, children }: OptionT) => void;
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => void;
}
