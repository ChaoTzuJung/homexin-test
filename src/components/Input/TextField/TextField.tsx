import { TextFieldPropsI } from "./types";
import Input from "@/components/Input";
import Label from "@/components/Input/Label";
import { S } from "./styled";

export const TextField = (props: TextFieldPropsI) => {
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
    onChange,
  } = props;

  return (
    <S.TextField className={className} style={style}>
      <Label title={label} />
      <Input
        style={{ height: "100%", marginLeft: 18 }}
        type="text"
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        required={required}
        fullWidth={fullWidth}
        onChange={onChange}
      />
      {required && error && <p className="errorMessage">{helperText}</p>}
    </S.TextField>
  );
};
