import { PhoneFieldPropsI } from "./types";
import Input from "@/components/Input";
import Label from "@/components/Input/Label";
import { usePhoneFormat } from "../../../utils";
import { S } from "./styled";

export const PhoneField = (props: PhoneFieldPropsI) => {
  const {
    className,
    style,
    label,
    value,
    disabled,
    required,
    fullWidth,
    onChange,
  } = props;

  return (
    <S.PhoneField className={className} style={style}>
      <Label title={label} />
      <Input
        style={{ height: "100%", marginLeft: 18 }}
        type="tel"
        label={label}
        name="phone"
        value={usePhoneFormat(value)}
        placeholder="xxxx-xxx-xxx"
        minLength={12}
        maxLength={12}
        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
        disabled={disabled}
        error={value.length !== 10}
        helperText="電話號碼不足 10 碼 (Invalid Number)"
        required={required}
        fullWidth={fullWidth}
        onChange={onChange}
      />
    </S.PhoneField>
  );
};
