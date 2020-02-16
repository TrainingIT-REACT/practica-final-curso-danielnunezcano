import React from 'react'
import { connect } from "react-redux";

import { getAlbums } from "../actions/data";
import PaintAlbums from "./PaintAlbums";

import '../App.css'

class ListAlbums extends React.Component {
  componentDidMount() {
    this.props.getAlbums();    
  }

  renderAlbums() {
    const { dataAlbums } = this.props;

    if (dataAlbums.loading) {
      return <p>Cargando...</p>;
    } else if (dataAlbums.error) {
      return <p>Hubo un error al obtener los articulos</p>;
    } else {
      return dataAlbums.albums && (
        <div className='center'>
          <div className='content'>
            <PaintAlbums albums={dataAlbums.albums}></PaintAlbums>
            <div className='clearLeft'></div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
    <div>
     {this.renderAlbums()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAlbums);
