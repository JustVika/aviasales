import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeFilter } from '../../actions'

import classes from './filter-app.module.scss'

function FilterApp(props) {
  const {
    filter: { checkedALL, checkedWithout, checkedOne, checkedTwo, checkedThree },
    changeFilter: change,
  } = props
  const onChecked = (event) => {
    change(event.target.name)
  }

  const nameFilter = [
    { label: 'checkedALL', ruLabel: 'Все', checked: checkedALL },
    {
      label: 'checkedWithout',
      ruLabel: 'Без пересадок',
      checked: checkedWithout,
    },
    { label: 'checkedOne', ruLabel: '1 пересадка', checked: checkedOne },
    { label: 'checkedTwo', ruLabel: '2 пересадки', checked: checkedTwo },
    { label: 'checkedThree', ruLabel: '3 пересадки', checked: checkedThree },
  ]
  const listFilter = nameFilter.map((filterLabel) => {
    return (
      <li className={classes.filter__item} key={filterLabel.label}>
        <label htmlFor={filterLabel.label} className={classes.filter__label}>
          <input
            id={filterLabel.label}
            className={classes.filter__input}
            type="checkbox"
            onChange={onChecked}
            name={filterLabel.label}
            checked={filterLabel.checked}
          />
          <span className={classes['filter__check-box']} />
          {filterLabel.ruLabel}
        </label>
      </li>
    )
  })
  return (
    <div className={classes.filter}>
      <div className={classes.filter__tittle}>количество пересадок</div>
      <ul className={classes.filter__list}> {listFilter}</ul>
    </div>
  )
}

const mapStateToProps = ({ filter }) => {
  return {
    filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp)
