import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello'
//import Card from './Card'
//import CardList from './CardList'
import Main from './Main'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
//import { robots } from './robots';

//ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'}/>, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
