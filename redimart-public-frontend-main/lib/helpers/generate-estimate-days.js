import { humanReadableDate } from "./human-readable-date";

export const generateEstimateDays = (prevDate) => {
  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const estimatedDate = addDays(prevDate, 7);
  return humanReadableDate(estimatedDate);
};
