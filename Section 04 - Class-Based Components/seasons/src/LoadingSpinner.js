import React from 'react';

function LoadingSpinner(props) {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.children}</div>
    </div>
  );
}

LoadingSpinner.defaultProps = {
  children: 'L O A D I N G . . .',
};

export default LoadingSpinner;
