import { allAlbums, allSongs } from './actions/playerActions'
import { connect } from 'react-redux'

const servidor = ({ allAlbums, allSongs }) => {
  return allAlbums && allSongs
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    allAlbums: albums => dispatch(allAlbums(albums)),
    allSongs: songs => dispatch(allSongs(songs))
  }
}

export default connect(() => ({}), mapDispatchToProps)(servidor)
