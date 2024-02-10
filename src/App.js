import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Try from './Pages/Try';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Try />}/>
        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
