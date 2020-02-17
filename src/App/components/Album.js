import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from "recompose";
import SearchAlbum from './SearchAlbum'
import { getAlbums, getSongs } from '../actions/data'
import { addSong } from '../actions/playerActions'

import '../App.css'

const injectLifecycle = lifecycle({
  componentDidMount () {
    this.props.getSongs()
    this.props.getAlbums()
  }
})

const Album = () => {
  const { dataAlbums, dataSong, match, addSong } = this.props
    if (dataAlbums.loading) {
      return <p>Cargando...</p>
    } else if (dataAlbums.error) {
      return <p>Hubo un error al obtener los articulos</p>
    } else {
      return (
        <div className='center'>
          <div className='content'>
            <div className='song'>
              <SearchAlbum
                albums={dataAlbums.albums}
                songs={dataSong.songs}
                id={match.params.id}
                addSong={addSong}
              />
            </div>
          </div>
        </div>
      )
    }
}


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getSongs: () => dispatch(getSongs()),
  addSong: song => dispatch(addSong(song))
})

export default compose(connect(mapStateToProps, mapDispatchToProps),injectLifecycle)(Album)

