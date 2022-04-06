import { NumberFieldPropsI } from "./types";
import Input from "@/components/Input";
import Label from "@/components/Input/Label";
import { S } from "./styled";

export const NumberField = (props: NumberFieldPropsI) => {
  const {
    className,
    style,
    label,
    name,
    value,
    placeholder,
    disabled,
    error,
    helperText,
    required,
    fullWidth,
    maxLength,
    minLength,
    unit,
    onChange,
  } = props;

  return (
    <S.NumberField className={className} style={style}>
      <Label title={label} />
      <Input
        style={{ height: "100%", marginLeft: 18 }}
        type="number"
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        required={required}
        fullWidth={fullWidth}
        maxLength={maxLength}
        minLength={minLength}
        onChange={onChange}
      />
      <span className="unit">{unit}</span>
      {required && error && <p className="errorMessage">{helperText}</p>}
    </S.NumberField>
  );
};
