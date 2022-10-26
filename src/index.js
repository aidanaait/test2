import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greetings from './components/greetings';
import Score from './components/score';
import 'bootstrap/dist/css/bootstrap.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
//props
// root.render(<><Greeting name="Anu" course="CSIS3380"/><Score count={0}/></>)
root.render(<App/>)