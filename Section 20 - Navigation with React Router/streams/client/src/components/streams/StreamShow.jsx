import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamShow({ fetchStream, streams }) {
  const { streamId } = useParams();

  useEffect(() => {
    console.log('FETCHING STREAM');
    fetchStream(streamId);
  }, [streamId]);

  if (!streams || !streams[streamId]) return 'Loading...';

  return (
    <div>
      Details for Stream {streamId}
      <div>{streams[streamId].title}</div>
      <div>{streams[streamId].description}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
