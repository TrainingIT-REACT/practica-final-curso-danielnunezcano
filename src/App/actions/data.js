import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbums = createAsyncAction("ALBUMS", async () => {
  const res = await fetch("http://localhost:3031/albums");
  return await res.json();
});

export const getSongs = createAsyncAction("SONGS", async () => {
  const res = await fetch("http://localhost:3031/songs");
  return await res.json();
});