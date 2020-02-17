import React from 'react'
import { Link } from 'react-router-dom'

const SearchAlbum = ({ id, albums, songs, addSong }) => {
  return albums
    .filter(album => Number(album.id) === Number(id))
    .map(album => {
      return (
          <div key={id}>
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
                    <Link to={`/song/${song.id}`}  onClick={() => addSong(song)}>{song.name}</Link>
                  </div>
                )
              })}
          </div>
        )
    })
}

export default SearchAlbum
