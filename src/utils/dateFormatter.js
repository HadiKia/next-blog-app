export function toLocalDateShort(date) {
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