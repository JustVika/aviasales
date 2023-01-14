const formatPrice = (price) => {
  return `${String(price).slice(0, 2)} ${String(price).slice(2)} P`
}
const timeFormatting = (time) => (time < 10 ? `0${time}` : time)

const travelTime = (date, duration) => {
  const hours = timeFormatting(duration > 1439 ? Math.trunc(duration / 60) + 24 : Math.trunc(duration / 60))
  const minuts = timeFormatting(duration % 60)
  const timeArrival = `${hours}ч ${minuts}м`
  return timeArrival
}
const intrevalTime = (date, duration) => {
  const timeDeparture = `${timeFormatting(date.getHours())}:${timeFormatting(date.getMinutes())}`
  const dateArrival = new Date(date.getTime())

  dateArrival.setMinutes(dateArrival.getMinutes() + duration)

  const timeArrival = `${timeFormatting(dateArrival.getHours())}:${timeFormatting(dateArrival.getMinutes())}`
  return `${timeDeparture} - ${timeArrival}`
}

export { formatPrice, intrevalTime, travelTime }
