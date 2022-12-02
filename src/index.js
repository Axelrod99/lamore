import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Event from './component/Event'
import Transaction from './component/Transaction'
import Chat from './component/Chat'
import Settings from './component/Settings'


ReactDOM.render(
  <Router>
   <Routes>
      <Route path='/' element={<App/>}/> 
      <Route path='/Event' element={<Event/>}/>
      <Route path='/Transaction' element={<Transaction/>}/>
      <Route path='/Chat' element={<Chat/>}/>
      <Route path='/Settings' element={<Settings/>}/>
   </Routes>
  </Router>,

 document.getElementById('root')
);

