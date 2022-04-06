export interface FileFieldPropsI {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  preview?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
