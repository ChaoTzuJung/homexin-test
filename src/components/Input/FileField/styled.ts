import styled from "styled-components";

export const S = {
  FileField: styled.div`
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

    & > .unit {
      margin-left: 16px;
    }
  `,
  UploadPanel: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 184px;
    background: var(--lightGrey);
    border: 1px dashed var(--mediumGrey);
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  `,
  PreviewImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
