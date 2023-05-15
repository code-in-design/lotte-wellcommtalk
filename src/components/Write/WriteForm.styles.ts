import {TextInputLabel} from '@/components/Sign/Sign.styles';
import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const SWriteForm = styled.form<IsDesktop>`
  display: flex;
  flex-direction: column;

  ${({isDesktop}) =>
    !isDesktop &&
    css`
      margin-top: 86px;
      margin-left: 16px;
      margin-right: 16px;
      margin-bottom: 13px;
    `}
`;

export const WriteTitle = styled.h2`
  white-space: pre-wrap;

  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.4px;
  margin-bottom: 32px;
`;

export const WriteInputLabel = styled(TextInputLabel)`
  margin-bottom: 32px;
`;

export const WriteTextarea = styled.textarea`
  padding: 12px 20px;
  width: 100%;
  height: 120px;

  background: ${colors.WHITE};

  border: 1px solid ${colors.GRAY100};
  border-radius: 8px;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  resize: none;

  &::placeholder {
    color: ${colors.GRAY300};
  }
`;

export const WriteLabel = styled.label`
  margin-bottom: 32px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;

    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
    margin-bottom: 8px;
    p {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.2px;
      color: ${colors.GRAY400};
    }
  }
`;

export const WriteImageContainer = styled.div<IsDesktop>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      grid-template-columns: repeat(3, 1fr);
    `}
`;

export const UploadImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 0.65;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const RemoveWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${colors.BLACK};
`;

export const WriteImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  aspect-ratio: 1 / 0.65;

  background: ${colors.GRAY50};
  border: 1px solid ${colors.GRAY100};
  border-radius: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 83px;
    height: 28px;

    background: ${colors.WHITE};
    border-radius: 100px;

    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: ${colors.GRAY300};
  }
`;

export const WriteFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;
  background: ${colors.MAIN_COLOR};
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: ${colors.WHITE};
`;
