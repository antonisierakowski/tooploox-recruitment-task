import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { App } from './components/App';
import { store } from './store';
import { provideStore } from './provideStore';

ReactDOM.render(provideStore(<App />, store), document.getElementById('root'));
