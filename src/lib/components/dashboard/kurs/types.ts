import { APIResponse } from "lib/services/api/types";
import { TCurrencies } from "./kurs-conversion/types";

export type TKursItem = {
  currency: string;
  sellRate: number;
  buyRate: number;
  midRate: number;
  createdDate: string;
  icon?: string;
  updatedDate: string | null;
};

export type TKursContent = {
  latestUpdatedTime: string;
  listExchangeRate: TKursItem[];
};

export type TKursListApi = APIResponse<TKursContent>;

export type TKursIcon = {
  id: string;
  currency: string;
  icon: string;
};

export type TKursIconsApi = APIResponse<TKursIcon[]>;

export interface Action {
  type: ACTION_TYPES;
  payload?: any;
}

export enum ACTION_TYPES {
  SET_INPUT_VALUE = "SET_INPUT_VALUE",
  SET_EXCHANGE_RESULT = "SET_EXCHANGE_RESULT",
  SET_CURRENCIES = "SET_CURRENCIES",
  SWAP_CURRENCIES = "SWAP_CURRENCIES",
  UPDATE_DATE = "UPDATE_DATE",
}

export interface InputConversionState {
  inputValue: number;
  exchangeResult: number;
  currencies: TCurrencies | { [key: string]: string };
  updatedDate: string | null;
}
