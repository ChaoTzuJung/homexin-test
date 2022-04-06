export interface TextFieldPropsI {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
