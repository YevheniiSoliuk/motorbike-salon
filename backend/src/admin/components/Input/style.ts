import styled from 'styled-components';

export const UIInput = styled.input<{ $error: boolean }>`
  align-items: center;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 34px;
  outline: 0 !important;
  position: relative;
  transition: all 100ms;
  background-color: hsl(0, 0%, 100%);
  border-color: ${(props) => (props.$error ? 'rgb(194, 0, 18)' : '#BBC3CB')};
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  box-sizing: border-box;
  background: white;
  width: 100%;
  padding: 4px 8px;

  &:hover {
    borderColor: '#3040D6',
    boxShadow: 'unset',
    outline: 'none',
  }

  &:focus {
    border-color: rgb(48, 64, 214);
  }
`;
