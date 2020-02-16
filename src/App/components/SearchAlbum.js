import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { albums, songs } from '../Data/objects'
import { addAlbum } from '../actions/playerActions'

const SearchAlbum = ({ id, addAlbum }) => {
  return albums
    .filter(album => Number(album.id) === Number(id))
    .map(album => {
      return (
        addAlbum(album) && (
          <div>
            <img
              src={album.cover}
              alt={album.name}
              height='100%'
              width='100%'
            />
            <div>
              {album.name} - {album.artist}
            </div>
            {songs
              .filter(song => Number(song.album_id) === Number(album.id))
              .map(song => {
                return (
                  <div>
                    <Link to={`/song/${song.id}`}>{song.name}</Link>
                  </div>
                )
              })}
          </div>
        )
      )
    })
}

const mapDispatchToProps = dispatch => {
  return {
    addAlbum: album => dispatch(addAlbum(album))
  }
}

export default connect(() => ({}), mapDispatchToProps)(SearchAlbum)
