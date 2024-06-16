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

export const UIH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  min-height: 28px;
  width: 100%;
  color: rgb(48, 64, 214);
  text-align: center;
`;

export const UIP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  min-height: 18px;
  margin-top: 16px;
  width: 100%;
  color: rgb(12, 30, 41);
  text-align: center;
`;

export const UILinkSpan = styled.span`
  color: rgb(48, 64, 214);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const UITd = styled.div`
  padding: 8px 16px;
  text-align: center;
  border-bottom: 1px solid rgb(12, 30, 41);
`;

export const UITdFirst = styled.div`
  padding: 8px 16px;
  text-align: center;
  border-bottom: 1px solid rgb(12, 30, 41);
  border-left: 1px solid rgb(12, 30, 41);
`;

export const UITrLastTdFirst = styled.div`
  padding: 8px 16px;
  text-align: center;
  border-bottom: 1px solid rgb(12, 30, 41);
  border-left: 1px solid rgb(12, 30, 41);
  border-bottom-left-radius: 6px;
`;

export const UITdLast = styled.div`
  padding: 8px 16px;
  text-align: center;
  border-bottom: 1px solid rgb(12, 30, 41);
  border-right: 1px solid rgb(12, 30, 41);
`;

export const UITrLastTdLast = styled.div`
  padding: 8px 16px;
  text-align: center;
  border-bottom: 1px solid rgb(12, 30, 41);
  border-right: 1px solid rgb(12, 30, 41);
  border-bottom-right-radius: 6px;
`;

export const UITh = styled.div`
  font-weight: 500;
  padding: 8px 16px;
  border-top: 1px solid rgb(48, 64, 214);
  border-bottom: 1px solid rgb(48, 64, 214);
  background-color: rgba(48, 64, 214, 0.2);
`;

export const UIThFirst = styled.div`
  font-weight: 500;
  padding: 8px 16px;
  text-align: center;
  border-top: 1px solid rgb(48, 64, 214);
  border-bottom: 1px solid rgb(48, 64, 214);
  border-left: 1px solid rgb(48, 64, 214);
  border-top-left-radius: 6px;
  background-color: rgba(48, 64, 214, 0.2);
`;

export const UIThLast = styled.div`
  font-weight: 500;
  padding: 8px 16px;
  text-align: center;
  border-top: 1px solid rgb(48, 64, 214);
  border-bottom: 1px solid rgb(48, 64, 214);
  border-right: 1px solid rgb(48, 64, 214);
  border-top-right-radius: 6px;
  background-color: rgba(48, 64, 214, 0.2);
`;
