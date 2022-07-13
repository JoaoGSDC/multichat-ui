export const datetimeToTime = (datetime: string | Date) => {
  const date = new Date(datetime);

  return date
    .toLocaleString("en-US", {
      hour12: false,
    })
    .split(", ")[1];
};
