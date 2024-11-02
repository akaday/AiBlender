
// src/App.js
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { analyzeImage } from './models/image';
import { analyzeText } from './models/nlp';
import { analyzeSentiment } from './models/sentiment';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <h1>Welcome to AiBlender!</h1>
      <p>{analyzeText('Hello, AiBlender!')}</p>
      <p>{analyzeSentiment('This is fantastic!')}</p>
    </div>
  );
}

export default App;
