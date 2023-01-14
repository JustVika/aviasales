import { formatPrice, intrevalTime, travelTime } from '../../utilits/additional-format-ticket'

import classes from './ticket.module.scss'

function Ticket(props) {
  const {
    ticket: { segments, price, carrier },
  } = props
  const [ticket1, ticket2] = segments

  const howStops = (stops) => {
    switch (stops.length) {
      case 0:
        return 'без пересадок'
      case 1:
        return '1 пересадка'
      case 2:
        return '2 пересадки'
      case 3:
        return '3 пересадки'
      default:
        return 'Что-то пошло не так'
    }
  }
  return (
    <div className={`${classes.ticket} ${classes.ticket__wrap}`}>
      <div className={classes.ticket__header}>
        <div className={classes.ticket__price}>{formatPrice(price)}</div>
        <img className={classes.ticket__carrier} src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__item}>
          <div className={classes.ticket__tittle}>
            {ticket1.origin}-{ticket1.destination}
          </div>
          <div className={classes.ticket__data}>{intrevalTime(new Date(ticket1.date), ticket1.duration)}</div>
        </div>
        <div className={classes.ticket__item}>
          <div className={classes.ticket__tittle}>В пути</div>
          <div className={classes.ticket__data}>{travelTime(new Date(ticket1.date), ticket1.duration)}</div>
        </div>
        <div className={classes.ticket__item}>
          <div className={classes.ticket__tittle}>{howStops(ticket1.stops)}</div>
          <div className={classes.ticket__data}>{ticket1.stops.join(', ')}</div>
        </div>
      </div>
      <div className={classes.ticket__info}>
        <div className={classes.ticket__item}>
          <div className={classes.ticket__tittle}>
            {ticket2.origin}-{ticket2.destination}
          </div>
          <div className={classes.ticket__data}>{intrevalTime(new Date(ticket2.date), ticket2.duration)}</div>
        </div>
        <div className={classes.ticket__item}>
          <div className={classes.ticket__tittle}>В пути</div>
          <div className={classes.ticket__data}>{travelTime(new Date(ticket2.date), ticket2.duration)}</div>
        </div>
        <div className={classes.ticket__item}>
          <div className={classes.ticket__tittle}>{howStops(ticket2.stops)}</div>
          <div className={classes.ticket__data}>{ticket2.stops.join(', ')}</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
