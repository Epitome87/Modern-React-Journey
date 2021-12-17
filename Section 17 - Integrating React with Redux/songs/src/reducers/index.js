import { combineReducers } from 'redux';

const songsReducer = (action, payload) => {
  return [
    { title: 'Uprising', duration: '4:18' },
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It That Way', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
