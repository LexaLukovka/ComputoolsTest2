import { MINUS, PLUS } from './action'

const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case PLUS:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case MINUS:
      return {
        ...state,
        counter: state.counter - 1,
      }

    default:
      return state
  }
}

export default counterReducer
