import React, { Dispatch, SetStateAction } from 'react';
import ReactSelect, { ActionMeta } from 'react-select';
import { UISelectVContainer, selectStyles } from './style';
import { UIHelperText, UILabel } from '../styles';

type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type NextDigit = [1, 2, 3, 4, 5, 6, 7, 'STOP'];
type Inc<T> = T extends Digit ? NextDigit[T] : 'STOP';
type StringOrNumKeys<T> = keyof T & (string | number);
type NestedPath<TValue, Prefix extends string, TDepth> = TValue extends object
  ? `${Prefix}.${TDepth extends 'STOP' ? any : NestedFieldPaths<TValue, TDepth>}`
  : never;
type NestedFieldPaths<TData = any, TDepth = 0> = {
  [TKey in StringOrNumKeys<TData>]:
    | `${TKey}`
    | NestedPath<TData[TKey], `${TKey}`, Inc<TDepth>>;
}[StringOrNumKeys<TData>];

// type NestedKeyOf<ObjectType extends object> = {
//   [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
//     ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
//     : `${Key}`;
// }[keyof ObjectType & (string | number)];

interface SelectProps<T extends object, D extends number> {
  values: T[];
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  onClearValue?: () => void;
  fields: NestedFieldPaths<T, D>[];
  required: boolean;
  isLoading?: boolean;
  placeholder: string;
  label: string;
  error: string;
  hasError: boolean;
}

const Select = <T extends object, D extends number>({
  values,
  value,
  setValue,
  onClearValue,
  fields,
  required,
  isLoading,
  placeholder,
  label,
  error,
  hasError,
}: SelectProps<T, D>) => {
  function getNestedValue<T>(
    obj: T | null,
    deep: number,
    value: string[],
  ): string {
    if (deep === 0) {
      return obj?.[value[0] as keyof T] as string;
    }

    const obj1 = obj?.[value[0] as keyof T];
    const value1 = value.slice(1);

    return getNestedValue(obj1, deep - 1, value1);
  }

  const concatObjectValues = (
    object: T | null,
    objectFields: NestedFieldPaths<T, D>[],
  ) => {
    let fieldValue = '';

    objectFields.map((field: string) => {
      const nestedField = field.split('.');
      fieldValue +=
        ' ' + getNestedValue<T>(object, nestedField.length - 1, nestedField);
    });

    return fieldValue;
  };

  return (
    <UISelectVContainer>
      <UILabel id={label} $required={required} $error={hasError}>
        {label}
      </UILabel>
      <ReactSelect
        options={values.map((value, index) => ({
          ...value,
          value: index,
          label: concatObjectValues(value, fields),
        }))}
        value={value}
        onChange={(newValue: T, actionMeta: ActionMeta<T>) => {
          setValue(newValue);

          if (
            actionMeta.action === 'clear' ||
            actionMeta.action === 'select-option'
          ) {
            onClearValue?.();
          }
        }}
        closeMenuOnSelect
        isLoading={isLoading}
        placeholder={placeholder}
        required={required}
        isSearchable={false}
        isClearable
        styles={selectStyles(hasError)}
        isOptionSelected={(option, selectedValue) => option === selectedValue}
        aria-labelledby={label}
        aria-errormessage={`error-${label}`}
      />
      <UIHelperText id={`error-${label}`}>{error}</UIHelperText>
    </UISelectVContainer>
  );
};

export default Select;
