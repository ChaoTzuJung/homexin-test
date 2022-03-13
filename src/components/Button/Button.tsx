import { S } from "./styled";
import { ButtonPropsI } from "./types";

export const Button = (props: ButtonPropsI): JSX.Element => {
  const { className, children, variant = "contained", onClick } = props;
  const handleClick = () => onClick && onClick();
  return (
    <S.Button className={className} onClick={handleClick} variant={variant}>
      {children}
    </S.Button>
  );
};
