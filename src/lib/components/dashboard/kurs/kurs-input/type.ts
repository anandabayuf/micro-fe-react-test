export interface KursInputProps {
  value: string;
  inputValue?: number | string;
  disabled?: boolean;
  exclude?: string;
  onSetValue?: (value: string) => void;
  onSetCurrency?: (value: string) => void;
  inputClassName?: string;
  decimalScale?: number;
  type?: string;
}
