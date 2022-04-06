import styled from "styled-components";

export const S = {
  TextField: styled.div`
    display: flex;
    align-items: center;
    position: relative;

    & > .errorMessage {
      position: absolute;
      top: 24px;
      left: 160px;
      color: var(--red);
      font-size: 15px;
    }
  `,
};
