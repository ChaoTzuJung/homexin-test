import { S } from "./styled";
import { CardPropsI } from "./types";

export const Card = (props: CardPropsI) => {
  const { className, children, style, color, type = "normal" } = props;
  return (
    <S.Card className={className} style={style} color={color} type={type}>
      {children}
    </S.Card>
  );
};
