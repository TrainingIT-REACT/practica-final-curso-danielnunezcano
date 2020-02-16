import React from 'react'
import { connect } from 'react-redux'
import SearchAlbum from './SearchAlbum'
import { getAlbums, getSongs } from '../actions/data'

import '../App.css'

class Album extends React.Component {
  componentDidMount () {
    this.props.getSongs()
    this.props.getAlbums()
  }

  renderAlbums () {
    const { dataAlbums, dataSong, match } = this.props
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
              />
            </div>
          </div>
        </div>
      )
    }
  }

  render () {
    return <div>{this.renderAlbums()}</div>
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getSongs: () => dispatch(getSongs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Album)
