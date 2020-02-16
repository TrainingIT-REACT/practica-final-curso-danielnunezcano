import React from 'react'
import { connect } from 'react-redux'
import { getAlbums, getSongs } from '../actions/data'
import SearchSong from './SearchSong'

class Song extends React.Component {
  componentDidMount () {
    this.props.getSongs()
    this.props.getAlbums()
  }

  renderSongs () {
    const { dataAlbums, dataSong, match } = this.props

    if (dataSong.loading || dataAlbums.loading) {
      return <p>Cargando...</p>
    } else if (dataSong.error || dataAlbums.error) {
      return <p>Hubo un error al obtener los articulos</p>
    } else {
      return (
        <div className='center'>
          <div className='content'>
            <div className='song'>
              <SearchSong
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
    return <div>{this.renderSongs()}</div>
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    getAlbums: () => dispatch(getAlbums()),
    getSongs: () => dispatch(getSongs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song)
