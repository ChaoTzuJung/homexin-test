import React, { useState, useEffect, Children } from "react";
import OutsideClicker from "@/components/OutsideClicker";
import Icon from "@/components/Icon";
import { DropdownPropsI, OptionT } from "./types";
import { S } from "./styled";

export const Dropdown = (props: DropdownPropsI) => {
  const {
    className,
    children: childrenProp,
    style,
    defaultValue,
    disabled = false,
    label,
    placeholder,
    onChange,
  } = props;

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState<OptionT | Record<string, never>>({});

  const children = Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      selectValue: defaultValue || option.value,
      onChange,
      setOption,
    });
  });

  console.log("disabled:", disabled);

  const onDropDownClick = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  // TODO: option change
  useEffect(() => {
    setOpen(false);
  }, [option]);

  return (
    <S.Dropdown className={className} style={style} onClick={onDropDownClick}>
      <S.Content disabled={disabled}>
        {option.value ? (
          <span>{option.children}</span>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
        <Icon
          name="arrow"
          size={14}
          color="#CED1D5"
          style={{ transform: "translateY(2px)" }}
        />
      </S.Content>
      <S.Input name={label} disabled={disabled} />
      <OutsideClicker action={() => setOpen(false)} open={open}>
        <S.Options open={open}>{children}</S.Options>
      </OutsideClicker>
    </S.Dropdown>
  );
};
