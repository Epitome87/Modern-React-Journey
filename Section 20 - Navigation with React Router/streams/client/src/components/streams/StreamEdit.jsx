import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

function StreamEdit({ fetchStream, editStream }) {
  const { streamId } = useParams();
  const stream = useSelector((state) => {
    return state.streams[streamId];
  });

  useEffect(() => {
    fetchStream(streamId);
  }, [streamId]);

  const handleSubmitForm = (formValues) => {
    editStream(streamId, formValues);
  };

  if (!stream) return `Loading Stream ${streamId}...`;

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        onSubmit={handleSubmitForm}
        initialValues={_.pick(stream, 'title', 'description')}
      />
    </div>
  );
}

export default connect(null, { fetchStream, editStream })(StreamEdit);
