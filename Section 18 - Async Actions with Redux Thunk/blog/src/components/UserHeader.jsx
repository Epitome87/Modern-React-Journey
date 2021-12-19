import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

function UserHeader({ userId, fetchUser, user }) {
  //   useEffect(() => {
  //     fetchUser(userId);
  //   }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div className='header'>{user.name}</div>;
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
