export const formatNumber = (value: string | undefined) => {
  try {
    if (!value) return "0";
    const formattedValue = Number(value);
    if (typeof formattedValue === "number") {
      return formattedValue.toLocaleString();
    }
  } catch (error) {
    console.log("Format Number Error" + error);
    return "0";
  }
};

export const formatDecimal = (value: string, pattern: RegExp = /\.00/g) => {
  return value.replace(pattern, "");
};

type ParseMoneyConfig = {
  limited?: boolean;
  maxLimit?: number;
  symbol?: boolean;
  symbolCode?: string;
};

export const parseMoney = (
  value: string | number | undefined,
  config?: ParseMoneyConfig
) => {
  if (!value && value?.toString() !== "0") return "0";

  value = String(value);

  const parsedIntoNumberFormat = (value: string, config?: ParseMoneyConfig) => {
    const formattedNumber = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(Number(value) || 0)
      .replaceAll("Rp", "");

    if (config?.limited) {
      return `${formattedNumber.slice(0, -3)}..`;
    }

    return formattedNumber;
  };

  let slicedValue = String(value);
  if (value.length >= (config?.maxLimit || 9) && config?.limited) {
    slicedValue = value.slice(0, 7);
    return parsedIntoNumberFormat(slicedValue, config);
  }

  return parsedIntoNumberFormat(slicedValue);
};
