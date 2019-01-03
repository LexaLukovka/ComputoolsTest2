import { MINUS, PLUS } from './action'

const initialState = {
  user: null,
  errors: [],
  error: false,
  loading: false,
}

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case PLUS:
      return {
        ...state,
      }

    case MINUS:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default counterReducer
