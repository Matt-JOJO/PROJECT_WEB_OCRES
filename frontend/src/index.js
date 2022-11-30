import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Map from './Map';
import Pilote from './pilote';
import Meteo from './meteo';
import Maree from './maree';
import Port from './port';
import Graph from './graph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
      <div className="container">
        <div className="ma"><Map /></div>
        <div className="child">
          <div className="pi"><Pilote /></div>
          <div className="groupe"><div className="mm">
            <Meteo />
            <Maree />
          </div>
            <div className="po"><Port /></div>
          </div>

          <div className="gr"><Graph /></div>
        </div>

      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
