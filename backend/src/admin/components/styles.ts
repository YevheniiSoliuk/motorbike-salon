import styled from 'styled-components';

export const UIVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const UIHContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > :not(:last-child) {
    margin-right: 16px;
  }
`;

export const UILabel = styled.p<{ $required?: boolean; $error?: boolean }>`
  font-size: 12px;
  margin-bottom: 8px;
  width: 100%;
  color: ${(props) => (props.$error ? 'rgb(194, 0, 18)' : 'rgb(12, 30, 41)')};
  &::before {
    content: ${(props) => (props.$required ? '*' : '')};
    color: rgb(48, 64, 214);
    margin-right: 4px;
  }
`;

export const UIHelperText = styled.p`
  font-size: 12px;
  line-height: 24px;
  min-height: 24px;
  margin-top: 4px;
  width: 100%;
  color: rgb(194, 0, 18);
`;
