import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../history';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';

function StreamDelete({ fetchStream, deleteStream }) {
  const { streamId } = useParams();

  const stream = useSelector((state) => {
    return state.streams[streamId];
  });

  useEffect(() => {
    fetchStream(streamId);
  }, []);

  const modalActions = (
    <React.Fragment>
      <button
        className='ui button negative'
        onClick={() => deleteStream(streamId)}
      >
        Delete
      </button>
      <Link to='/' className='ui button'>
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderModalContent = () => {
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  };

  return (
    <Modal
      title='Delete Stream'
      content={renderModalContent()}
      actions={modalActions}
      onDismiss={() => history.push('/')}
    />
  );
}

// const mapStateToProps = (state, ownProps) => {
//   return { stream: state.streams[stateId] };
// };

export default connect(null, { fetchStream, deleteStream })(StreamDelete);
