import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateShowTickets } from '../../actions'

import classes from './btn-more-tickets.module.scss'

function ButtonMoreTickets(props) {
  const moreTickets = () => {
    const { showTickets, updateShowTickets: update } = props
    update(showTickets + 5)
  }
  return (
    <button type="button" className={classes['show-more']} onClick={moreTickets}>
      Показать еще 5 билетов!
    </button>
  )
}

const mapStateToProps = ({ showTickets }) => {
  return {
    showTickets,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateShowTickets }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMoreTickets)
