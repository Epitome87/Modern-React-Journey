import React from 'react';

const CommentDetail = (props) => {
  const options = {
    // weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.commentObj.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.commentObj.author}
        </a>
        <div className='metadata'>
          <span className='date'>
            {props.commentObj.date.toLocaleDateString('en-US', options)}
          </span>
        </div>
        <div className='text'>{props.commentObj.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
