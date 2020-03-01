import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

const Footer = ({ playerSong }) => (
  <div className='bottomSidebar'>
    {/* <div className='myButton otherButton'>Ant</div>
    <div className='myButton play'>Play</div>
    <div className='myButton otherButton'>Sigu</div> */}
    <audio
      src={playerSong.audio}
      controls='controls'
      type='audio/mpeg'
      preload='preload'
      autoPlay
    ></audio>
  </div>
)

const mapStateToProps = state => {
  return {
    playerSong: state.playerActions.playerSong
  }
}

export default connect(mapStateToProps)(Footer)
