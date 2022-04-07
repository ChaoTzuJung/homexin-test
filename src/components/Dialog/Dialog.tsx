import OutsideClicker from "@/components/OutsideClicker";
import Shade from "@/components/Shade";
import { S } from "./styled";
import { DialogPropsI } from "./types";

export const Dialog = ({
  style,
  children,
  className,
  open = false,
  hideShade = false,
  onShadeClick,
}: DialogPropsI) => {
  const dialog = (
    <S.Dialog className={className} style={style} open={open}>
      {children}
    </S.Dialog>
  );

  if (hideShade) {
    return (
      <OutsideClicker open={open} action={onShadeClick}>
        {dialog}
      </OutsideClicker>
    );
  }

  return (
    <Shade open={open} onClick={onShadeClick}>
      {dialog}
    </Shade>
  );
};
