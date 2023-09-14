import { formattedMessage } from "./i18n";

export const parseAccountType = (accountType: string | number) => {
  const message: Record<string, string | undefined> = {
    CA: formattedMessage("CurrentAccount", "Current Account"),
    SA: formattedMessage("SavingAccount", "Saving Account"),
    D: formattedMessage("DepositAccount", "Deposit Account"),
    K: formattedMessage("KustodialAccount", "Custodian Account"),
  };

  if (
    typeof accountType === "string" &&
    ["CA", "SA", "D", "K"].includes(accountType)
  ) {
    return message[accountType];
  }

  switch (String(accountType)?.at(0)) {
    case "1":
      return message["CA"];

    case "2":
      return message["SA"];

    case "3":
      return message["D"];

    case "4":
      return message["K"];

    default:
      return String(accountType);
  }
};
