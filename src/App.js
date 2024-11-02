// src/App.js
import React from 'react';
import Header from './components/Header';
import { analyzeText } from './models/nlp';

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to AiBlender!</h1>
      <p>{analyzeText('Hello, AiBlender!')}</p>
    </div>
  );
}

export default App;
