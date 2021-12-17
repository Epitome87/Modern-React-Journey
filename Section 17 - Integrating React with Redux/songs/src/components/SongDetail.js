import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ song }) {
  if (!song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
