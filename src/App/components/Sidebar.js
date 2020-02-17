import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'

const Sidebar = ({ listSongs, listAlbums }) => (
  <div className='lateralSidebar'>
    <Link to='/'>Albums</Link>
    <ul>
      {listAlbums &&
        listAlbums.map(album => {
          return (
            album.album && (
              <Fragment key={album.album.id}>
                <dt key={album.album.id}>{album.album.artist}</dt>
              </Fragment>
            )
          )
        })}
    </ul>
    <div>Últimas canciones</div>
    <ul>
      {listSongs &&
        listSongs.map(song => {
          return (
            <Fragment key={song.song.id}>
              <dt key={song.song.id}>{song.song.name}</dt>
            </Fragment>
          )
        })}
    </ul>
  </div>
)

const mapStateToProps = state => {
  return {
    listSongs: state.playerActions.songs,
    listAlbums: state.playerActions.albums
  }
}

export default connect(mapStateToProps)(Sidebar)
