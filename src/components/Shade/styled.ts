import styled from "styled-components";
import { ShadePropsI } from "./types";

export const S = {
  Shade: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    visibility: ${(props: ShadePropsI) => (props.open ? "visible" : "hidden")};
    z-index: 200;
  `,
};
