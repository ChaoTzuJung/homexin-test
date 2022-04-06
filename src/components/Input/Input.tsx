import { forwardRef } from "react";
import { S } from "./styled";
import { InputPropsI } from "./types";

export const Input = forwardRef((props: InputPropsI, ref: any): JSX.Element => {
  const {
    className,
    style,
    label,
    name,
    value,
    type = "text",
    placeholder,
    disabled = false,
    error,
    required = false,
    helperText,
    fullWidth,
    maxLength,
    minLength,
    pattern,
    onChange,
  } = props;

  return (
    <div className={className} style={{ ...style, position: "relative" }}>
      <S.Input
        {...props}
        ref={ref}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
        pattern={pattern}
        required={required}
        value={value}
        min={minLength}
        max={maxLength}
        minLength={minLength}
        maxLength={maxLength}
      />
      {error && helperText && <S.ErrorMessage>{helperText}</S.ErrorMessage>}
    </div>
  );
});
