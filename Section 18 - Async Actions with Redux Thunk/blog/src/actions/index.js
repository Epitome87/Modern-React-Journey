import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //   const userIds = _.uniq(_.map(getState().posts, 'userId'));
  //   userIds.forEach((id) => dispatch(fetchUser(id)));

  // Refactor using lodash's chain function
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// Bad approach! Breaking rules of Redux! Breaking rules of Action Creator: "Actions must be plain objects"! "Use custom middleware for async actions"!
//   const response = await jsonPlaceholder.get('/posts');

//   return {
//     type: 'FETCH_POSTS',
//     payload: response,
//   };

//   This way works, but we will clean up the syntax quite a bit and use the above version!
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };

// Fetch a single user based on ID -- Non-memoized version
export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Memoized version
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
// Refactor the above
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   // Fetch a single user based on ID
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
