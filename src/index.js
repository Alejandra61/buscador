import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
// import Boton from './componets/Boton.jsx';
import { GitExpertApp } from './components/GitExpertApp.jsx';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Boton/> */}
    <GitExpertApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

