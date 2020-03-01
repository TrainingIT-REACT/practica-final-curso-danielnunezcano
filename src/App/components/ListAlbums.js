import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { addAlbum } from '../actions/playerActions'
import { getAlbums } from '../actions/data'
import PaintAlbums from './PaintAlbums'
import ListRecomended from './ListRecomended'

import '../App.css'

class ListAlbums extends React.Component {
  componentDidMount () {
    console.log('entra injectLifecycle')
    this.props.getAlbums()
  }

  renderListAlbums () {
    const { dataAlbums } = this.props

    if (dataAlbums.loading) {
      return <p>Cargando...</p>
    } else if (dataAlbums.error) {
      return <p>Hubo un error al obtener los articulos</p>
    } else {
      return (
        dataAlbums.albums && (
          <div>
            <Sidebar />
            <div className='center'>
              <div className='content'>
                <PaintAlbums {...this.props}></PaintAlbums>
                <div className='clearLeft'></div>
              </div>
            </div>
          </div>
        )
      )
    }
  }

  render () {
    return this.renderListAlbums()
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  addAlbum: album => dispatch(addAlbum(album))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbums)
