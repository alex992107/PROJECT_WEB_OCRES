import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom' 
import './index.css';
import App from './App';
import Navbar from './Navbar';
import * as serviceWorker from './serviceWorker';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );



ReactDOM.render(<Navbar/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
