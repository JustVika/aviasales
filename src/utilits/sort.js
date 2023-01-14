const sort = (button, tickets) => {
  const newTickets = [...tickets]
  switch (button) {
    case 'sortCheap':
      newTickets.sort((a, b) => (a.price > b.price ? 1 : -1))
      return newTickets
    case 'sortQuickly':
      newTickets.sort((a, b) =>
        a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
      )
      return newTickets
    case 'sortOptimal':
      newTickets.sort((a, b) =>
        a.price + a.segments[0].duration + a.segments[1].duration >
        b.price + b.segments[0].duration + b.segments[1].duration
          ? 1
          : -1
      )
      return newTickets
    default:
      return newTickets
  }
}
export default sort
