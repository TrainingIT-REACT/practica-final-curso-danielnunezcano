import { ADD_SONG, ADD_ALBUM } from '../actions/types'

const initialState = {
  albums: [],
  songs: []
}

const playerActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return {
        albums: [...state.albums, { album: action.album }],
        songs: [...state.songs]
      }
    case ADD_SONG:
      return {
        albums: [...state.albums],
        songs: [...state.songs, { song: action.song }]
      }
    default:
      return state
  }
}

export default playerActions
