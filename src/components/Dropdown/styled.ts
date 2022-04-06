import styled, { css } from "styled-components";
import { DropdownPropsI } from "./types";

export const S = {
  Dropdown: styled.div`
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
  Input: styled.input`
    background: var(--inputBackgroundColor);
    border: 1.5px solid var(--darkGrey);
    border-radius: 6px;
    // outline: none;

    &::placeholder {
      color: var(--darkGrey);
    }

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;

    &:focus-visible {
      outline: none;
    }
  `,
  Options: styled.div<{ open: boolean }>`
    display: ${(props) => (props.open ? "block" : "none")};
    position: absolute;
    top: 53px;
    left: 0;
    width: 100%;
    min-width: 120px;
    background-color: var(--white);
    border: 1px solid #ced1d5;
    border-radius: 8px;
    z-index: 200;
    overflow: hidden;
  `,
  Option: styled.div`
    padding: 11px 16px;
    font-size: 15px;
    color: #52575c;
    border-bottom: 1px solid var(--lightGrey);
    cursor: pointer;

    &:hover {
      background-color: #f3fff7;
      color: var(--green);
    }
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    color: var(--black);
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 100;
    cursor: ${(props: DropdownPropsI) =>
      props.disabled ? "not-allowed" : "pointer"};
    overflow: hidden;

    & > .placeholder {
      color: var(--darkGrey);
    }
  `,
};
