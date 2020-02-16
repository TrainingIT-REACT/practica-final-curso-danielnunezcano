const addSong = (store) => (next) => (action) => {
    console.log("Nueva accion: ", action);
    return next(action);
}

export default addSong;