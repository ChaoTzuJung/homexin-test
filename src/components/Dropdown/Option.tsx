import React, { useEffect } from "react";
import { S } from "./styled";
import { OptionPropsI, OptionT } from "./types";

export const Option = (props: OptionPropsI) => {
  const {
    className,
    children,
    style,
    value,
    selectValue,
    onChange,
    setOption,
  } = props;

  useEffect(() => {
    if (selectValue === value) {
      setOption?.({ value, children } as OptionT);
    }
  }, [value]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOption?.({ value, children } as OptionT);
    if (selectValue !== value) {
      onChange?.(event, value as string | number);
    }
  };

  return (
    <S.Option className={className} style={style} onClick={handleClick}>
      {children}
    </S.Option>
  );
};
