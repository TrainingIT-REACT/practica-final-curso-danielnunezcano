import React from 'react'
import { albums } from '../Data/objects'
import { Link } from 'react-router-dom'
import '../App.css'

const ListAlbums = () => {
  return (
    <div className='center'>
      <div className='content'>
        <ul>
          {albums.map(album => {
            const url = `/album/${album.id}`
            return (
              <div>
                <Link to={url}>
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
        <div className='clearLeft'></div>
      </div>
    </div>
  )
}
export default ListAlbums
