import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';
import _ from 'lodash';

const streamReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // Our API returns Streams as an array (in action.payload), so we use this lodash method to
      // essentially map it to an Object, where the key is the value of the "id" property. We then
      // merge it to the existing streams
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // Unlike others, action.payload only includes the stream Id, not entire stream obj
      return _.omit(state, action.payload);
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default streamReducer;
