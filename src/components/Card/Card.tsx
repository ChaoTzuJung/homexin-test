import { S } from "./styled";
import { CardPropsI } from "./types";

export const Card = (props: CardPropsI): JSX.Element => {
  const { children, color, type = "normal" } = props;
  return (
    <S.Card color={color} type={type}>
      {children}
    </S.Card>
  );
};
