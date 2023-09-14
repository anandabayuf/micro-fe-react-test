import { KeyedMutator } from "swr";
import { TKursListApi } from "../types";

export type TCurrencies = {
  current: string;
  target: string;
  inputValue?: number;
};

export interface KursConversionProps {
  mutate?: KeyedMutator<TKursListApi>;
}
