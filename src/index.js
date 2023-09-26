import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const IMAGES = {
  img1: require("./assets/images/img1.png"),
  img2: require("./assets/images/img2.png"),
  img3: require("./assets/images/img3.png"),
  vat: require("./assets/images/vat.png"),
  pitt: require("./assets/images/pitt.png"),
  kaff: require("./assets/images/kaff.png"),
  conclusionBackgroundImage: require("./assets/images/conclusionBackgroundImg.jpg"),
  rootBackgroundImage: require("./assets/images/bckd.png")
  
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default IMAGES;