import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { reverse } from 'ramda'
import { Link } from 'react-router-dom'
import '../App.css'

const Sidebar = ({ listSongs, listAlbums }) => (
  <div className='lateralSidebar'>
    <Link to='/'>Últimos Albums</Link>
    <ul key='1'>
      {listAlbums &&
        reverse(listAlbums).map(album => {
          return album.album && <dt key={album.album.id}>{album.album.name}</dt>
        })}
    </ul>
    <div>Últimas canciones</div>
    <ul key='2'>
      {listSongs &&
        reverse(listSongs).map(song => {
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
