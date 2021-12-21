import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./streams/Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/new" element={<StreamCreate />} />
          <Route path="/edit" element={<StreamEdit />} />
          <Route path="/delete" element={<StreamDelete />} />
          <Route path="/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
