import { getSongs } from "../actions/data";

const initialState = {
  loading: false,
  songs: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getSongs.pending):
      return {
        ...state,
        loading: true,
        error: false
      }
    case String(getSongs.fulfilled):
      return {
        ...state,
        loading: false,
        error: false,
        songs: action.payload
      }
    case String(getSongs.rejected):
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducer
