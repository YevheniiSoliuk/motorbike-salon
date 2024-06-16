import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import { UIHelperText, UILabel } from '../styles';
import { UIInput } from './style';
import { UISelectVContainer } from '../Select/style';

type InputProps = {
  name: string;
  type: string;
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  required: boolean;
  label: string;
  placeholder: string;
  error: string;
  hasError: boolean;
  min?: number;
};

const Input = ({
  name,
  type,
  label,
  defaultValue,
  onChange,
  onBlur,
  required,
  placeholder,
  error,
  hasError,
  min,
}: InputProps) => {
  const [value, setValue] = useState(defaultValue ?? '');

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange(e);
  };

  return (
    <UISelectVContainer>
      <UILabel $required={required} $error={hasError}>
        {label}
      </UILabel>
      <UIInput
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
        onBlur={onBlur}
        required={required}
        placeholder={placeholder}
        $error={hasError}
        min={min}
      />
      <UIHelperText>{error}</UIHelperText>
    </UISelectVContainer>
  );
};

export default Input;
