import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ListAlbums from './components/ListAlbums'
import Album from './components/Album'
import Song from './components/Song'
import store from './store'
import ListRecomended from './components/ListRecomended'
// Css
import './App.css'

const Header = React.lazy(() => import('./components/Header'))
const Footer = React.lazy(() => import('./components/Footer'))

const App = () => {
  return (
    <Provider store={store}>
      <React.Suspense fallback='La aplicación está cargando'>
        <Router>
          <div className='App'>
            <React.Suspense fallback='Cargando Header'>
              <Header />
            </React.Suspense>
            <div>
              <Route exact path={'/'} component={ListAlbums} />
              <Route exact path={'/album/recomended'} component={ListRecomended} />
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

export default App
