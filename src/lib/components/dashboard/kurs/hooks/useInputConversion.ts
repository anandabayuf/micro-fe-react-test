import { useKursStore } from "lib/store/kurs";
import React from "react";
import shallow from "zustand/shallow";
import { TCurrencies } from "../kurs-conversion/types";
import { Action, ACTION_TYPES, InputConversionState } from "../types";
import { parseDate } from "../utils";

const initialState: InputConversionState = {
  inputValue: 1,
  exchangeResult: 0,
  currencies: {},
  updatedDate: null,
};

function reducer(
  state: InputConversionState,
  action: Action
): InputConversionState {
  switch (action.type) {
    case ACTION_TYPES.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case ACTION_TYPES.SET_EXCHANGE_RESULT:
      return { ...state, exchangeResult: action.payload };
    case ACTION_TYPES.SET_CURRENCIES:
      return {
        ...state,
        currencies: { ...state.currencies, ...action.payload },
      };
    case ACTION_TYPES.SWAP_CURRENCIES:
      return {
        ...state,
        ...action.payload,
        currencies: {
          current: state.currencies.target,
          target: state.currencies.current,
        },
      };
    case ACTION_TYPES.UPDATE_DATE:
      return {
        ...state,
        updatedDate: action.payload,
      };
    default:
      return state;
  }
}

const useInputConversion = (initialValue: TCurrencies) => {
  const { listExchangeRate } = useKursStore((state) => state, shallow);
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    currencies: initialValue,
  });

  const onSetCurrencies = React.useCallback(
    (newCurrencies: { [key: string]: string }) => {
      dispatch({
        type: ACTION_TYPES.SET_CURRENCIES,
        payload: { ...newCurrencies },
      });
    },
    [dispatch]
  );

  const swapCurrencies = () => {
    const swappedCurrencies = {
      current: state.currencies.target,
      target: state.currencies.current,
    };

    dispatch({
      type: ACTION_TYPES.SWAP_CURRENCIES,
    });
    calculate(swappedCurrencies);
  };

  const setInputValue = (value: number) =>
    dispatch({ type: ACTION_TYPES.SET_INPUT_VALUE, payload: value });

  const calculate = (
    currenciesArgs?: TCurrencies | { [key: string]: string }
  ) => {
    if (!currenciesArgs) {
      currenciesArgs = state.currencies;
    }

    const inputValue = currenciesArgs.inputValue || state.inputValue;

    // any IDR conversion
    const IDRConversion = (
      currenciesArgs: TCurrencies | { [key: string]: string },
      inputValue: number
    ) => {
      const currency = listExchangeRate.find((exchangeRate) => {
        if (currenciesArgs.current === "IDR") {
          return exchangeRate.currency === currenciesArgs.target;
        }

        if (currenciesArgs.target === "IDR") {
          return exchangeRate.currency === currenciesArgs.current;
        }
      });

      if (currenciesArgs.current === "IDR") {
        return dispatch({
          type: ACTION_TYPES.SET_EXCHANGE_RESULT,
          payload: inputValue / (currency?.sellRate || -1),
        });
      }

      return dispatch({
        type: ACTION_TYPES.SET_EXCHANGE_RESULT,
        payload: inputValue * (currency?.buyRate || -1),
      });
    };

    if (currenciesArgs.current === "IDR" || currenciesArgs.target === "IDR") {
      return IDRConversion(currenciesArgs, Number(inputValue));
    }

    // no IDR conversion
    const findForexValue = (currency: string) => {
      return (
        listExchangeRate.find(
          (exchangeRate) => exchangeRate.currency === currency
        )?.buyRate ||
        initialValue.inputValue ||
        0
      );
    };
    const convertedCurrent = findForexValue(currenciesArgs.current);
    const convertedTarget = findForexValue(currenciesArgs.target);

    return dispatch({
      type: ACTION_TYPES.SET_EXCHANGE_RESULT,
      payload: Number(inputValue) * (convertedCurrent / convertedTarget),
    });
  };

  React.useEffect(() => {
    if (listExchangeRate.length <= 0) return;

    let targetDateKey = state.currencies.target;
    const findExchangeRateUpdatedDate = (currency: string) => {
      const foundExchangeRate = listExchangeRate.find(
        (exchangeRate) => exchangeRate.currency === currency
      )?.updatedDate;
      return foundExchangeRate ? parseDate(foundExchangeRate) : null;
    };

    if (state.currencies.current === "IDR") {
      targetDateKey = state.currencies.target;
    }

    if (state.currencies.target === "IDR") {
      targetDateKey = state.currencies.current;
    }

    dispatch({
      type: ACTION_TYPES.UPDATE_DATE,
      payload: findExchangeRateUpdatedDate(targetDateKey),
    });
  }, [listExchangeRate, state.currencies]);

  return {
    currencies: state.currencies,
    updatedDate: state.updatedDate,
    exchangeResult: state.exchangeResult,
    inputValue: state.inputValue,
    isAvailable: listExchangeRate.length > 0 || false,
    setInputValue,
    onSetCurrencies,
    swapCurrencies,
    calculate,
  };
};

export default useInputConversion;
