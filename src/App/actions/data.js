import { ALL_ALBUM_LOADING, ALL_ALBUM_LOADED, ALL_ALBUM_ERROR } from './types'

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
