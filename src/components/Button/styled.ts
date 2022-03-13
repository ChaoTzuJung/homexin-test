import styled, { css } from "styled-components";
import { ButtonPropsI } from "./types";

export const S = {
  Button: styled.button`
    min-width: 120px;
    min-height: 46px;
    color: var(--white);
    background: var(--green);
    text-align: center;
    font-weight: 600;
    font-size: var(--paragraph);
    border-radius: 5px;
    border: none;
    cursor: pointer;

    ${(props: ButtonPropsI) =>
      props.variant === "shadow" &&
      css`
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `}

    ${(props: ButtonPropsI) =>
      props.variant === "outlined" &&
      css`
        color: var(--black);
        font-size: var(--small);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: var(--lightGrey);
        border: 2px solid rgba(255, 172, 48, 0.5);
        border-radius: 50px;
      `}

    ${(props: ButtonPropsI) =>
      props.variant === "text" &&
      css`
        display: inline;
        background: transparent;
        border: none;
        color: var(--black);
        font-size: var(--small);
      `}
  `,
};
