import { useRef, MutableRefObject } from "react";
import { FileFieldPropsI } from "./types";
import Input from "@/components/Input";
import { Label } from "../Label/Label";
import { S } from "./styled";

export const FileField = (props: FileFieldPropsI) => {
  const {
    className,
    style,
    label,
    name,
    placeholder,
    disabled,
    error,
    helperText,
    required,
    fullWidth,
    preview,
    onChange,
  } = props;

  const fileRef: MutableRefObject<HTMLInputElement | null> = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;

  const handleClick = () => fileRef.current && fileRef.current.click();

  return (
    <S.FileField className={className} style={style}>
      <S.UploadPanel onClick={handleClick}>
        {preview ? (
          <S.PreviewImage src={preview} alt="身分證" />
        ) : (
          <Label title={label} style={{ border: "none", width: "auto" }} />
        )}
      </S.UploadPanel>
      <Input
        ref={fileRef}
        type="file"
        // accept={accept}
        label={label}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        required={required}
        fullWidth={fullWidth}
        onChange={onChange}
        style={{ display: "none" }}
      />
      {required && error && <p className="errorMessage">{helperText}</p>}
    </S.FileField>
  );
};
