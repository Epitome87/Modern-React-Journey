import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import { history } from '../history';
import { HistoryRouter } from './HistoryRouter';

function App() {
  return (
    <React.Fragment>
      <HistoryRouter history={history}>
        <Header />
        <Routes>
          <Route path='/' element={<StreamList />} />
          <Route path='/streams/new' element={<StreamCreate />} />
          <Route path='/streams/edit/:streamId' element={<StreamEdit />} />
          <Route path='/streams/delete/:streamId' element={<StreamDelete />} />
          <Route path='/streams/:streamId' element={<StreamShow />} />
        </Routes>
      </HistoryRouter>
    </React.Fragment>
  );
}

export default App;
