export interface PercentagesResult {
  DepositAccount: number;
  SavingAccount: number;
  CurrentAccount: number;
  KustodialAccount : number;
  [x: string] : any;
}

export interface DataSets {
  currency: string;
  DepositAccount: Record<string,string | undefined | null>;
  SavingAccount: Record<string,string | undefined | null>;
  CurrentAccount: Record<string,string | undefined | null>;
  KustodialAccount : Record<string,string | undefined | null>;
  [x:string] : any
}