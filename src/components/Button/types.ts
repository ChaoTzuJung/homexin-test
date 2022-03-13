export interface ButtonPropsI {
  className?: string;
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained" | "shadow";
  onClick?: () => void;
}
