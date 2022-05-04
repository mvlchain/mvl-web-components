import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BigNumber, parseFixed } from '@ethersproject/bignumber';
import { BigNumberInput as _BigNumberInput, BigNumberInputProps as _BigNumberInputProps } from 'big-number-input';

export interface BigNumberInputRef {
  setValue: Dispatch<SetStateAction<string>>;
}

interface BigNumberInputProps extends Omit<_BigNumberInputProps, 'value' | 'onChange' | 'decimals'> {
  value: BigNumber;
  onChange?: (value: BigNumber) => void;
  decimals?: number;
  inputRef?: (ref: BigNumberInputRef) => void;
}

export function BigNumberInput({ value, onChange, inputRef, ...props }: BigNumberInputProps) {
  const [displayValue, setDisplayValue] = useState(value.toString());

  const handleInputChange = (targetValue: string) => {
    const newValue = targetValue === '' ? '0' : targetValue;
    setDisplayValue(newValue);
    onChange && onChange(parseFixed(newValue));
  };

  useEffect(() => {
    inputRef && inputRef({ setValue: setDisplayValue });
  }, []);

  return <_BigNumberInput {...props} value={displayValue} decimals={props.decimals ?? 18} onChange={handleInputChange} />;
}
