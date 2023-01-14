const intitialState = {
  tickets: [],
  filtredTickets: [],
  showTickets: 5,
  load: true,
  error: false,
  nameButton: 'sortCheap',
  filter: {
    checkedALL: false,
    checkedWithout: true,
    checkedOne: true,
    checkedTwo: true,
    checkedThree: false,
  },
}

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'TICKETS_UPDATE':
      return {
        ...state,
        tickets: action.payload,
      }
    case 'UPDATE_TICKETS_FILTERED':
      return {
        ...state,
        filtredTickets: action.payload,
      }
    case 'CHANGE_LOAD':
      return {
        ...state,
        load: action.payload,
      }
    case 'CHANGE_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    case 'UPDATE_SHOW_TICKETS':
      return {
        ...state,
        showTickets: action.payload,
      }
    case 'CHANGE_NAME_BUTTON':
      return {
        ...state,
        nameButton: action.payload,
      }

    default:
      return state
  }
}
export default reducer
