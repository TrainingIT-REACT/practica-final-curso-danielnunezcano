import React from 'react'
import { slice } from 'ramda'
import { connect } from 'react-redux'
import { getSongs } from '../actions/data'
import { addSong } from '../actions/playerActions'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

import '../App.css'

const aleatorio = data => slice(0,10,data.sort(function () {return Math.random() - 0.5}));

class ListRecomended extends React.Component {
  componentDidMount () {
    this.props.getSongs()
  }

  

  renderListAlbums () {
    const { dataSong } = this.props

    if (dataSong.loading) {
      return <p>Cargando...</p>
    } else if (dataSong.error) {
      return <p>Hubo un error al obtener los articulos</p>
    } else {
      return (

        <div>
          <Sidebar />
          <div className='center'>
            <div className='content'>
              <div className='song'>
              <div key={1}>
          <img
              src="/images/cover.jpg"
              alt="Albúm Recomendado"
              height='100%'
              width='100%'
            />
          {aleatorio(dataSong.songs).map(p => (
            <div>
            <Link to={`/song/${p.id}`}  onClick={() => addSong(p)}>{p.name}</Link>
            </div>
          ))}
        </div>
              </div>
            </div>
          </div>
        </div>
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
  getSongs: () => dispatch(getSongs()),
  addSong: song => dispatch(addSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListRecomended)
