import React from 'react'
import { connect } from 'react-redux'
import { addSong } from '../actions/playerActions'

const SearchSong = ({ addSong, albums, songs, id }) => {
  return songs
    .filter(song => Number(song.id) === Number(id))
    .map(song => {
      return (
        (() => addSong(song)) &&
        albums
          .filter(album => Number(album.id) === Number(song.album_id))
          .map(album => {
            return (
              <div>
                <img
                  src={album.cover}
                  alt={song.name}
                  height='100%'
                  width='100%'
                />
                <div>{song.name}</div>
                <div>
                  {album.name} - {album.artist}
                </div>
              </div>
            )
          })
      )
    })
}

const mapDispatchToProps = dispatch => {
  return {
    addSong: song => dispatch(addSong(song))
  }
}

export default connect(() => ({}), mapDispatchToProps)(SearchSong)
