import styled from "styled-components";
import { DialogPropsI } from "./types";

export const S = {
  Dialog: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: ${(props: DialogPropsI) => (props.open ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
  `,
};
