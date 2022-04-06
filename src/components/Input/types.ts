export type InputType = "text" | "number" | "password" | "tel" | "file";

export interface InputPropsI {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  name: string;
  value?: string | number;
  type: InputType;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
