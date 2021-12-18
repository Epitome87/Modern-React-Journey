import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []); // Treat like componentDidMount

  return <div>PostList</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
