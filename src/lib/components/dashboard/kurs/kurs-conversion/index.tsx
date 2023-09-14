import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import useInputConversion from "../hooks/useInputConversion";
import KursInput from "../kurs-input";
// import { parseMoney } from "lib/utils/currency";
import Icon from "./Icon";
import { KursConversionProps } from "./types";
import "../style.css";
import { useIntl } from "react-intl";

const KursConversion: React.FC<KursConversionProps> = ({ mutate }) => {
  const {
    currencies,
    exchangeResult,
    inputValue,
    updatedDate,
    onSetCurrencies,
    setInputValue,
    swapCurrencies,
    calculate,
  } = useInputConversion({
    current: "USD",
    target: "IDR",
  });
  const intl = useIntl();
  const {
    currencies: currenciesInfo,
    exchangeResult: infoKursResult,
    calculate: calculateInfoKurs,
    isAvailable: kursDataIsAvailable,
    onSetCurrencies: onSetInfoCurrencies,
  } = useInputConversion({
    current: currencies.current,
    target: currencies.target,
  });

  React.useEffect(() => {
    onSetInfoCurrencies({
      current: currencies.current,
      target: currencies.target,
    });
  }, [currencies]);

  React.useEffect(() => {
    if (!kursDataIsAvailable) return;
    calculateInfoKurs();
  }, [currenciesInfo, kursDataIsAvailable]);

  return (
    <>
      <Flex alignItems={"center"}>
        <Box mr={3}>
          <KursInput
            value={currencies.current}
            exclude={currencies.target}
            inputValue={inputValue}
            onSetCurrency={(value) => onSetCurrencies({ current: value })}
            onSetValue={(value) => setInputValue(Number(value))}
            decimalScale={2}
          />
          <KursInput
            disabled
            type="text"
            inputValue={exchangeResult}
            inputClassName="custom-disabled"
            value={currencies.target}
            exclude={currencies.current}
            onSetCurrency={(value) => onSetCurrencies({ target: value })}
            decimalScale={4}
          />
        </Box>
        <Box>
          <Button
            type="button"
            bgColor={"white"}
            border={"2px solid"}
            borderColor={"orange.200"}
            onClick={async () => {
              if (mutate)
                await mutate().finally(() => {
                  swapCurrencies();
                });
            }}
          >
            <Icon />
          </Button>
        </Box>
      </Flex>
      <Box>
        <Button
          onClick={async () => {
            if (mutate)
              await mutate().finally(() => {
                calculate();
              });
          }}
          mt={5}
        >
          {intl.formatMessage({ id: "count" })}
        </Button>
      </Box>
      <Box mt={5}>
        <Flex fontSize={11}>
          {infoKursResult &&
            `${intl.formatMessage({ id: "exchangeRate" })}: ${
              currencies.current
            } 1 = ${currencies.target}
          ${
            infoKursResult?.toLocaleString("id-ID", {
              maximumFractionDigits: 4,
            }) || 0
          } `}

          {updatedDate &&
            `${intl.formatMessage({ id: "lastUpdate" })}: ${updatedDate} WIB.`}
        </Flex>
      </Box>
    </>
  );
};

export default KursConversion;
