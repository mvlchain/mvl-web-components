import { Dispatch, SetStateAction } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { BigNumberInputProps as _BigNumberInputProps } from 'big-number-input';
export interface BigNumberInputRef {
    setValue: Dispatch<SetStateAction<string>>;
}
interface BigNumberInputProps extends Omit<_BigNumberInputProps, 'value' | 'onChange' | 'decimals'> {
    value: BigNumber;
    onChange?: (value: BigNumber) => void;
    decimals?: number;
    inputRef?: (ref: BigNumberInputRef) => void;
}
declare function BigNumberInput({ value, onChange, inputRef, ...props }: BigNumberInputProps): JSX.Element;
export default BigNumberInput;
