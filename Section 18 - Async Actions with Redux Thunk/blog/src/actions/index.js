import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
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
