import React from 'react'
import { Link } from 'react-router-dom'

const PaintAlbums = (props) => {
  return (
    <ul>
      {props.dataAlbums.albums.map(album => {
        const url = `/album/${album.id}`
        return (
          <div>
            <Link to={url} onClick={() => props.addAlbum(album)}>
              <div className='album'>
                <img
                  src={album.cover}
                  alt={album.name}
                  height='100%'
                  width='100%'
                />
                {album.name} - {album.artist}
              </div>{' '}
            </Link>
          </div>
        )
      })}
    </ul>
  )
}

export default PaintAlbums;
