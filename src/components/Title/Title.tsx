import { S } from "./styled";

export interface TitlePropsI {
  children: React.ReactNode;
}

export const Title = ({ children }: TitlePropsI): JSX.Element => (
  <S.Title>{children}</S.Title>
);
