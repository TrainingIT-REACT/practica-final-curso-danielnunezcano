import React from 'react'
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { addAlbum } from '../actions/playerActions'
import { getAlbums } from "../actions/data";
import PaintAlbums from "./PaintAlbums";

import '../App.css'

const injectLifecycle = lifecycle({
  componentDidMount () {
    this.props.getAlbums()
  }
})

const ListAlbums = () => {
  const { dataAlbums } = this.props;

  if (dataAlbums.loading) {
    return <p>Cargando...</p>;
  } else if (dataAlbums.error) {
    return <p>Hubo un error al obtener los articulos</p>;
  } else {
    return dataAlbums.albums && (
      <div className='center'>
        <div className='content'>
          <PaintAlbums {...this.props}></PaintAlbums>
          <div className='clearLeft'></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  addAlbum: album => dispatch(addAlbum(album))
});

export default compose(connect(mapStateToProps, mapDispatchToProps),injectLifecycle)(ListAlbums)
