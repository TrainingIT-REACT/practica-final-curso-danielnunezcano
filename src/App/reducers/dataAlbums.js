import { getAlbums } from "../actions/data";

const initialState = {
  loading: false,
  albums: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getAlbums.pending):
      return {
        ...state,
        loading: true,
        error: false
      }
    case String(getAlbums.fulfilled):
      return {
        ...state,
        loading: false,
        error: false,
        albums: action.payload
      }
    case String(getAlbums.rejected):
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
