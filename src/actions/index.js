import ServerTickets from '../services/server'
import sort from '../utilits/sort'
import arrayFilter from '../utilits/filter'
import toggleFilter from '../utilits/toggleFilter'

const server = new ServerTickets()

const ticketsUpdate = (tickets) => {
  return {
    type: 'TICKETS_UPDATE',
    payload: tickets,
  }
}

const updateTicketsFiltered = (tickets) => {
  return {
    type: 'UPDATE_TICKETS_FILTERED',
    payload: tickets,
  }
}

const changeLoad = (newLoad) => {
  return {
    type: 'CHANGE_LOAD',
    payload: newLoad,
  }
}

const changeError = (isError) => {
  return {
    type: 'CHANGE_ERROR',
    payload: isError,
  }
}

const changeNameButton = (nameButton) => {
  return {
    type: 'CHANGE_NAME_BUTTON',
    payload: nameButton,
  }
}

const updateFilter = (newFilter) => {
  return {
    type: 'UPDATE_FILTER',
    payload: newFilter,
  }
}

const updateShowTickets = (newCount) => {
  return {
    type: 'UPDATE_SHOW_TICKETS',
    payload: newCount,
  }
}

const createSession = () => {
  return async (dispatch, getState) => {
    try {
      await server.createSession()

      let isAllTickets = false
      let tickets = []

      while (!isAllTickets) {
        const body = await server.getTickets()
        const { nameButton, filter } = getState()
        if (body.tickets) {
          tickets = [...tickets, ...body.tickets]
          dispatch(ticketsUpdate(tickets))
          const newTickets = arrayFilter(filter, sort(nameButton, tickets))
          dispatch(updateTicketsFiltered(newTickets))
        }
        isAllTickets = body.stop
      }
      dispatch(changeLoad(false))
    } catch (err) {
      dispatch(changeLoad(false))
      dispatch(changeError(true))
    }
  }
}

const changeFilter = (nameFilter) => {
  return (dispatch, getState) => {
    const { filter, tickets } = getState()
    const newFilter = toggleFilter(filter, nameFilter)
    dispatch(updateFilter(newFilter))
    dispatch(updateTicketsFiltered(arrayFilter(newFilter, tickets)))
  }
}

const ChangeButton = (button) => {
  return (dispatch, getState) => {
    const { filtredTickets, tickets } = getState()
    dispatch(changeNameButton(button))
    dispatch(updateTicketsFiltered(sort(button, filtredTickets)))
    dispatch(ticketsUpdate(sort(button, tickets)))
  }
}

export { ticketsUpdate, changeLoad, ChangeButton, createSession, changeFilter, updateShowTickets }
