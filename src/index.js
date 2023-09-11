import 'whatwg-fetch' // helps to work our website on internet explorer
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home';
import Rules from './components/Rules';
import Quiz from './components/Quiz';
import Score from './components/Score';
import UserDetails from './components/UserDetails';
import Thank from './components/Thank';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     
      <Routes>
      <Route path='/' element={<UserDetails></UserDetails>}></Route>
       <Route path='/Home/:regno' element={ <Home></Home>}/>
       <Route path='/quiz-for/:regno' element={<Quiz></Quiz>}></Route>
        <Route path='/rules-for/:regno' element={<Rules></Rules>}></Route>
        <Route path='/thank-you/:user' element={<Thank></Thank>}></Route>
        <Route path='/score' element={<Score></Score>}></Route>
        
      </Routes>
    </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
