import { connect } from 'react-redux'

import Ticket from '../ticket/ticket'

function TicketList(props) {
  const { filtredTickets, showTickets } = props

  const visibleTickets = []

  for (let i = 0; i < filtredTickets.length; i++) {
    if (i === showTickets) break
    const key =
      filtredTickets[i].price +
      filtredTickets[i].carrier +
      filtredTickets[i].segments[0].duration +
      Math.trunc(Math.random() * 10000)
    const ticket = filtredTickets[i]
    visibleTickets.push(
      <div key={key}>
        <Ticket ticket={ticket} />
      </div>
    )
  }
  return <div>{visibleTickets}</div>
}

const mapStateToProps = ({ filtredTickets, showTickets }) => {
  return {
    filtredTickets,
    showTickets,
  }
}

export default connect(mapStateToProps)(TicketList)
