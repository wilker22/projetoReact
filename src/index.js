import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/Header';
import Footer from './common/Footer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
