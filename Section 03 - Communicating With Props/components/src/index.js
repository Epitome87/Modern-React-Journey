import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

function App() {
  function randomID() {
    return Math.random().toString();
  }

  const commentsData = [];
  for (let i = 0; i < 10; i++) {
    commentsData.push({
      id: randomID(),
      author: faker.name.firstName(),
      avatar: faker.image.avatar(),
      content: faker.lorem.text(),
      date: faker.date.soon(),
    });
  }

  return (
    <div className='ui container comments'>
      {commentsData.map((commentData) => (
        <React.Fragment>
          <ApprovalCard>
            <CommentDetail key={commentData.id} commentObj={commentData} />
          </ApprovalCard>
        </React.Fragment>
      ))}
    </div>
    // <React.Fragment>
    //   <Message header='Change in Service' text='We just updated' />
    // </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
