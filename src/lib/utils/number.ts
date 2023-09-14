export const formatPercentage = (value: string | number) => {
  try {
    if (!value) return "0%";

    const stringValue = String(value);

    const percentageResult = parseFloat(
      stringValue.substring(0, stringValue.indexOf(".") + 3)
    );

    return `${percentageResult.toString().replace(".", ",")}%`;
  } catch (error) {
    console.log("Format Percentage Error" + error);
    return "0%";
  }
};
