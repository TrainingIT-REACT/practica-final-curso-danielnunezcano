import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from "recompose";
import { getAlbums, getSongs } from '../actions/data'
import SearchSong from './SearchSong'

const injectLifecycle = lifecycle({
  componentDidMount () {
    this.props.getSongs()
    this.props.getAlbums()
  }
})

const Song = () => {
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

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    getAlbums: () => dispatch(getAlbums()),
    getSongs: () => dispatch(getSongs())
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),injectLifecycle)(Song)
