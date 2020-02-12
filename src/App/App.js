import React, { Component, Fragment } from 'react';

// Css
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: [  {
        id: 1,
        name: "Chip off the old block",
        artist: "Blair",
        cover: "/images/cover.jpg"
      },
      {
        id: 2,
        name: "Battle grounds",
        artist: "Florian",
        cover: "/images/cover.jpg"
      },
      {
        id: 3,
        name: "Decisions decisions",
        artist: "Skylar",
        cover: "/images/cover.jpg"
      },
      {
        id: 4,
        name: "Blank canvas",
        artist: "Skylar",
        cover: "/images/cover.jpg"
      },
      {
        id: 5,
        name: "Ice cold",
        artist: "Kimberley",
        cover: "/images/cover.jpg"
      },
      {
        id: 6,
        name: "Honesty",
        artist: "Ted Garrett",
        cover: "/images/cover.jpg"
      },
      {
        id: 7,
        name: "Creative director",
        artist: "Delaney",
        cover: "/images/cover.jpg"
      },
      {
        id: 8,
        name: "No guarantees",
        artist: "Kimberley",
        cover: "/images/cover.jpg"
      },
      {
        id: 9,
        name: "Don't push this button",
        artist: "Delaney",
        cover: "/images/cover.jpg"
      },
      {
        id: 10,
        name: "Cherry",
        artist: "Stacy",
        cover: "/images/cover.jpg"
      }]
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Componente</h1>
        <label>Nombre</label>
        <input
        id="name"
        placeholder="Cris"
        type="text"
        onChange={alert("Ojete")} />
        <ul>
        {
          this.state.albums.map(a => {
            return <Fragment key={a.id}>
              <dt>{a.name}</dt>
              <dd>{a.artist}</dd>
            </Fragment>
          })
        }
        </ul>
          { this.state.loading ?
            <p>Cargando...</p>
            : <ul>
              {this.state.albums.map(album => <li key={album.id}>{album.name}</li>)}
            </ul>
          }
        <h2>¿Dudas?</h2>
        <p>
          No olvides pasarte por el foro si tienes alguna duda sobre la práctica final
          o la plantilla :).
        </p>
      </div>
    );
  }
}

export default App;
