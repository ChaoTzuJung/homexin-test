import { S } from "./styled";

export interface TitlePropsI {
  /**
   * The subtitle text.
   */
  children: React.ReactNode;
}

/**
 * Title
 * Just a subtitle.
 * @param text The wording.
 */

export const Title = ({ children }: TitlePropsI): JSX.Element => (
  <S.Title>{children}</S.Title>
);
