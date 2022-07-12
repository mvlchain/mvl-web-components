import { Dispatch, SetStateAction } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { BigNumberInputProps as BigNumberInputProps$1 } from 'big-number-input';

interface BigNumberInputRef {
    setValue: Dispatch<SetStateAction<string>>;
}
interface BigNumberInputProps extends Omit<BigNumberInputProps$1, 'value' | 'onChange' | 'decimals'> {
    value: BigNumber;
    onChange?: (value: BigNumber) => void;
    decimals?: number;
    inputRef?: (ref: BigNumberInputRef) => void;
}
declare function BigNumberInput({ value, onChange, inputRef, ...props }: BigNumberInputProps): JSX.Element;

export { BigNumberInput };
