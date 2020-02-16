import { ALL_ALBUM_LOADING, ALL_ALBUM_LOADED, ALL_ALBUM_ERROR } from './types'

const initialState = {
  loading: false,
  albums: [],
  error: false
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ALBUM_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case ALL_ALBUM_LOADED:
      return {
        ...state,
        loading: false,
        error: false,
        albums: action.albums
      }
    case ALL_ALBUM_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default data
