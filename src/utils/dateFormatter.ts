type DateInput = string | number | Date;

export function toLocalDateShort(date: DateInput): string {
  return `${new Date(date)
    .toLocaleDateString("fa-IR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .split(" ")
    .reverse()
    .join(" ")}
    ، ساعت 
    ${new Date(date).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`;
}

export function toLocalDateShort2(date: DateInput): string {
  return `${new Date(date)
    .toLocaleDateString("fa-IR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .split(" ")
    .join(" ")}`;
}
