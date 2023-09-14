import { Flex, Input, Select } from "@chakra-ui/react";
import { useKursStore } from "lib/store/kurs";
import React, { ChangeEvent } from "react";
import shallow from "zustand/shallow";
import { KursInputProps } from "./type";
import {
  NumberFormatValues,
  NumericFormat,
  OnValueChange,
} from "react-number-format";

const KursInput: React.FC<KursInputProps> = ({
  disabled,
  inputClassName,
  value,
  inputValue,
  onSetCurrency,
  onSetValue,
  exclude,
  type,
  decimalScale,
}) => {
  const { listExchangeRate } = useKursStore((state) => state, shallow);
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onSetCurrency) onSetCurrency(event.target.value);
  };

  const onInputChange = (value: NumberFormatValues) => {
    if (onSetValue) onSetValue(value.value);
  };

  const filteredCurrencyList = React.useMemo(() => {
    return [
      "IDR",
      ...listExchangeRate.map((exchangeRate) => exchangeRate.currency),
    ].filter((currency) => currency !== exclude);
  }, [listExchangeRate, exclude, value]);

  return (
    <Flex py={2}>
      <Select value={value} onChange={onChange} w={120} mr={3}>
        {filteredCurrencyList.map((currency, index) => {
          return (
            <option value={currency} key={index}>
              {currency}
            </option>
          );
        })}
      </Select>

      <NumericFormat
        value={inputValue}
        allowNegative={false}
        disabled={disabled}
        customInput={Input}
        className={inputClassName}
        onValueChange={onInputChange}
        decimalScale={decimalScale || 0}
        thousandSeparator="."
        decimalSeparator=","
        style={{ maxWidth: "60%" }}
        backgroundColor={disabled ? "#ddeaed" : ""}
        borderColor={"orange.400"}
        isRequired
      />
    </Flex>
  );
};

export default KursInput;
