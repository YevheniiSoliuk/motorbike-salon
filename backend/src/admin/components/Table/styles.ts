import styled from 'styled-components';

export const UITable = styled.table`
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin-bottom: 16px;
`;

export const UITableHead = styled.thead`
  padding: 8px 16px;
  color: rgb(48, 64, 214);
`;

export const UITableBody = styled.tbody`
  padding: 8px 16px;
  color: rgb(12, 30, 41);
`;

export const UINoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 24px 16px;
  background-color: rgba(48, 64, 214, 0.2);
  border: 1px solid rgb(48, 64, 214);
  border-radius: 12px;
`;

export const UITableLabel = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 8px;
  width: 100%;
  color: rgb(137, 138, 154);
`;
