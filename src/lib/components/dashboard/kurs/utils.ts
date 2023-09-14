import { parseISO, format } from "date-fns";

export const parseDate = (date: string) => {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, "dd/MM/yyyy HH:mm:ss");

  return formattedDate;
};
