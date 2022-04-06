import { S } from "./styled";
import { LabelPropsI } from "./types";

export const Label = (props: LabelPropsI) => {
  const { className, style, title } = props;

  return (
    <S.Label className={className} style={style} htmlFor={title}>
      <span className="label">{title}</span>
    </S.Label>
  );
};
