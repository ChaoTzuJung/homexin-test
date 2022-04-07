import OutsideClicker from "@/components/OutsideClicker";
import { S } from "./styled";
import { ShadePropsI } from "./types";

export const Shade = ({
  style,
  className,
  children,
  open = false,
  onClick,
}: ShadePropsI) => (
  <S.Shade className={className} style={style} open={open}>
    <OutsideClicker open={open} action={onClick}>
      {children}
    </OutsideClicker>
  </S.Shade>
);
