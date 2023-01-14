const arrayFilter = (filter, arrayTickets) => {
  let filteredArray = [...arrayTickets]
  const { checkedALL, checkedWithout, checkedOne, checkedTwo, checkedThree } = filter
  if (checkedALL) return filteredArray
  filteredArray = filteredArray.filter((ticket) => {
    const ticket1 = ticket.segments[0].stops.length
    const ticket2 = ticket.segments[1].stops.length
    if (checkedWithout && ticket1 === 0 && ticket2 === 0) return true

    if (checkedOne && ((ticket1 === 1 && ticket2 < 2) || (ticket2 === 1 && ticket1 < 2))) return true

    if (checkedTwo && ((ticket1 === 2 && ticket2 < 3) || (ticket2 === 2 && ticket1 < 3))) {
      return true
    }
    if (checkedThree && ((ticket1 === 3 && ticket2 < 4) || (ticket2 === 3 && ticket1 < 4))) {
      return true
    }
    return false
  })
  return filteredArray
}
export default arrayFilter
