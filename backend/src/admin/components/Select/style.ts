import { StylesConfig } from 'react-select';
import styled from 'styled-components';

export const UISelectVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const selectStyles: (error: boolean) => StylesConfig = (error) => ({
  container: (styles) => ({
    ...styles,
    width: '100%',
    borderColor: 'unset',

    ':focus-visible': {
      outline: 'none',
    },
  }),
  control: (styles) => ({
    ...styles,
    borderColor: '#BBC3CB',
    borderRadius: '2px',
    minHeight: '34px',

    ':hover': {
      borderColor: '#3040D6',
      boxShadow: 'unset',
      outline: 'none',
    },

    ':focus': {
      outline: 'none',
    },
  }),
  indicatorContainer: (styles) => ({
    ...styles,
    padding: '6px',
  }),
  clearIndicator: (styles) => ({
    ...styles,
    padding: '6px',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: '6px',
  }),
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    color: error ? 'rgb(194, 0, 18)' : '#0C1E29',
    backgroundColor: isSelected
      ? '#3040D6'
      : isFocused
        ? 'hsl(0, 0%, 95%)'
        : undefined,

    ':hover': {
      backgroundColor: 'hsl(0, 0%, 95%)',
    },

    ':active': {
      ...styles[':active'],
      backgroundColor: '#3040D6',
    },
  }),
});
