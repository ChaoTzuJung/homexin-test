import styled from "styled-components";

export const S = {
  Input: styled.input`
    background: var(--inputBackgroundColor);
    border: 1.5px solid var(--darkGrey);
    border-radius: 6px;
    outline: none

    &::placeholder {
      color: var(--darkGrey);
    }
  `,
  ErrorMessage: styled.p`
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
  `,
};
