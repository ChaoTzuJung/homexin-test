export interface NumberFieldPropsI {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  name: string;
  value: number;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  maxLength?: number;
  minLength?: number;
  unit?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
