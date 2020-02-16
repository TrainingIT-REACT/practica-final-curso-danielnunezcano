import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Sidebar from './components/Sidebar'
import ListAlbums from './components/ListAlbums'
import Album from './components/Album'
import Song from './components/Song'
import store from './store'
// Css
import './App.css'

const Header = React.lazy(() => import('./components/Header'))
const Footer = React.lazy(() => import('./components/Footer'))

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  async componentDidMount () {
    try {
      const resAlbums = await fetch('/albums')
      const resSongs = await fetch('/songs')
      const jsonAlbums = await resAlbums.json()
      const jsonSongs = await resSongs.json()
      this.setState(prevState => ({
        ...prevState,
        loading: false,
        albums: jsonAlbums,
        songs: jsonSongs
      }))
    } catch (err) {
      console.error('Error accediendo al servidor', err)
    }
  }

  render () {
    return (
      <Provider store={store}>
        <React.Suspense fallback='La aplicación está cargando'>
          <Router>
            <div className='App'>
              <React.Suspense fallback='Cargando Header'>
                <Header />
              </React.Suspense>
              <div>
                <Sidebar />
                <Route exact path={'/'} component={ListAlbums} />
                <Route exact path={'/album/:id'} component={Album} />
                <Route exact path={'/song/:id'} component={Song} />
              </div>
              <React.Suspense fallback='Cargando Footer'>
                <Footer />
              </React.Suspense>
            </div>
          </Router>
        </React.Suspense>
      </Provider>
    )
  }
}

export default App
