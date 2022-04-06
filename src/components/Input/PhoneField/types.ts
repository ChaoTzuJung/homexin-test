export interface PhoneFieldPropsI {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
