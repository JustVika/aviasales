import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Alert, Spin } from 'antd'

import TicketSorting from '../sorting/sorting'
import FilterApp from '../filter-app/filter-app'
import TicketList from '../tickets-list/tickets-list'
import ButtonMoreTickets from '../btn-more-tickets/btn-more-tickets'
import isEmptyFilter from '../../utilits/isEmptyFilter'
import logo from '../../image/logo.png'
import { createSession } from '../../actions'

import classes from './app.module.scss'

function App(props) {
  const { createSession: create, filter, error, load } = props

  useEffect(() => {
    create()
  }, [])
  const content = isEmptyFilter(filter) ? (
    <Alert message="<= Пожалуйста выберите фильтр" type="info" />
  ) : (
    <>
      <TicketList />
      <ButtonMoreTickets />
    </>
  )
  const isLoading = load ? <Spin className={classes.loading} /> : null
  const isError = error ? <Alert message="К сожаление что-то пошло не так" type="error" /> : content
  return (
    <div className={classes['app-wrapper']}>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
      </header>
      <main className={classes.main}>
        <FilterApp />
        <div className={classes.main__content}>
          <TicketSorting />
          {isLoading}
          {isError}
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({ error, load, filter }) => {
  return {
    load,
    error,
    filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createSession }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
