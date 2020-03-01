import {
  ADD_SONG,
  ADD_ALBUM,
  ALL_SONGS,
  ALL_ALBUM_LOADING,
  ALL_ALBUM_LOADED,
  ALL_ALBUM_ERROR,
  PLAYER_SONGS
} from './types'

const allAlbumLoading = () => ({
  type: ALL_ALBUM_LOADING
})

const allAlbumLoaded = () => ({
  type: ALL_ALBUM_LOADED
})

const allAlbumError = albums => ({
  type: ALL_ALBUM_ERROR,
  albums
})

export const allAlbums = () => async dispatch => {
  dispatch(allAlbumLoading)
  try {
    const res = await fetch('/albums')
    const json = res.json()
    dispatch(allAlbumLoaded(json))
  } catch (err) {
    dispatch(allAlbumError())
  }
}

export const addAlbum = album => ({
  type: ADD_ALBUM,
  album
})

export const addSong = song => ({
  type: ADD_SONG,
  song
})

export const allSongs = songs => ({
  type: ALL_SONGS,
  songs
})

export const playerSong = songs => ({
  type: PLAYER_SONGS,
  songs
})
