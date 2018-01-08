import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './client/components/Main/Main.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
