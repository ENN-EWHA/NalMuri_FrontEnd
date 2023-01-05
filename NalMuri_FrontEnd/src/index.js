import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Write from './components/writeDiary'
import WriteQuestion from './components/writeQuestion';
import EmotionCard from './components/Emotion/EmotionCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   

  </React.StrictMode>
);


