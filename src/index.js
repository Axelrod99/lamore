import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Event from './component/Event'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Router>
   <Routes>
      <Route path='/' element={<App/>}/> 
      <Route path='/Event' element={<Event/>}/>
   </Routes>
  </Router>,

 document.getElementById('root')
);

