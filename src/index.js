import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class-based component called App
//extends inherits from React.Component 
// in other words: tells App to behave like a component.

import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

