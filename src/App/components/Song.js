import React from 'react'
import SearchSong from '../components/SearchSong'
import '../App.css'

const Song = ({ match }) => (
  <div className='center'>
    <div className='content'>
      <div className='song'>
        <SearchSong id={match.params.id} />
      </div>
    </div>
  </div>
)

export default Song
