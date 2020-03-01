import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import SearchAlbum from './SearchAlbum'
import { getAlbums, getSongs } from '../actions/data'
import { addSong } from '../actions/playerActions'

import '../App.css'

class Album extends React.Component {
  componentDidMount () {
    this.props.getSongs()
    this.props.getAlbums()
  }

  renderAlbum () {
    const { dataAlbums, dataSong, match, addSong } = this.props
    if (dataAlbums.loading) {
      return <p>Cargando...</p>
    } else if (dataAlbums.error) {
      return <p>Hubo un error al obtener los articulos</p>
    } else {
      return (
        <div>
          <Sidebar />
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
        </div>
      )
    }
  }
  render () {
    return this.renderAlbum()
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

export default connect(mapStateToProps, mapDispatchToProps)(Album)
