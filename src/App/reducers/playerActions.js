import { ADD_SONG, ADD_ALBUM, ID_ALBUM } from '../actions/types'

const initialState = {
  albums: [],
  songs: [],
  idAlbum: ""
}

const playerActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return {
        ...state,
        albums: [...state.albums, { album: action.album }]
      }
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, { song: action.song }]
      }
    case ID_ALBUM:
        return {
          ...state,
          idAlbum: action.idAlbum
        }
    default:
      return state
  }
}

export default playerActions
