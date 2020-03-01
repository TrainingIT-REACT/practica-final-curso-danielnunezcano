import { ADD_SONG, ADD_ALBUM, ID_ALBUM, PLAYER_SONGS } from '../actions/types'
import { length, drop } from 'ramda'

const initialState = {
  albums: [],
  songs: [],
  idAlbum: '',
  playerSong: {}
}

const playerActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      const arrayAlbums = drop(1, state.albums)
      return {
        ...state,
        albums:
          length(state.albums) < 5
            ? [...state.albums, { album: action.album }]
            : [...arrayAlbums, { album: action.album }]
      }
    case ADD_SONG:
      const arraySongs = drop(1, state.songs)
      return {
        ...state,
        playerSong: action.song,
        songs:
          length(state.songs) < 5
            ? [...state.songs, { song: action.song }]
            : [...arraySongs, { song: action.song }]
      }
    case PLAYER_SONGS:
      return {
        ...state,
        playerSong: action.playerSong
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
