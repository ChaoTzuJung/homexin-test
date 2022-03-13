import styled, { css } from "styled-components";
import { CardPropsI } from "./types";

export const S = {
  Card: styled.div`
    width: 100%;
    height: auto;
    padding: 8px;
    color: var(--black);
    background: ${(props) => (props.color ? props.color : "var(--white)")};
    font-weight: 900;
    font-size: var(--paragraph);
    border-radius: 15px;
    ${(props: CardPropsI) =>
      props.type === "border" &&
      css`
        border: 1px solid var(--darkGrey);
      `}
    ${(props: CardPropsI) =>
      props.type === "shadow" &&
      css`
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `}
  `,
};
