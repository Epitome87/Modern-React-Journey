// Action Creator
export const selectSong = (song) => {
  // Return an Action (Plain JS object). Must have a type property, optionally a payload
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
