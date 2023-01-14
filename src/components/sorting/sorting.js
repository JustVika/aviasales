import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ChangeButton } from '../../actions'

import classes from './sorting.module.scss'

function TicketSorting(props) {
  const { nameButton, ChangeButton: change } = props

  const nameSortButtons = [
    { label: 'sortCheap', ruLabel: 'Самый дешевый' },
    { label: 'sortQuickly', ruLabel: 'Самый быстрый' },
    { label: 'sortOptimal', ruLabel: '  Оптимальный' },
  ]

  const onChecked = (event) => {
    change(event.target.id)
  }
  const listSortButtons = nameSortButtons.map((buttonName) => {
    return (
      <div className={classes.sorting__body} key={buttonName.label}>
        <input
          id={buttonName.label}
          className={classes.sorting__input}
          type="radio"
          name="sorting__input"
          onChange={onChecked}
          checked={buttonName.label === nameButton}
        />
        <label className={classes.sorting__label} htmlFor={buttonName.label}>
          {buttonName.ruLabel}
        </label>
      </div>
    )
  })
  return <div className={classes.sorting}> {listSortButtons}</div>
}

const mapStateToProps = ({ nameButton }) => {
  return {
    nameButton,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ChangeButton }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketSorting)
