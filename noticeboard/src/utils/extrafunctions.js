export const dateFormat = (dt) => {
  const rawDate = new Date(dt);
  const time = rawDate.toLocaleTimeString();
  const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const date = dateFormatter.format(rawDate);
  return { date, time };
};
